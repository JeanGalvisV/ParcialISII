/**
 * Examen.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {type: 'number', columnName: 'ProductID', autoIncrement: true  },
    ProductName: { type: 'string' , required: true },
    SupplierID: { type: 'number' , required: true, unique: true },
    CategoryID: { type: 'number' , required: true, unique: true },
    QuantityPerUnit: { type: 'string' , required: true },
    UnitPrice: { type: 'number' , required: true },
    UnitInStock: { type: 'number' , required: true },
    UnitsOnOrder: { type: 'number' , required: true },
    ReorderLevel: { type: 'number' , required: true },
    Discontinued: { type: 'number' , required: true },
  },

};

