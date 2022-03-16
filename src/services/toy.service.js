import { storageService } from "./storage.service.js";
import { syncStorageService } from "./storage.service.sync.js";

const STORAGE_KEY = 'toysDB'

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy
}

function _getUrl(id = '') {
    const BASE_URL = (process.env.NODE_ENV !== 'development')
        ? '/api/toy'
        : '//localhost:3030/api/toy';
    return `${BASE_URL}/${id}`;

}

_createToys()

function query(filterBy) {
    return storageService.query(STORAGE_KEY)
        .then(toys => _filterToys(filterBy, toys))
}

function _filterToys(filterBy, toys) {
    var filteredToys = JSON.parse(JSON.stringify(toys))

    // by name:
    const regex = new RegExp(filterBy.name, 'i')
    filteredToys = filteredToys.filter(toy => regex.test(toy.name))

    // by stock presence:
    if (filterBy.inStock !== null) {
        filteredToys = filteredToys.filter(toy => toy.inStock === filterBy.inStock)
    }

    // by labels: 
    if (filterBy.labels.length) {
        filteredToys = filteredToys.filter(toy => {
            return toy.labels.some(label => filterBy.labels.includes(label))
        })
    }

    // sort: 
    const sortProp = filterBy.sortBy
    switch (sortProp) {
        case 'name':
            filteredToys.sort((t1, t2) => {
                return t1.name.localeCompare(t2.name, undefined, { sensitivity: 'base' })
            })
            break;
        case 'price':
        case 'createdAt':
            filteredToys.sort((t1, t2) => {
                return t1[sortProp] - t2[sortProp]
            })
    }

    return filteredToys
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    const toyToSave = JSON.parse(JSON.stringify(toy))
    if (toyToSave._id) return storageService.put(STORAGE_KEY, toyToSave);
    return storageService.post(STORAGE_KEY, toyToSave)
}

function getEmptyToy() {
    const toy = {
        "_id": "",
        "name": "",
        "price": 0,
        "labels": [],
        "createdAt": 0,
        "inStock": true
    }
    return Promise.resolve(toy)
}

function _createToys() {
    var toys = syncStorageService.load(STORAGE_KEY)
    if (!toys || !toys.length) {
        toys = defaultToys
        syncStorageService.store(STORAGE_KEY, toys)
    }
    return toys;
}