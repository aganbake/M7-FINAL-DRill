const { Bootcamp, User } = require("../models");

const createBootcamp = async (bootcamp) => {
  try {
    const newBootcamp = await Bootcamp.create({
      title: bootcamp.title,
      cue: bootcamp.cue,
      description: bootcamp.description,
    });
    console.log(
      `Se ha creado el bootcamp ${JSON.stringify(newBootcamp, null, 4)}`
    );
    return newBootcamp;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addUserToBootcamp = async (idBootcamp, idUser) => {
  try {
    const bootcamp = await Bootcamp.findByPk(idBootcamp);
    if (!bootcamp) {
      console.log(`No se encontró bootcamp con id ${idBootcamp}`);
      return null;
    }
    const usuario = await User.findByPk(idUser);
    if (!usuario) {
      console.log(`No se encontró usuario con id ${idUser}`);
      return null;
    }
    await bootcamp.addUser(usuario);
    console.log(
      `Agregado el usuario id ${usuario.id} al bootcamp con id ${bootcamp.id}`
    );
    return bootcamp;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findById = async (id) => {
  try {
    const bootcamp = await Bootcamp.findByPk(id, {
      include: ["user"],
    });
    console.log(
      `Se ha encontrado el bootcamp ${JSON.stringify(bootcamp, null, 4)}`
    );
    return bootcamp;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findAll = async () => {
  try {
    const bootcamps = await Bootcamp.findAll({
      include: ["user"],
    });
    console.log(
      `Se han encontrado los bootcamps ${JSON.stringify(bootcamps, null, 4)}`
    );
    return bootcamps;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  createBootcamp,
  addUserToBootcamp,
  findById,
  findAll,
};
