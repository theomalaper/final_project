const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const verify = require('./verifyToken')


//VALIDATION
const Joi = require('@hapi/joi')

const registerValidation = data => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required().pattern(/^[a-zA-Z0-9]{3,30}$/).min(5),
  })

  return schema.validate(data)
}

const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required().pattern(/^[a-zA-Z0-9]{3,30}$/).min(5),
  })

  return schema.validate(data)
}

module.exports = knex => {
  router.post('/register', async (req, res) => {

    //Check data before we add user
    const { error } = registerValidation(req.body)
    if (error) {
      return res.status(400).send(error.details[0].message)
    }

    //Check if a user already uses the email provided
    const userArr = await  knex.select("first_name")
      .from("users")
      .where("email", req.body.email)
    if (userArr.length !== 0) {
      return res.status(400).send('Email already exists')
    }

    //Hashes password with salt
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //Create and return a new user
    try {
      const user = await knex('users')
        .insert({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: hashedPassword,
        })
        .returning("*")

      const token = jwt.sign({_id: user[0].id}, process.env.TOKEN_SECRET)

      res.send({
        user: {
          first_name: user[0].first_name,
          last_name: user[0].last_name,
          email: user[0].email
        },
        jwt: token
      })
    } catch (err) {
      res.status(400).send(err)
    }
  });

  router.post('/login', async (req, res) => {

    //Check data before login a user
    const { error } = loginValidation(req.body)
    if (error) {
      return res.status(400).send(error.details[0].message)
    }

    //Check to see if a user exists for the provided email
    const user = await knex.select("*")
      .from("users")
      .where("email", req.body.email)
    if (user.length === 0) {
      return res.status(400).send("Email is not found")
    }

    //Compares and validates the password
    const validPass = await bcrypt.compare(req.body.password, user[0].password)
    if (!validPass) {
      return res.status(400).send("Incorrect Password")
    }

    //Sets a token
    const token = jwt.sign({_id: user[0].id}, process.env.TOKEN_SECRET)

    //Returns token
    try {
      res.send({
        user: {
          first_name: user[0].first_name,
          last_name: user[0].last_name,
          email: user[0].email
        },
        jwt: token
      })
    } catch (err) {
      res.status(400).send(err)
    }
  })

  router.get('/profile', verify, (req, res) => {

    Promise.all([
      knex
        .select('first_name', 'last_name', 'email')
        .from('users')
        .where('id', req.user._id),

      knex
        .select( 'trips.id', 'trips.name', 'trips.budget', 'cities.name as starting_city_name', 'trips.start_date', 'trips.traveller_nb', 'trips.travel_type', 'zones.name as zone_name')
        .from('trips')
        .innerJoin('cities', 'cities.id', 'trips.starting_city')
        .innerJoin('zones', 'zones.id', 'trips.zone_id')
        .where('trips.isPlanning', false)
        .andWhere('trips.user_id', req.user._id),

      knex
        .select('trips.name as trip_name', 'cities.id', 'cities.name', 'cities.description', 'cities.city_image', 'cities.country')
        .from('cities')
        .innerJoin('city_trips', 'cities.id', 'city_trips.city_id')
        .innerJoin('trips', 'trips.id', 'city_trips.trip_id')
        .where('trips.user_id', req.user._id),

      knex
        .select('activities.id', 'activities.name', 'activities.description', 'activities.activity_image', 'cities.name as city_name', 'cities.country', 'trips.name as trip_name', 'activity_links.name as link_name', 'activity_links.url')
        .from('selected_activities')
        .innerJoin('activities', 'selected_activities.activity_id', 'activities.id')
        .innerJoin('cities', 'cities.id', 'activities.city_id')
        .innerJoin('activity_links', 'activities.id', 'activity_links.activity_id')
        .innerJoin('city_trips', 'selected_activities.city_trip_id', 'city_trips.id')
        .innerJoin('trips', 'trips.id', 'city_trips.trip_id')
        .where('trips.user_id', req.user._id)
        .andWhere('activity_links.type', 'guide')
    ])
    .then(result => {
       res.json(result)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  })
  return router;
};