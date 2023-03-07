import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor () {
    this._types = [
      {
        id: 1,
        name: 'Fridge',
        id: 2,
        name: 'Smartphone'
      }
    ];
    this._brands = [
      {
        id: 1,
        name: 'Samsung',
        id: 2,
        name: 'Iphone'
      }

    ];
    this._devices = [
      {
        id: 9,
        name: 'SSa',
        rating: '0',
        price: 100000,
        img: '6b275294-0196-41ec-98e7-806344d64c9f.jpg',
        createdAt: '2023-03-03 12:55:44.839+03',
        updatedAt: '2023-03-03 12:55:44.839+03',
        TypeId: 1,
        BrandId: 1,
        id: 10,
        name: 'STT',
        rating: '0',
        price: 100000,
        img: '6b275294-0196-41ec-98e7-806344d64c9f.jpg',
        createdAt: '2023-03-03 12:55:44.839+03',
        updatedAt: '2023-03-03 12:55:44.839+03',
        TypeId: 1,
        BrandId: 1,
        id: 11,
        name: 'SFrostTT',
        rating: '0',
        price: 100000,
        img: '6b275294-0196-41ec-98e7-806344d64c9f.jpg',
        createdAt: '2023-03-03 12:55:44.839+03',
        updatedAt: '2023-03-03 12:55:44.839+03',
        TypeId: 1,
        BrandId: 1,
        id: 12,
        name: 'SuperFrostTT',
        rating: '0',
        price: 100000,
        img: '6b275294-0196-41ec-98e7-806344d64c9f.jpg',
        createdAt: '2023-03-03 12:55:44.839+03',
        updatedAt: '2023-03-03 12:55:44.839+03',
        TypeId: 1,
        BrandId: 1
      }
    ];
    makeAutoObservable(this);
  }

  setTypes (types) {
    this._types = types;
  }

  setBrands (brands) {
    this._brands = brands;
  }

  setDevices (devices) {
    this._devices = devices;
  }

  get types () {
    return this._types;
  }

  get brands () {
    return this._brands;
  }

  get devices () {
    return this._devices;
  }
}
