const express = require("express");//--->>> importa lo que está en la libreria de express
const app = express();//--->>> ejecuta express
const bodyParser = require("body-parser");
const routes = require("./routes");// --->>> importar lo que está en la carpeta de routes/rutas para ello tiene que haber si o si un index, el index es la raiz de nuestro BE

//linea 6 y 7 sirven para enviar un req.body que contiene un nuevo usuario y lo pusheo dentro del array users
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/", routes);//accedé a "/" quiero que uses routes/rutas, osea toda la logica 

app.listen(3000, () => {
    console.log("Servidor levantado en el puerto 3000, gracias a nodemon");
});


