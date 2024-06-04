const {response} = require("express");


const crearUsuario = async (req, res = response) => {
    const { name , email, password } = req.body;

  res.send({
    mensaje: "Login",
  });
};

const loginUsuario = async (req, res = response) => {
    const { email, password } = req.body;

    res.send({
        mensaje: "Login",
    });
};

const revalidarToken = async (req, res = response) => {
    res.send({
        mensaje: "Login",
    });
    };

module.exports = {
  crearUsuario,
    loginUsuario,
    revalidarToken
};
