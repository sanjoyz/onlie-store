const ApiError = require('../error/apiError')
const { Device, DeviceInfo } = require('../models/models')
const uuid = require('uuid')
const path = require('path')

class DeviceController {
  async create (req, res, next) {
    try {
      const { name, price, BrandId, TypeId, info } = req.body
      const { img } = req.files
      const fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const device = await Device.create({ name, price, BrandId, TypeId, img: fileName })

      if (info) {
        info = JSON.parse(info) // form-data returns string, so parse
        info.forEach(element => {
          DeviceInfo.create({
            title: element.title,
            description: element.description,
            device: device.id
          })
        })
      }

      return res.json({ device })
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }

  async getAll (req, res) {
    let { BrandId, TypeId, limit, page } = req.query
    page = page || 1
    limit = limit || 9
    const offset = limit * page - limit

    let devices

    if (!BrandId && !TypeId) {
      devices = await Device.findAndCountAll({ limit, offset })
    }
    if (BrandId && !TypeId) {
      devices = await Device.findAndCountAll({ where: { BrandId }, limit, offset })
    }
    if (!BrandId && TypeId) {
      devices = await Device.findAndCountAll({ where: { TypeId }, limit, offset })
    }
    if (BrandId && TypeId) {
      devices = await Device.findAndCountAll({ where: { TypeId, BrandId }, limit, offset })
    }

    return res.json(devices)
  }

  async getByID (req, res) {
    const { id } = req.params
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: 'info' }]
    })
    return res.json(device)
  }
}

module.exports = new DeviceController()
