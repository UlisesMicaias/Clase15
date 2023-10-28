const express = require("express");//-->>> importar la libreria express
const router = express.Router();///--->>> define las rutas, es el ruteador

router.get("/", (req, res) => {
    res.status(200).send("Accediste a /");
});

router.post("/", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    console.log("Usuario agregado a la DB");
    console.log(users);
    res.status(201).send("Usuario creado :)");
    // res.status(200).send("Accediste mediante el POST");
});

router.put("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((usuario)=> usuario.id === Number(id));
    user.age = req.body.age; // le modificamos la propiedad age mediante el body del new request
    user.name = req.body.name;
    users.splice(id -1, 1, user);// y luego le eliminamos el age y le agregamos la modificacion
    console.log(users)
    res.status(200).send("User creado exitosamente :)");
});

router.delete("/", (req, res) => {
    res.status(200).send("Accediste mediante el DELETE");
});

router.get("/saludo", (req, res)=>{
    res.status(201).send("Accediste a /saludo");
});

router.get("/login", (req, res) => {
    res.status(200).send("Accediste a /login");
});

router.get("/users", (req, res) => {
    res.status(200).send(users);
});

router.get("/users/:userId", (req, res) =>{
    //const id = req.params.userId; otra forma de mostrar el params
    // console.log(req.params);
    const id = req.params.userId;
    console.log(`El id ingresado es ${id}`);
    const user = users.find((usuario)=> usuario.id === Number(id));
    if (user) {
        res.status(200).send(user)
    }else(
        res.status(404).send("Usuario no encontrado")
    )
    res.status(200).send(user);
    // res.status(200).send("Id del usuario es " + user);
});

const users = [
    {id: 1, name: "micaias", surname: "ulises", age: 18},
    {id: 2, name: "denise", surname: "johanna", age: 18},
    {id: 3, name: "guillermo", surname: "cristian", age: 45},
    {id: 4, name: "damaris", surname: "bianca", age: 13}
];

module.exports = router;// de está manera estoy exportando router
