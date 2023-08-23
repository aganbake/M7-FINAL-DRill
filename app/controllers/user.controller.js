const { User } = require("../models");

const createUser = async (user) => {
  try {
    const usuario = await User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
    console.log(`Se ha creado el usuario ${JSON.stringify(usuario, null, 4)}`);
    return usuario;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findUserById = async (userId) => {
  try {
    const usuario = await User.findByPk(userId, {
      include: ["bootcamp"],
    });
    console.log(
      `Se ha encontrado el usuario ${JSON.stringify(usuario, null, 4)}`
    );
    return usuario;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findAllUsers = async () => {
  try {
    const usuarios = User.findAll({
      include: ["bootcamp"],
    });
    console.log(
      `Se han encontrado los usuarios ${JSON.stringify(usuarios, null, 4)}`
    );
    return usuarios;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateUser = async (userId) => {
  try {
    const usuario = await User.findByPk(userId.id);
    let updated = [];

    if (usuario) {
      if (usuario.firstName != userId.name) {
        updated = await User.update(
          {
            firstName: userId.name,
            lastName: userId.lastName,
          },
          {
            where: { id: userId.id },
          }
        );
        console.log(`Actualizados: ${updated}`);
        console.log(`Se actualizo el usuario con id ${userId.id}`);
      } else {
        updated[0] = -1;
      }
    } else {
      updated[0] = 0;
    }
    return updated[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteUserById = async (id) => {
  try {
    const deleteMe = await User.destroy({
      where: { id },
    });
    console.log(`borrados: ${deleteMe}`);
    console.log(`Usuario id ${id} fue borrado con éxito`);
    return deleteMe;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  createUser,
  findUserById,
  findAllUsers,
  updateUser,
  deleteUserById,
};
