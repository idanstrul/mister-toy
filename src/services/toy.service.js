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

const defaultToys = [
    {
        "_id": "2453",
        "name": "lectus risus",
        "price": 56,
        "labels": ["Educational"],
        "createdAt": "1997-06-21T05:15:45.448Z",
        "inStock": false
    },
    {
        "_id": "2454",
        "name": "et facilisis",
        "price": 28,
        "labels": ["Educational"],
        "createdAt": "1985-06-12T13:56:14.850Z",
        "inStock": false
    },
    {
        "_id": "2455",
        "name": "odio sed",
        "price": 91,
        "labels": ["Educational"],
        "createdAt": "1992-03-19T22:57:25.579Z",
        "inStock": false
    },
    {
        "_id": "2456",
        "name": "dolor nullam",
        "price": 36,
        "labels": ["Educational"],
        "createdAt": "1987-05-11T05:22:53.812Z",
        "inStock": true
    },
    {
        "_id": "2457",
        "name": "amet ac",
        "price": 100,
        "labels": ["Educational"],
        "createdAt": "1986-10-08T20:46:09.341Z",
        "inStock": true
    },
    {
        "_id": "2458",
        "name": "aliquam augue",
        "price": 9,
        "labels": ["Funny"],
        "createdAt": "1977-04-21T05:11:16.268Z",
        "inStock": true
    },
    {
        "_id": "2459",
        "name": "nec malesuada",
        "price": 4,
        "labels": ["Adult"],
        "createdAt": "1978-06-29T11:58:57.672Z",
        "inStock": false
    },
    {
        "_id": "2460",
        "name": "egestas odio",
        "price": 46,
        "labels": ["Adult"],
        "createdAt": "1976-10-31T13:49:09.354Z",
        "inStock": false
    },
    {
        "_id": "2461",
        "name": "magna quis",
        "price": 90,
        "labels": ["Funny"],
        "createdAt": "1988-01-18T01:59:01.490Z",
        "inStock": true
    },
    {
        "_id": "2462",
        "name": "sed vestibulum",
        "price": 90,
        "labels": ["Educational"],
        "createdAt": "1995-10-22T02:05:31.372Z",
        "inStock": true
    },
    {
        "_id": "2463",
        "name": "lectus aliquam",
        "price": 20,
        "labels": ["Adult"],
        "createdAt": "1991-11-05T15:09:17.958Z",
        "inStock": true
    },
    {
        "_id": "2464",
        "name": "ipsum adipiscing",
        "price": 82,
        "labels": ["Funny"],
        "createdAt": "1976-11-09T03:12:37.521Z",
        "inStock": false
    },
    {
        "_id": "2465",
        "name": "malesuada fringilla",
        "price": 81,
        "labels": ["Funny"],
        "createdAt": "1979-09-10T17:06:12.446Z",
        "inStock": true
    },
    {
        "_id": "2466",
        "name": "porta facilisis",
        "price": 29,
        "labels": ["Adult"],
        "createdAt": "1997-12-19T18:22:19.027Z",
        "inStock": true
    },
    {
        "_id": "2467",
        "name": "egestas ipsum",
        "price": 100,
        "labels": ["Adult"],
        "createdAt": "1972-04-07T14:34:57.952Z",
        "inStock": false
    },
    {
        "_id": "2468",
        "name": "amet et",
        "price": 75,
        "labels": ["Adult"],
        "createdAt": "1995-01-22T18:16:21.845Z",
        "inStock": true
    },
    {
        "_id": "2469",
        "name": "vitae dolor",
        "price": 49,
        "labels": ["Funny"],
        "createdAt": "1972-04-24T08:20:03.237Z",
        "inStock": false
    },
    {
        "_id": "2470",
        "name": "sagittis curabitur",
        "price": 14,
        "labels": ["Educational"],
        "createdAt": "1997-08-26T05:32:36.586Z",
        "inStock": false
    },
    {
        "_id": "2471",
        "name": "et amet",
        "price": 13,
        "labels": ["Funny"],
        "createdAt": "1988-07-13T06:02:04.260Z",
        "inStock": true
    },
    {
        "_id": "2472",
        "name": "vel nullam",
        "price": 1,
        "labels": ["Adult"],
        "createdAt": "1997-01-05T08:47:42.385Z",
        "inStock": false
    }
]

_createToys()

function query() {
    return storageService.query(STORAGE_KEY)
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