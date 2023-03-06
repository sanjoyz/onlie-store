import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {
                id:1, name: "Fridge",
                id:2, name: "Smartphone"
            }
        ]   
        this._brands = [
            {
                id:1, name: "Samsung",
                id:2, name: "Iphone",
            }

        ]     
        this._devices = [
            {
                id:9, name:"SuperFrostTT", rating:"0", price: 100000, img:"6b275294-0196-41ec-98e7-806344d64c9f.jpg", createdAt: "2023-03-03 12:55:44.839+03", updatedAt:"2023-03-03 12:55:44.839+03", TypeId: 1, BrandId: 1,
                id:9, name:"SuperFrostTT", rating:"0", price: 100000, img:"6b275294-0196-41ec-98e7-806344d64c9f.jpg", createdAt: "2023-03-03 12:55:44.839+03", updatedAt:"2023-03-03 12:55:44.839+03", TypeId: 1, BrandId: 1,
                id:9, name:"SuperFrostTT", rating:"0", price: 100000, img:"6b275294-0196-41ec-98e7-806344d64c9f.jpg", createdAt: "2023-03-03 12:55:44.839+03", updatedAt:"2023-03-03 12:55:44.839+03", TypeId: 1, BrandId: 1,
                id:9, name:"SuperFrostTT", rating:"0", price: 100000, img:"6b275294-0196-41ec-98e7-806344d64c9f.jpg", createdAt: "2023-03-03 12:55:44.839+03", updatedAt:"2023-03-03 12:55:44.839+03", TypeId: 1, BrandId: 1,
            }
        ]
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}