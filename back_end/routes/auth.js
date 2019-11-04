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
        .returning(["first_name", "last_name", "email"])
      res.send(user)
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
      res.header('auth-token', token).send(token)
    } catch (err) {
      res.status(400).send(err)
    }
  })

  router.get('/profile', verify, (req, res) => {
    knex
      .select('*')
      .from('users')
      .where('users.id', req.user._id)
      .join('trips', 'user_id', 'users.id')
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  })
  return router;
};