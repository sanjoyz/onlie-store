import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor () {
    this._types = [
      {
        id: 1,
        name: 'Fridges'
      },
      {
        id: 2,
        name: 'Smartphones'
      },
      {
        id: 3,
        name: 'Notebooks'
      },
      {
        id: 4,
        name: 'TV'
      }
    ]
    this._brands = [
      {
        id: 1,
        name: 'Samsung'
      },
      {

        id: 2,
        name: 'Apple'
      },
      {

        id: 3,
        name: 'Lenovo'
      },
      {

        id: 4,
        name: 'Asus'
      }

    ]
    this._devices = [
      {
        id: 9,
        name: '10 PRO 128GB',
        rating: '0',
        price: 100000,
        img: '6b275294-0196-41ec-98e7-806344d64c9f.jpg',
        createdAt: '2023-03-03 12:55:44.839+03',
        updatedAt: '2023-03-03 12:55:44.839+03',
        TypeId: 2,
        BrandId: 2
      },
      {
        id: 10,
        name: 'STT',
        rating: '0',
        price: 100000,
        img: '6b275294-0196-41ec-98e7-806344d64c9f.jpg',
        createdAt: '2023-03-03 12:55:44.839+03',
        updatedAt: '2023-03-03 12:55:44.839+03',
        TypeId: 1,
        BrandId: 1
      },
      {
        id: 11,
        name: 'SFrostTT',
        rating: '0',
        price: 100000,
        img: '6b275294-0196-41ec-98e7-806344d64c9f.jpg',
        createdAt: '2023-03-03 12:55:44.839+03',
        updatedAt: '2023-03-03 12:55:44.839+03',
        TypeId: 1,
        BrandId: 1
      },
      {
        id: 12,
        name: 'ZenPhone',
        rating: '0',
        price: 100000,
        img: '6b275294-0196-41ec-98e7-806344d64c9f.jpg',
        createdAt: '2023-03-03 12:55:44.839+03',
        updatedAt: '2023-03-03 12:55:44.839+03',
        TypeId: 2,
        BrandId: 2
      },
      {
        id: 13,
        name: 'ZenPhone',
        rating: '0',
        price: 100000,
        img: '6b275294-0196-41ec-98e7-806344d64c9f.jpg',
        createdAt: '2023-03-03 12:55:44.839+03',
        updatedAt: '2023-03-03 12:55:44.839+03',
        TypeId: 2,
        BrandId: 2
      },
      {
        id: 14,
        name: 'ZenPhone',
        rating: '0',
        price: 100000,
        img: '6b275294-0196-41ec-98e7-806344d64c9f.jpg',
        createdAt: '2023-03-03 12:55:44.839+03',
        updatedAt: '2023-03-03 12:55:44.839+03',
        TypeId: 2,
        BrandId: 2
      }
    ]
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this)
  }

  setTypes (types) {
    this._types = types
  }

  setBrands (brands) {
    this._brands = brands
  }

  setDevices (devices) {
    this._devices = devices
  }

  setSelectedType (type) {
    this._selectedType = type
  }

  setSelectedBrand (brand) {
    this._selectedBrand = brand
  }

  get types () {
    return this._types
  }

  get brands () {
    return this._brands
  }

  get devices () {
    return this._devices
  }

  get selectedType () {
    return this._selectedType
  }

  get selectedBrand () {
    return this._selectedBrand
  }
}
