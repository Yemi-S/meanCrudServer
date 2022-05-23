const Producto = require("../models/Producto");


exports.crearProducto = async (req, res) =>{
    try{
        let producto;

        //Creamos el producto
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);
    }catch(error){
        console.log(req.body);
        res.status(500).send('Hubo un error');
    }
    
}