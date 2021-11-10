/**
 * @file users.js
 * @summary Defines and exposes methods for users entity
 * */
 const { Users } = require("../models");

 /**
  * Method to get user by id from DB
  * @param {string} userId User id
  * @param {object} [selection] Object with DB projection
  * */
 const getUserById = (userId, selection = {}) =>
   Users.findOne(
     {
       _id: userId,
     },
     selection
   ).lean();
 
 /**
  * Method to get all users from DB
  * @param {string} condition Condition by which user will be fetched
  * @param {object} [selection] Object with DB projection
  * */
 const getUsers = (condition = {}, selection = {}) =>
   Users.find(condition,
     selection
   ).lean();
 
 /**
  * Method to get user info from DB
  * @param {string} condition Condition by which user will be fetched
  * @param {object} [selection] Object with DB projection
  * */
 const getUser = (condition = {}, selection = {}) =>
   Users.findOne(condition, selection).lean();
 
 /**
  * Method to create user in DB
  * @param {object} userObj User info to save
  * */
 const createUser = (userObj) => {
   const user = new Users(userObj);
   return user.save();
 };
 
 /**
  * Method to get user by id from DB
  * @param {string} userId User id
  * @param {object} updates Data to update
  * */
 const updateUserById = (userId, updates) =>
   Users.updateOne(
     {
       _id: userId,
     },
     {
       $set: updates,
     }
   );

   /**
  * Method to get user by id from DB
  * @param {string} userId User id
  * @param {object} updates Data to update
  * */
 const updateUserByEmail = (email, updates) =>
 Users.updateOne(
   {
     email: email,
   },
   {
     $set: updates,
   }
 );

  
 module.exports = {
   getUser,
   getUsers,
   getUserById,
   createUser,
   updateUserById,
   updateUserByEmail,
 };
 