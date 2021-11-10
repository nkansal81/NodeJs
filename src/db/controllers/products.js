/**
 * @file Product.js
 * @summary Defines and exposes methods for Product entity
 * */
 const { Products } = require("../models");

 /**
  * Method to get product by id from DB
  * @param {string} productId Product id
  * @param {object} [selection] Object with DB projection
  * */
 const getProductById = (productId, selection = {}) =>
   Products.findOne(
     {
       _id: productId,
     },
     selection
   ).lean();
 
 /**
  * Method to get all Product from DB
  * @param {string} condition Condition by which product will be fetched
  * @param {object} [selection] Object with DB projection
  * */
 const getProducts = (condition = {}, selection = {}) =>
   Products.find(condition,
     selection
   ).lean();
 
 /**
  * Method to get product info from DB
  * @param {string} condition Condition by which product will be fetched
  * @param {object} [selection] Object with DB projection
  * */
 const getProduct = (condition = {}, selection = {}) =>
   Products.findOne(condition, selection).lean();
 
 /**
  * Method to create product in DB
  * @param {object} productObj Product info to save
  * */
 const createProduct = (productObj) => {
   const product = new Products(productObj);
   return product.save();
 };
 
 /**
  * Method to get product by id from DB
  * @param {string} productId Product id
  * @param {object} updates Data to update
  * */
 const updateProductUsingId = (productId, updates) =>
   Products.updateOne(
     {
       _id: productId,
     },
     {
       $set: updates,
     }
  );

   /**
  * Method to delete product info from DB
  * @param {string} condition Condition by which product will be fetched
  * @param {object} [selection] Object with DB projection
  * */
   const deleteProduct = (condition = {}, selection = {}) =>
   Products.deleteOne(condition, selection).lean();

 
 
 module.exports = {
    getProduct,
   getProducts,
   getProductById,
   createProduct,
   updateProductUsingId,
   deleteProduct
 };
 