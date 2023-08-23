const express = require("express");
const app = express();
require("dotenv").config();
const { StatusCodes } = require("http-status-codes");
const {
  createUser,
  findUserById,
  findAllUsers,
  updateUser,
  deleteUserById,
} = require("./app/controllers/user.controller");
const {
  createBootcamp,
  addUserToBootcamp,
  findById,
  findAll,
} = require("./app/controllers/bootcamp.controller");

const PORT = process.env.PORT;

//http://localhost:3000/user/create/Mateo/Díaz/mateo.diaz@correo.com
//http://localhost:3000/user/create/Santiago/Mejías/santiago.mejias@correo.com
//http://localhost:3000/user/create/Lucas/Rojas/lucas.rojas@correo.com
//http://localhost:3000/user/create/Facundo/Fernandez/facundo.fernandez@correo.com
//http://localhost:3000/user/create/Kevin/Villarroel/kevin@mail.com
app.get("/user/create/:firstname/:lastname/:email", async (req, res) => {
  const firstName = req.params.firstname;
  const lastName = req.params.lastname;
  const email = req.params.email;
  try {
    const usuario = await createUser({ firstName, lastName, email });
    res.status(StatusCodes.CREATED).json({
      message: `usuario ${usuario.firstName} fue creado con éxito`,
      user: usuario,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
});

//http://localhost:3000/bootcamp/create/Bootcamp%20Big%20Data,%20Inteligencia%20Artificial%20&%20Machine%20Learning./18/Domina%20Data%20Science,%20y%20todo%20el%20ecosistema%20de%20lenguajes%20y%20herramientas%20de%20Big%20Data,%20e%20int%C3%A9gralos%20con%20modelos%20avanzados
//http://localhost:3000/bootcamp/create/Bootcamp%20Desarrollo%20Web%20Full%20Stack./12/Crear%C3%A1s%20aplicaciones%20web%20utilizando%20las%20tecnolog%C3%ADas%20y%20lenguajes%20m%C3%A1s%20actuales%20y%20populares,%20como:%20JavaScript,%20nodeJS,%20Angular,%20MongoDB,%20ExpressJS.
//http://localhost:3000/bootcamp/create/Introduciendo%20El%20Bootcamp%20De%20React./10/React%20es%20la%20librer%C3%ADa%20m%C3%A1s%20usada%20en%20JavaScript%20para%20el%20desarrollo%20de%20interfaces.
app.get("/bootcamp/create/:title/:cue/:description", async (req, res) => {
  const title = req.params.title;
  const cue = req.params.cue;
  const description = req.params.description;

  try {
    const bootcamp = await createBootcamp({ title, cue, description });
    res.status(StatusCodes.CREATED).json({
      message: `bootcamp ${bootcamp.title} fue creado con éxito`,
      bootcamp: bootcamp,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
});

// http://localhost:3000/bootcamp/adduser/idBootcamp/1/idUser/1
// http://localhost:3000/bootcamp/adduser/idBootcamp/1/idUser/2
// http://localhost:3000/bootcamp/adduser/idBootcamp/2/idUser/1
// http://localhost:3000/bootcamp/adduser/idBootcamp/3/idUser/1
// http://localhost:3000/bootcamp/adduser/idBootcamp/3/idUser/2
// http://localhost:3000/bootcamp/adduser/idBootcamp/3/idUser/3
app.get(
  "/bootcamp/adduser/idBootcamp/:idBootcamp/idUser/:idUser",
  async (req, res) => {
    const idUser = req.params.idUser;
    const idBootcamp = req.params.idBootcamp;
    try {
      const bootcamp = await addUserToBootcamp(idBootcamp, idUser);
      res.status(StatusCodes.CREATED).json({
        message: `Se agrego usuario id ${idUser} al bootcamp id ${idBootcamp}`,
        bootcamp: bootcamp,
      });
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
);

// http://localhost:3000/user/findById/1
app.get("/user/findById/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const usuario = await findUserById(id);
    if (usuario) {
      res.status(StatusCodes.OK).json({
        message: `usuario ${usuario.firstName} fue encontrado con éxito`,
        user: usuario,
      });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `usuario id ${id} no fue encontrado`,
      });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
});

// http://localhost:3000/bootcamp/findById/1
app.get("/bootcamp/findById/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const bootcamp = await findById(id);
    if (bootcamp) {
      res.status(StatusCodes.OK).json({
        message: `bootcamp ${bootcamp.name} fue encontrado con éxito`,
        bootcamp: bootcamp,
      });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `bootcamp id ${id} no fue encontrado`,
      });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
});

// http://localhost:3000/user
app.get("/user", async (req, res) => {
  try {
    const usuarios = await findAllUsers();
    res.status(StatusCodes.OK).json({
      message: `se encontraron ${usuarios.length} usuarios`,
      users: usuarios,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
});

// http://localhost:3000/bootcamp
app.get("/bootcamp", async (req, res) => {
  try {
    const bootcamps = await findAll();
    res.status(StatusCodes.OK).json({
      message: `se encontraron ${bootcamps.length} bootcamps`,
      bootcamps: bootcamps,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
});

//http://localhost:3000/user/update/id/1/firstName/Pedro/lastName/S%C3%A1nchez
app.get(
  "/user/update/id/:id/firstName/:firstName/lastName/:lastName",
  async (req, res) => {
    const id = Number(req.params.id);
    const name = req.params.firstName;
    const lastName = req.params.lastName;
    try {
      const updated = await updateUser({
        id,
        name,
        lastName,
      });
      if (updated) {
        if (updated !== -1) {
          res.status(StatusCodes.CREATED).json({
            message: `usuario id ${id} fue actualizado con éxito`,
          });
        } else {
          res.status(StatusCodes.BAD_REQUEST).json({
            message: `usuario id ${id} no fue actualizado. No había nada que actualizar.`,
          });
        }
      } else {
        res.status(StatusCodes.NOT_FOUND).json({
          message: `usuario id ${id} no fue encontrado`,
        });
      }
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
);

// http://localhost:3000/user/delete/id/1
app.get("/user/delete/id/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const borrados = await deleteUserById(id);
    if (borrados) {
      res.status(StatusCodes.CREATED).json({
        message: `usuario id ${id} fue borrado con éxito`,
      });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `usuario id ${id} no fue encontrado`,
      });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
});

app.listen(PORT, () => console.log(`Iniciando en puerto ${PORT}`));
