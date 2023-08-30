'use strict';
const bcrypt = require("bcrypt");
const {DATE} = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await  queryInterface.bulkInsert("users", [
       {
         name: "wahyu",
         profession: "Admin Micro",
         role: "admin",
         email: "wahyudin@gmail.com",
         password: await  bcrypt.hash("password123", 10),
         created_at: new Date(),
         updated_at: new Date()
       },
       {
         name: "udin",
         profession: "Frontend Developer",
         role: "student",
         email: "udin@gmail.com",
         password: await  bcrypt.hash("password1234", 10),
         created_at: new Date(),
         updated_at: new Date()
       }
     ])
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('users', null, {});
  }
};
