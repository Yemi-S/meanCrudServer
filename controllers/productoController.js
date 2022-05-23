const Producto = require("../models/Producto");

// Crear Producto
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

//Listar productos
exports.obtenerProductos = async (req, res) =>{
    try{
        const productos = await Producto.find();
        res.json(productos);
    }catch(error){
        console.log(req.body);
        res.status(500).send('Hubo un error');
    }
}

// Actualizar productos
exports.actualizarProducto = async (req, res) =>{
    try{
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({msg: 'No existe el producto'});
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id}, producto, { new: true});
        res.json(producto);
        
    }catch(error){
        console.log(req.body);
        res.status(500).send('Hubo un error');
    }
}

//Obtener un producto por id
exports.obtenerProducto = async (req, res) =>{
    try{
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({msg: 'No existe el producto'});
        }

        res.json(producto);
    }catch(error){
        console.log(req.body);
        res.status(500).send('Hubo un error');
    }
}

//Eliminar un producto por id
exports.eliminarProducto = async (req, res) =>{
    try{
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({msg: 'No existe el producto'});
        }

        await Producto.findOneAndRemove({ _id: req.params.id});
        res.json({msg: 'Producto eliminado con éxito'});
    }catch(error){
        console.log(req.body);
        res.status(500).send('Hubo un error');
    }
}
