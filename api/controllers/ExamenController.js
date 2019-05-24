/**
 * ExamenController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    list: function (req,res){

        Examen.find(function(err, products){
            if(err) {
                return res.serverError(err);
            }
            return res.json(products);
        });
    },
    show: function (req,res){
        let query;
        query = {"id": req.param('ProductID')}
        Examen.find(query).exec(function(err, products){
            if(err) {
                return res.serverError(err);
            }
            return res.json(products);
        });
    },

    create: async function (req,res){

        let data;

        data = { ProductName: req.param('ProductName'), SupplierID: req.param('SupplierID'),
        CategoryID: req.param('CategoryID'), QuantityPerUnit: req.param('QuantityPerUnit'),
        UnitPrice: req.param('UnitPrice'), UnitInStock: req.param('UnitInStock'),
        UnitsOnOrder: req.param('UnitsOnOrder'), ReorderLevel: req.param('ReorderLevel'),
        Discontinued: req.param('Discontinued') }
        
        Examen.create(data).fetch().exec(function(err, products){
            if(err){
                return res.json(err);
            }
            return res.json(products);
        })
    },

    delete: async function (req,res){
        let query;
        query = {"id": req.param('ProductID')}
        Examen.destroy(query).fetch().exec(function(err, products){
            if(err){
                return(err);
            }
            return res.json(products)
            
        })
    },
    update: async function (req,res){
        let query;
        let data;

        query={ "id": req.param('ProductID') }
        data = { ProductName: req.param('ProductName'), SupplierID: req.param('SupplierID'),
        CategoryID: req.param('CategoryID'), QuantityPerUnit: req.param('QuantityPerUnit'),
        UnitPrice: req.param('UnitPrice'), UnitInStock: req.param('UnitInStock'),
        UnitsOnOrder: req.param('UnitsOnOrder'), ReorderLevel: req.param('ReorderLevel'),
        Discontinued: req.param('Discontinued') } 

        Examen.update(query,data, function ExamenUpdate(err, products){
            if(err){
                return (err);
            }
        });    
    }

    
};

