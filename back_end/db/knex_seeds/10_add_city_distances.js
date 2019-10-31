exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('city_distances').del(),
    knex.raw('ALTER SEQUENCE city_distances_id_seq RESTART WITH 1'),
    knex('city_distances').then(function() {
      // Inserts seed entries
      return knex('city_distances').insert([
        {
          starting_city: 1,
          ending_city: 2,
          distance: 302.56,
        },
        {
          starting_city: 1,
          ending_city: 3,
          distance: 322.82,
        },
        {
          starting_city: 1,
          ending_city: 4,
          distance: 272.94,
        },
        {
          starting_city: 1,
          ending_city: 5,
          distance: 505.44,
        },
        {
          starting_city: 1,
          ending_city: 6,
          distance: 553.48,
        },
        {
          starting_city: 1,
          ending_city: 7,
          distance: 816.28,
        },
        {
          starting_city: 1,
          ending_city: 8,
          distance: 975.54,
        },
        {
          starting_city: 1,
          ending_city: 9,
          distance: 912.52,
        },
        {
          starting_city: 1,
          ending_city: 10,
          distance: 1063,
        },
        {
          starting_city: 1,
          ending_city: 11,
          distance: 1188.22,
        },
        {
          starting_city: 1,
          ending_city: 12,
          distance: 1022.85,
        },
        {
          starting_city: 1,
          ending_city: 13,
          distance: 1247.17,
        },
        {
          starting_city: 1,
          ending_city: 14,
          distance: 1281.19,
        },
        {
          starting_city: 1,
          ending_city: 15,
          distance: 1052.89,
        },
        {
          starting_city: 1,
          ending_city: 16,
          distance: 1316.6,
        },
        {
          starting_city: 1,
          ending_city: 17,
          distance: 1353.62,
        },
        {
          starting_city: 1,
          ending_city: 18,
          distance: 1480.96,
        },
        {
          starting_city: 1,
          ending_city: 19,
          distance: 1445.91,
        },
        {
          starting_city: 1,
          ending_city: 20,
          distance: 1430.37,
        },
        {
          starting_city: 2,
          ending_city: 1,
          distance: 302.56,
        },
        {
          starting_city: 2,
          ending_city: 3,
          distance: 472.68,
        },
        {
          starting_city: 2,
          ending_city: 4,
          distance: 246.12,
        },
        {
          starting_city: 2,
          ending_city: 5,
          distance: 303.17,
        },
        {
          starting_city: 2,
          ending_city: 6,
          distance: 484.06,
        },
        {
          starting_city: 2,
          ending_city: 7,
          distance: 640.7,
        },
        {
          starting_city: 2,
          ending_city: 8,
          distance: 790.54,
        },
        {
          starting_city: 2,
          ending_city: 9,
          distance: 819.15,
        },
        {
          starting_city: 2,
          ending_city: 10,
          distance: 909.08,
        },
        {
          starting_city: 2,
          ending_city: 11,
          distance: 1028.28,
        },
        {
          starting_city: 2,
          ending_city: 12,
          distance: 917.63,
        },
        {
          starting_city: 2,
          ending_city: 13,
          distance: 1134.99,
        },
        {
          starting_city: 2,
          ending_city: 14,
          distance: 1201.4,
        },
        {
          starting_city: 2,
          ending_city: 15,
          distance: 1066.01,
        },
        {
          starting_city: 2,
          ending_city: 16,
          distance: 1317.92,
        },
        {
          starting_city: 2,
          ending_city: 17,
          distance: 1358.07,
        },
        {
          starting_city: 2,
          ending_city: 18,
          distance: 1489.88,
        },
        {
          starting_city: 2,
          ending_city: 19,
          distance: 1380.09,
        },
        {
          starting_city: 2,
          ending_city: 20,
          distance: 1397.02,
        },
        {
          starting_city: 3,
          ending_city: 1,
          distance: 322.82,
        },
        {
          starting_city: 3,
          ending_city: 2,
          distance: 472.68,
        },
        {
          starting_city: 3,
          ending_city: 4,
          distance: 245.72,
        },
        {
          starting_city: 3,
          ending_city: 5,
          distance: 468.9, 
        },
        {
          starting_city: 3,
          ending_city: 6,
          distance: 355.6,
        },
        {
          starting_city: 3,
          ending_city: 7,
          distance: 672.02,
        },
        {
          starting_city: 3,
          ending_city: 8,
          distance: 823.63,
        },
        {
          starting_city: 3,
          ending_city: 9,
          distance: 675.62,
        },
        {
          starting_city: 3,
          ending_city: 10,
          distance: 870.03,
        },
        {
          starting_city: 3,
          ending_city: 11,
          distance: 993.39,
        },
        {
          starting_city: 3,
          ending_city: 12,
          distance: 787.54,
        },
        {
          starting_city: 3,
          ending_city: 13,
          distance: 1005.82,
        },
        {
          starting_city: 3,
          ending_city: 14,
          distance: 1014.43,
        },
        {
          starting_city: 3,
          ending_city: 15,
          distance: 743.41,
        },
        {
          starting_city: 3,
          ending_city: 16,
          distance: 1007.11,
        },
        {
          starting_city: 3,
          ending_city: 17,
          distance: 1042.64,
        },
        {
          starting_city: 3,
          ending_city: 18,
          distance: 1167.42,
        },
        {
          starting_city: 3,
          ending_city: 19,
          distance: 1165.98,
        },
        {
          starting_city: 3,
          ending_city: 20,
          distance: 1133.46,
        },
        {
          starting_city: 4,
          ending_city: 1,
          distance: 272.94,
        },
        {
          starting_city: 4,
          ending_city: 2,
          distance: 246.12,
        },
        {
          starting_city: 4,
          ending_city: 3,
          distance: 245.72,
        },
        {
          starting_city: 4,
          ending_city: 5,
          distance: 256.64,
        },
        {
          starting_city: 4,
          ending_city: 6,
          distance: 289.36,
        },
        {
          starting_city: 4,
          ending_city: 7,
          distance: 544.89,
        },
        {
          starting_city: 4,
          ending_city: 8,
          distance: 704.28,
        },
        {
          starting_city: 4,
          ending_city: 9,
          distance: 648.63,
        },
        {
          starting_city: 4,
          ending_city: 10,
          distance: 790.25,
        },
        {
          starting_city: 4,
          ending_city: 11,
          distance: 915.39,
        },
        {
          starting_city: 4,
          ending_city: 12,
          distance: 756.94,
        },
        {
          starting_city: 4,
          ending_city: 13,
          distance: 981.04,
        },
        {
          starting_city: 4,
          ending_city: 14,
          distance: 1024.7,
        },
        {
          starting_city: 4,
          ending_city: 15,
          distance: 840.46,
        },
        {
          starting_city: 4,
          ending_city: 16,
          distance: 1098.95,
        },
        {
          starting_city: 4,
          ending_city: 17,
          distance: 1138.09,
        },
        {
          starting_city: 4,
          ending_city: 18,
          distance: 1268.8,
        },
        {
          starting_city: 4,
          ending_city: 19,
          distance: 1195.61,
        },
        {
          starting_city: 4,
          ending_city: 20,
          distance: 1194.48,
        },
        {
          starting_city: 5,
          ending_city: 1,
          distance: 505.44,
        },
        {
          starting_city: 5,
          ending_city: 2,
          distance: 303.17,
        },
        {
          starting_city: 5,
          ending_city: 3,
          distance: 468.9,
        },
        {
          starting_city: 5,
          ending_city: 4,
          distance: 256.64,
        },
        {
          starting_city: 5,
          ending_city: 6,
          distance: 253.94,
        },
        {
          starting_city: 5,
          ending_city: 7,
          distance: 337.87,
        },
        {
          starting_city: 5,
          ending_city: 8,
          distance: 490.38,
        },
        {
          starting_city: 5,
          ending_city: 9,
          distance: 531.97,
        },
        {
          starting_city: 5,
          ending_city: 10,
          distance: 605.92,
        },
        {
          starting_city: 5,
          ending_city: 11,
          distance: 725.35,
        },
        {
          starting_city: 5,
          ending_city: 12,
          distance: 623.26,
        },
        {
          starting_city: 5,
          ending_city: 13,
          distance: 836.06,
        },
        {
          starting_city: 5,
          ending_city: 14,
          distance: 911.23,
        },
        {
          starting_city: 5,
          ending_city: 15,
          distance: 830.91,
        },
        {
          starting_city: 5,
          ending_city: 16,
          distance: 1065.66,
        },
        {
          starting_city: 5,
          ending_city: 17,
          distance: 1106.71,
        },
        {
          starting_city: 5,
          ending_city: 18,
          distance: 1238.26,
        },
        {
          starting_city: 5,
          ending_city: 19,
          distance: 1092.83,
        },
        {
          starting_city: 5,
          ending_city: 20,
          distance: 1123.73,
        },
        {
          starting_city: 6,
          ending_city: 1,
          distance: 553.48,
        },
        {
          starting_city: 6,
          ending_city: 2,
          distance: 484.06,
        },
        {
          starting_city: 6,
          ending_city: 3,
          distance: 355.6,
        },
        {
          starting_city: 6,
          ending_city: 4,
          distance: 289.36,
        },
        {
          starting_city: 6,
          ending_city: 5,
          distance: 253.94,
        },
        {
          starting_city: 6,
          ending_city: 7,
          distance: 318.71,
        },
        {
          starting_city: 6,
          ending_city: 8,
          distance: 468.08,
        },
        {
          starting_city: 6,
          ending_city: 9,
          distance: 359.86,
        },
        {
          starting_city: 6,
          ending_city: 10,
          distance: 522.38,
        },
        {
          starting_city: 6,
          ending_city: 11,
          distance: 647.52,
        },
        {
          starting_city: 6,
          ending_city: 12,
          distance: 469.46,
        },
        {
          starting_city: 6,
          ending_city: 13,
          distance: 693.81,
        },
        {
          starting_city: 6,
          ending_city: 14,
          distance: 735.62,
        },
        {
          starting_city: 6,
          ending_city: 15,
          distance: 588.13,
        },
        {
          starting_city: 6,
          ending_city: 16,
          distance: 834.88,
        },
        {
          starting_city: 6,
          ending_city: 17,
          distance: 875.3,
        },
        {
          starting_city: 6,
          ending_city: 18,
          distance: 1007.26,
        },
        {
          starting_city: 6,
          ending_city: 19,
          distance: 908.08,
        },
        {
          starting_city: 6,
          ending_city: 20,
          distance: 914.82,
        },
        {
          starting_city: 7,
          ending_city: 1,
          distance: 816.28,
        },
        {
          starting_city: 7,
          ending_city: 2,
          distance: 640.7,
        },
        {
          starting_city: 7,
          ending_city: 3,
          distance: 672.02,
        },
        {
          starting_city: 7,
          ending_city: 4,
          distance: 544.89,
        },
        {
          starting_city: 7,
          ending_city: 5,
          distance: 337.87,
        },
        {
          starting_city: 7,
          ending_city: 6,
          distance: 318.71,
        },
        {
          starting_city: 7,
          ending_city: 8,
          distance: 159.39,
        },
        {
          starting_city: 7,
          ending_city: 9,
          distance: 277.62,
        },
        {
          starting_city: 7,
          ending_city: 10,
          distance: 270.24,
        },
        {
          starting_city: 7,
          ending_city: 11,
          distance: 387.57,
        },
        {
          starting_city: 7,
          ending_city: 12,
          distance: 329.06,
        },
        {
          starting_city: 7,
          ending_city: 13,
          distance: 516.93,
        },
        {
          starting_city: 7,
          ending_city: 14,
          distance: 614.92,
        },
        {
          starting_city: 7,
          ending_city: 15,
          distance: 660.48,
        },
        {
          starting_city: 7,
          ending_city: 16,
          distance: 843.45,
        },
        {
          starting_city: 7,
          ending_city: 17,
          distance: 883.98,
        },
        {
          starting_city: 7,
          ending_city: 18,
          distance: 1009.18,
        },
        {
          starting_city: 7,
          ending_city: 19,
          distance: 798.5,
        },
        {
          starting_city: 7,
          ending_city: 20,
          distance: 858.07,
        },
        {
          starting_city: 8,
          ending_city: 1,
          distance: 975.54,
        },
        {
          starting_city: 8,
          ending_city: 2,
          distance: 790.54,
        },
        {
          starting_city: 8,
          ending_city: 3,
          distance: 823.63,
        },
        {
          starting_city: 8,
          ending_city: 4,
          distance: 704.28,
        },
        {
          starting_city: 8,
          ending_city: 5,
          distance: 490.38,
        },
        {
          starting_city: 8,
          ending_city: 6,
          distance: 468.08,
        },
        {
          starting_city: 8,
          ending_city: 7,
          distance: 159.39,
        },
        {
          starting_city: 8,
          ending_city: 9,
          distance: 298.1,
        },
        {
          starting_city: 8,
          ending_city: 10,
          distance: 154.96,
        },
        {
          starting_city: 8,
          ending_city: 11,
          distance: 247.67,
        },
        {
          starting_city: 8,
          ending_city: 12,
          distance: 290.97,
        },
        {
          starting_city: 8,
          ending_city: 13,
          distance: 419.7,
        },
        {
          starting_city: 8,
          ending_city: 14,
          distance: 542.08,
        },
        {
          starting_city: 8,
          ending_city: 15,
          distance: 685.11,
        },
        {
          starting_city: 8,
          ending_city: 16,
          distance: 823.56,
        },
        {
          starting_city: 8,
          ending_city: 17,
          distance: 862.03,
        },
        {
          starting_city: 8,
          ending_city: 18,
          distance: 978.38,
        },
        {
          starting_city: 8,
          ending_city: 19,
          distance: 719.82,
        },
        {
          starting_city: 8,
          ending_city: 20,
          distance: 803.96,
        },
        {
          starting_city: 9,
          ending_city: 1,
          distance: 912.52,
        },
        {
          starting_city: 9,
          ending_city: 2,
          distance: 819.15,
        },
        {
          starting_city: 9,
          ending_city: 3,
          distance: 675.62,
        },
        {
          starting_city: 9,
          ending_city: 4,
          distance: 648.63,
        },
        {
          starting_city: 9,
          ending_city: 5,
          distance: 531.97,
        },
        {
          starting_city: 9,
          ending_city: 6,
          distance: 359.86,
        },
        {
          starting_city: 9,
          ending_city: 7,
          distance: 277.62,
        },
        {
          starting_city: 9,
          ending_city: 8,
          distance: 298.1,
        },
        {
          starting_city: 9,
          ending_city: 10,
          distance: 235.52,
        },
        {
          starting_city: 9,
          ending_city: 11,
          distance: 340.27,
        },
        {
          starting_city: 9,
          ending_city: 12,
          distance: 112.26,
        },
        {
          starting_city: 9,
          ending_city: 13,
          distance: 335.24,
        },
        {
          starting_city: 9,
          ending_city: 14,
          distance: 382.29,
        },
        {
          starting_city: 9,
          ending_city: 15,
          distance: 391.5,
        },
        {
          starting_city: 9,
          ending_city: 16,
          distance: 566.7,
        },
        {
          starting_city: 9,
          ending_city: 17,
          distance: 607.45,
        },
        {
          starting_city: 9,
          ending_city: 18,
          distance: 734.2,
        },
        {
          starting_city: 9,
          ending_city: 19,
          distance: 561.72,
        },
        {
          starting_city: 9,
          ending_city: 20,
          distance: 596.24,
        },
        {
          starting_city: 10,
          ending_city: 1,
          distance: 1063,
        },
        {
          starting_city: 10,
          ending_city: 2,
          distance: 909.08,
        },
        {
          starting_city: 10,
          ending_city: 3,
          distance: 870.03,
        },
        {
          starting_city: 10,
          ending_city: 4,
          distance: 790.25,
        },
        {
          starting_city: 10,
          ending_city: 5,
          distance: 605.92,
        },
        {
          starting_city: 10,
          ending_city: 6,
          distance: 522.38,
        },
        {
          starting_city: 10,
          ending_city: 7,
          distance: 270.24,
        },
        {
          starting_city: 10,
          ending_city: 8,
          distance: 154.96,
        },
        {
          starting_city: 10,
          ending_city: 9,
          distance: 235.52,
        },
        {
          starting_city: 10,
          ending_city: 11,
          distance: 125.52,
        },
        {
          starting_city: 10,
          ending_city: 12,
          distance: 174.08,
        },
        {
          starting_city: 10,
          ending_city: 13,
          distance: 264.77,
        },
        {
          starting_city: 10,
          ending_city: 14,
          distance: 389.56,
        },
        {
          starting_city: 10,
          ending_city: 15,
          distance: 583.8,
        },
        {
          starting_city: 10,
          ending_city: 16,
          distance: 688.83,
        },
        {
          starting_city: 10,
          ending_city: 17,
          distance: 725.68,
        },
        {
          starting_city: 10,
          ending_city: 18,
          distance: 836.62,
        },
        {
          starting_city: 10,
          ending_city: 19,
          distance: 565.42,
        },
        {
          starting_city: 10,
          ending_city: 20,
          distance: 654.63,
        },
        {
          starting_city: 11,
          ending_city: 1,
          distance: 1188.22,
        },
        {
          starting_city: 11,
          ending_city: 2,
          distance: 1028.28,
        },
        {
          starting_city: 11,
          ending_city: 3,
          distance: 993.39,
        },
        {
          starting_city: 11,
          ending_city: 4,
          distance: 915.39,
        },
        {
          starting_city: 11,
          ending_city: 5,
          distance: 725.35,
        },
        {
          starting_city: 11,
          ending_city: 6,
          distance: 647.52,
        },
        {
          starting_city: 11,
          ending_city: 7,
          distance: 387.57,
        },
        {
          starting_city: 11,
          ending_city: 8,
          distance: 247.67,
        },
        {
          starting_city: 11,
          ending_city: 9,
          distance: 340.27,
        },
        {
          starting_city: 11,
          ending_city: 10,
          distance: 125.52,
        },
        {
          starting_city: 11,
          ending_city: 12,
          distance: 249.96,
        },
        {
          starting_city: 11,
          ending_city: 13,
          distance: 218.41,
        },
        {
          starting_city: 11,
          ending_city: 14,
          distance: 362.49,
        },
        {
          starting_city: 11,
          ending_city: 15,
          distance: 639.57,
        },
        {
          starting_city: 11,
          ending_city: 16,
          distance: 697.85,
        },
        {
          starting_city: 11,
          ending_city: 17,
          distance: 730.89,
        },
        {
          starting_city: 11,
          ending_city: 18,
          distance: 828.86,
        },
        {
          starting_city: 11,
          ending_city: 19,
          distance: 518.08,
        },
        {
          starting_city: 11,
          ending_city: 20,
          distance: 630.56,
        },
        { 
          starting_city: 12,
          ending_city: 1, 
          distance: 1022.85
        },
        {
          starting_city: 12, 
          ending_city: 2,
          distance: 917.63 
        },
        { 
          starting_city: 12, 
          ending_city: 3, 
          distance: 787.54 
        },
        { 
          starting_city: 12, 
          ending_city: 4, 
          distance: 756.94 
        },
        { 
          starting_city: 12, 
          ending_city: 5,
          distance: 623.26 
        },
        { 
          starting_city: 12, 
          ending_city: 6, 
          distance: 469.46 
        },
        { 
          starting_city: 12, 
          ending_city: 7, 
          distance: 329.06 
        },
        { 
          starting_city: 12, 
          ending_city: 8, 
          distance: 290.97 
        },
        { 
          starting_city: 12, 
          ending_city: 9, 
          distance: 112.26 
        },
        { 
          starting_city: 12, 
          ending_city: 10, 
          distance: 174.08 
        },
        { 
          starting_city: 12, 
          ending_city: 11, 
          distance: 249.96 },
        { 
          starting_city: 12, 
          ending_city: 13, 
          distance: 224.35 
        },
        { 
          starting_city: 12, 
          ending_city: 14, 
          distance: 289.91 
        },
        { 
          starting_city: 12, 
          ending_city: 15, 
          distance: 409.76 
        },
        { 
          starting_city: 12, 
          ending_city: 16, 
          distance: 533.14 
        },
        { starting_city: 12, 
          ending_city: 17, 
          distance: 572.04 
        },
        { 
          starting_city: 12, 
          ending_city: 18, 
          distance: 691.15 
        },
        { 
          starting_city: 12, 
          ending_city: 19, 
          distance: 473.38 
        },
        { 
          starting_city: 12, 
          ending_city: 20, 
          distance: 529.71 
        },
        { 
          starting_city: 13, 
          ending_city: 1, 
          distance: 1247.17 
        },
        { 
          starting_city: 13, 
          ending_city: 2, 
          distance: 1134.99 
        },
        { 
          starting_city: 13, 
          ending_city: 3, 
          distance: 1005.82 
        },
        { 
          starting_city: 13, 
          ending_city: 4, 
          distance: 981.04 
        },
        { 
          starting_city: 13, 
          ending_city: 5, 
          distance: 836.06 
        },
        { 
          starting_city: 13, 
          ending_city: 6, 
          distance: 693.81 
        },
        { 
          starting_city: 13, 
          ending_city: 7, 
          distance: 516.93 
        },
        { 
          starting_city: 13, 
          ending_city: 8, 
          distance: 419.7 
        },
        { 
          starting_city: 13, 
          ending_city: 9, 
          distance: 335.24 
        },
        { 
          starting_city: 13, 
          ending_city: 10,
           distance: 264.77 
        },
        { 
          starting_city: 13, 
          ending_city: 11,
           distance: 218.41 
        },
        { 
          starting_city: 13, 
          ending_city: 12,
           distance: 224.35
        },
        { 
          starting_city: 13, 
          ending_city: 14,
           distance: 145.45 
        },
        { 
          starting_city: 13, 
          ending_city: 15,
           distance: 487.88 
        },
        { 
          starting_city: 13, 
          ending_city: 16,
           distance: 491.94 
        },
        { 
          starting_city: 13, 
          ending_city: 17,
           distance: 521.97 
        },
        { 
          starting_city: 13, 
          ending_city: 18,
           distance: 613.13
        },
        { 
          starting_city: 13, 
          ending_city: 19,
           distance: 304.18
        },
        { 
          starting_city: 13, 
          ending_city: 20,
           distance: 412.26 
        },
        { 
          starting_city: 14, 
          ending_city: 1, 
          distance: 1281.19 
        },
        { 
          starting_city: 14, 
          ending_city: 2, 
          distance: 1201.4
        },
        { 
          starting_city: 14, 
          ending_city: 3, 
          distance: 1014.43
        },
        { 
          starting_city: 14, 
          ending_city: 4, 
          distance: 1024.7
        },
        { 
          starting_city: 14, 
          ending_city: 5, 
          distance: 911.23
        },
        { 
          starting_city: 14, 
          ending_city: 6, 
          distance: 735.62
        },
        { 
          starting_city: 14, 
          ending_city: 7, 
          distance: 614.92
        },
        { 
          starting_city: 14, 
          ending_city: 8, 
          distance: 542.08
        },
        { 
          starting_city: 14, 
          ending_city: 9, 
          distance: 382.29
        },
        { 
          starting_city: 14, 
          ending_city: 10,
          distance: 389.56
        },
        { 
          starting_city: 14, 
          ending_city: 11,
          distance: 362.49
        },
        { 
          starting_city: 14, 
          ending_city: 12,
          distance: 289.91 
        },
        { 
          starting_city: 14, 
          ending_city: 13,
          distance: 145.45
        },
        { 
          starting_city: 14, 
          ending_city: 15,
          distance: 397.34
        },
        { 
          starting_city: 14, 
          ending_city: 16,
          distance: 351.89
        },
        { 
          starting_city: 14, 
          ending_city: 17,
          distance: 379.56 
        },
        { 
          starting_city: 14, 
          ending_city: 18,
          distance: 467.68
        },
        { 
          starting_city: 14, 
          ending_city: 19,
          distance: 183.76
        },
        { 
          starting_city: 14, 
          ending_city: 20,
          distance: 268.96
        },
        { 
          starting_city: 15, 
          ending_city: 1, 
          distance: 1052.89
        },
        { 
          starting_city: 15, 
          ending_city: 2, 
          distance: 1066.01
        },
        { 
          starting_city: 15, 
          ending_city: 3, 
          distance: 743.41
        },
        { 
          starting_city: 15, 
          ending_city: 4, 
          distance: 840.46
        },
        { 
          starting_city: 15, 
          ending_city: 5, 
          distance: 830.91
        },
        { 
          starting_city: 15, 
          ending_city: 6, 
          distance: 588.13
        },
        { 
          starting_city: 15, 
          ending_city: 7, 
          distance: 660.48
        },
        { 
          starting_city: 15, 
          ending_city: 8, 
          distance: 685.11
        },
        { 
          starting_city: 15, 
          ending_city: 9, 
          distance: 391.5
        },
        { 
          starting_city: 15, 
          ending_city: 10,
          distance: 583.8
        },
        { 
          starting_city: 15, 
          ending_city: 11,
          distance: 639.57
        },
        { 
          starting_city: 15, 
          ending_city: 12,
          distance: 409.76 
        },
        { 
          starting_city: 15, 
          ending_city: 13,
          distance: 487.88
        },
        { 
          starting_city: 15, 
          ending_city: 14,
          distance: 397.34
        },
        { 
          starting_city: 15, 
          ending_city: 16,
          distance: 263.98
        },
        { 
          starting_city: 15, 
          ending_city: 17,
          distance: 300.75
        },
        { 
          starting_city: 15, 
          ending_city: 18,
          distance: 429.49
        },
        { 
          starting_city: 15, 
          ending_city: 19,
          distance: 477.89 
        },
        { 
          starting_city: 15, 
          ending_city: 20,
          distance: 402.97 
        },
        { 
          starting_city: 16, 
          ending_city: 1, 
          distance: 1316.6
        },
        { 
          starting_city: 16, 
          ending_city: 2, 
          distance: 1317.92
        },
        { 
          starting_city: 16, 
          ending_city: 3, 
          distance: 1007.11
        },
        { 
          starting_city: 16, 
          ending_city: 4, 
          distance: 1098.95
        },
        { 
          starting_city: 16, 
          ending_city: 5, 
          distance: 1065.66
        },
        { 
          starting_city: 16, 
          ending_city: 6, 
          distance: 834.88
        },
        { 
          starting_city: 16, 
          ending_city: 7, 
          distance: 843.45
        },
        { 
          starting_city: 16, 
          ending_city: 8, 
          distance: 823.56
        },
        { 
          starting_city: 16, 
          ending_city: 9, 
          distance: 566.7
        },
        { 
          starting_city: 16, 
          ending_city: 10,
          distance: 688.83
        },
        { 
          starting_city: 16, 
          ending_city: 11,
          distance: 697.85
        },
        { 
          starting_city: 16, 
          ending_city: 12,
          distance: 533.14 
        },
        { 
          starting_city: 16, 
          ending_city: 13,
          distance: 491.94
        },
        { 
          starting_city: 16, 
          ending_city: 14,
          distance: 351.89 
        },
        { 
          starting_city: 16, 
          ending_city: 15,
          distance: 263.98 
        },
        { 
          starting_city: 16, 
          ending_city: 17,
          distance: 41.2 
        },
        { 
          starting_city: 16, 
          ending_city: 18,
          distance: 172.73 
        },
        { 
          starting_city: 16, 
          ending_city: 19,
          distance: 317.2
        },
        { 
          starting_city: 16, 
          ending_city: 20,
          distance: 183.21 
        },
        { 
          starting_city: 17, 
          ending_city: 1, 
          distance: 1353.62
        },
        { 
          starting_city: 17, 
          ending_city: 2, 
          distance: 1358.07
        },
        { 
          starting_city: 17, 
          ending_city: 3, 
          distance: 1042.64
        },
        { 
          starting_city: 17, 
          ending_city: 4, 
          distance: 1138.09
        },
        { 
          starting_city: 17, 
          ending_city: 5, 
          distance: 1106.71
        },
        { 
          starting_city: 17, 
          ending_city: 6, 
          distance: 875.3 
        },
        { 
          starting_city: 17, 
          ending_city: 7, 
          distance: 883.98 
        },
        { 
          starting_city: 17, 
          ending_city: 8, 
          distance: 862.03 
        },
        { 
          starting_city: 17, 
          ending_city: 9, 
          distance: 607.45 
        },
        { 
          starting_city: 17, 
          ending_city: 10,
          distance: 725.68 
        },
        { 
          starting_city: 17, 
          ending_city: 11,
          distance: 730.89 
        },
        { 
          starting_city: 17, 
          ending_city: 12,
          distance: 572.04 
        },
        { 
          starting_city: 17, 
          ending_city: 13,
          distance: 521.97 
        },
        { 
          starting_city: 17, 
          ending_city: 14,
          distance: 379.56 
        },
        { 
          starting_city: 17, 
          ending_city: 15,
          distance: 300.75 
        },
        { 
          starting_city: 17, 
          ending_city: 16,
          distance: 41.2 },

        { 
          starting_city: 17, 
          ending_city: 18,
          distance: 131.98 
        },
        { 
          starting_city: 17, 
          ending_city: 19,
          distance: 325.78 
        },
        { 
          starting_city: 17, 
          ending_city: 20,
          distance: 181.4 
        },
        { 
          starting_city: 18, 
          ending_city: 1, 
          distance: 1480.96 
        },
        { 
          starting_city: 18, 
          ending_city: 2, 
          distance: 1489.88
        },
        { 
          starting_city: 18, 
          ending_city: 3, 
          distance: 1167.42
        },
        { 
          starting_city: 18, 
          ending_city: 4, 
          distance: 1268.88 
        },
        { 
          starting_city: 18, 
          ending_city: 5, 
          distance: 1238.26 
        },
        { 
          starting_city: 18, 
          ending_city: 6, 
          distance: 1007.26
        },
        { 
          starting_city: 18, 
          ending_city: 7, 
          distance: 1009.18 
        },
        { 
          starting_city: 18, 
          ending_city: 8, 
          distance: 978.38
        },
        { 
          starting_city: 18, 
          ending_city: 9, 
          distance: 734.2 
        },
        { 
          starting_city: 18, 
          ending_city: 10,
          distance: 836.62 
        },
        { 
          starting_city: 18, 
          ending_city: 11,
          distance: 828.86 
        },
        { 
          starting_city: 18, 
          ending_city: 12,
          distance: 691.15 
        },
        { 
          starting_city: 18, 
          ending_city: 13,
          distance: 613.13 
        },
        { 
          starting_city: 18, 
          ending_city: 14,
          distance: 467.68 
        },
        { 
          starting_city: 18, 
          ending_city: 15,
          distance: 429.49 
        },
        { 
          starting_city: 18, 
          ending_city: 16,
          distance: 172.73 
        },
        { 
          starting_city: 18, 
          ending_city: 17,
          distance: 131.98 
        },
        { 
          starting_city: 18, 
          ending_city: 19,
          distance: 363.84
        },
        { 
          starting_city: 18, 
          ending_city: 20,
          distance: 213.45 
        },
        { 
          starting_city: 19, 
          ending_city: 1, 
          distance: 1445.91 
        },
        { 
          starting_city: 19, 
          ending_city: 2, 
          distance: 1380.09
        },
        { 
          starting_city: 19, 
          ending_city: 3, 
          distance: 1165.98
        },
        { 
          starting_city: 19, 
          ending_city: 4, 
          distance: 1195.61
        },
        { 
          starting_city: 19, 
          ending_city: 5, 
          distance: 1092.83
        },
        { 
          starting_city: 19, 
          ending_city: 6, 
          distance: 908.08
        },
        { 
          starting_city: 19, 
          ending_city: 7, 
          distance: 798.5 
        },
        { 
          starting_city: 19, 
          ending_city: 8, 
          distance: 719.82 
        },
        { 
          starting_city: 19, 
          ending_city: 9, 
          distance: 561.72 
        },
        { 
          starting_city: 19, 
          ending_city: 10,
          distance: 565.42 
        },
        { 
          starting_city: 19, 
          ending_city: 11,
          distance: 518.08 
        },
        { 
          starting_city: 19, 
          ending_city: 12,
          distance: 473.38
        },
        { 
          starting_city: 19, 
          ending_city: 13,
          distance: 304.18 
        },
        { 
          starting_city: 19, 
          ending_city: 14,
          distance: 183.76 
        },
        { 
          starting_city: 19, 
          ending_city: 15,
          distance: 477.89 
        },
        { 
          starting_city: 19, 
          ending_city: 16,
          distance: 317.2 
        },
        { 
          starting_city: 19, 
          ending_city: 17,
          distance: 325.78 
        },
        { 
          starting_city: 19, 
          ending_city: 18,
          distance: 363.84 
        },
        { 
          starting_city: 19, 
          ending_city: 20,
          distance: 152.52 
        },
        { 
          starting_city: 20, 
          ending_city: 1, 
          distance: 1430.37
        },
        { 
          starting_city: 20, 
          ending_city: 2, 
          distance: 1397.02
        },
        { 
          starting_city: 20, 
          ending_city: 3, 
          distance: 1133.46
        },
        { 
          starting_city: 20, 
          ending_city: 4, 
          distance: 1194.48
        },
        { 
          starting_city: 20, 
          ending_city: 5, 
          distance: 1123.73
        },
        { 
          starting_city: 20, 
          ending_city: 6, 
          distance: 914.82
        },
        { 
          starting_city: 20, 
          ending_city: 7, 
          distance: 858.07
        },
        { 
          starting_city: 20, 
          ending_city: 8, 
          distance: 803.96
        },
        { 
          starting_city: 20, 
          ending_city: 9, 
          distance: 596.24 
        },
        { 
          starting_city: 20, 
          ending_city: 10,
          distance: 654.63 
        },
        { 
          starting_city: 20, 
          ending_city: 11,
          distance: 630.56 
        },
        { 
          starting_city: 20, 
          ending_city: 12,
          distance: 529.71 
        },
        { 
          starting_city: 20, 
          ending_city: 13,
          distance: 412.26 
        },
        { 
          starting_city: 20, 
          ending_city: 14,
          distance: 268.96 
        },
        { 
          starting_city: 20, 
          ending_city: 15,
          distance: 402.97 
        },
        { 
          starting_city: 20, 
          ending_city: 16,
          distance: 183.21 
        },
        { 
          starting_city: 20, 
          ending_city: 17,
          distance: 181.4 
        },
        { 
          starting_city: 20, 
          ending_city: 18,
          distance: 213.45 
        },
        { 
          starting_city: 20, 
          ending_city: 19,
          distance: 152.52 
        }
      ]);
    }),
  ]);
};