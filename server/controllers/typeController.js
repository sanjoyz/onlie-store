const ApiError = require('../error/apiError');
const { Type } = require('../models/models');

class TypeController {
  async create (req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  async get (req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

module.exports = new TypeController();
