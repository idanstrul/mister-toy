// import axios from 'axios';
import { httpService } from './http.service';
// import qs from 'qs'

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy
}

// function _getUrl(id = '') {
//     const BASE_URL = (process.env.NODE_ENV !== 'development')
//         ? '/api/toy'
//         : '//localhost:3030/api/toy';
//     return `${BASE_URL}/${id}`;

// }

// _createToys()

async function query(filterBy) {
    // console.log('filterBy',filterBy);
    // filterBy = JSON.parse(JSON.stringify(filterBy))
    // filterBy.labels = ['Adult', 'Educational', 'fun']
    // filterBy.inStock = true
    return httpService.get('toy', filterBy)
    // const res = await axios.get(_getUrl(), {params: filterBy/* , paramsSerializer: params => qs.stringify(params, { strictNullHandling: true }) */})
    // return res.data

    // return storageService.query(STORAGE_KEY)
    //     .then(toys => _filterToys(filterBy, toys))
}

async function getById(toyId) {
    return httpService.get(`toy/${toyId}`)
    // const res = await axios.get(_getUrl(toyId))
    // return res.data
    // return storageService.get(STORAGE_KEY, toyId)
}

async function remove(toyId) {
    return httpService.delete(`toy/${toyId}`)
    // return await axios.delete(_getUrl(toyId))
    // return storageService.remove(STORAGE_KEY, toyId)
}

async function save(toy) {
    if (toy._id) return httpService.put(`toy/${toy._id}`, toy)
    return httpService.post(`toy`, toy)
    // const res = await (toy._id)? 
    // axios.put(_getUrl(toy._id), toy) :
    // axios.post(_getUrl(), toy)
    // return res.data
    // const toyToSave = JSON.parse(JSON.stringify(toy))
    // if (toyToSave._id) return storageService.put(STORAGE_KEY, toyToSave);
    // return storageService.post(STORAGE_KEY, toyToSave)
}

function getEmptyToy() {
    const toy = {
        "name": "",
        "price": 0,
        "labels": [],
        "inStock": true
    }
    return Promise.resolve(toy)
}

// function _createToys() {
//     var toys = syncStorageService.load(STORAGE_KEY)
//     if (!toys || !toys.length) {
//         toys = defaultToys
//         syncStorageService.store(STORAGE_KEY, toys)
//     }
//     return toys;
// }




// function _filterToys(filterBy, toys) {
//     var filteredToys = JSON.parse(JSON.stringify(toys))

//     // by name:
//     const regex = new RegExp(filterBy.name, 'i')
//     filteredToys = filteredToys.filter(toy => regex.test(toy.name))

//     // by stock presence:
//     if (filterBy.inStock !== null) {
//         filteredToys = filteredToys.filter(toy => toy.inStock === filterBy.inStock)
//     }

//     // by labels: 
//     if (filterBy.labels.length) {
//         filteredToys = filteredToys.filter(toy => {
//             return toy.labels.some(label => filterBy.labels.includes(label))
//         })
//     }

//     // sort: 
//     const sortProp = filterBy.sortBy
//     switch (sortProp) {
//         case 'name':
//             filteredToys.sort((t1, t2) => {
//                 return t1.name.localeCompare(t2.name, undefined, { sensitivity: 'base' })
//             })
//             break;
//         case 'price':
//         case 'createdAt':
//             filteredToys.sort((t1, t2) => {
//                 return t1[sortProp] - t2[sortProp]
//             })
//     }

//     return filteredToys
// }
