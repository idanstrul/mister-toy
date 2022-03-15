import { toyService } from "../../services/toy.service.js";

export const toyStore = {
    state: {
        toys: [],
        filterBy: {
            name: '',
            inStock: null,
            labels: [],
            sortBy: ''
        },
    },
    getters: {
        filterBy(state) {
            return state.filterBy
        },
        toysForDisplay(state) {
            return state.toys
        },
    },
    mutations: {
        setFilterBy(state, {filterBy}){
            state.filterBy = filterBy
        },
        loadToys(state, { toys }) {
            state.toys = toys
        },
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex(toy => toy._id === toyId)
            if (idx === -1) return;
            state.toys.splice(idx, 1)
        },
        saveToy(state, { savedToy }) {
            const idx = state.toys.findIndex(toy => toy._id === savedToy._id)
            if (idx === -1) state.toys.unshift(savedToy)
            else state.toys[idx] = savedToy;
        }
    },
    actions: {
        setFilterBy(context, {filterBy}){
            context.commit({type: 'setFilterBy', filterBy})
            context.dispatch('loadToys')
        },
        loadToys(context) {
            context.commit({ type: 'setIsLoading', loadingStatus: true })
            return toyService.query(context.getters.filterBy)
                .then(toys => {
                    context.commit({ type: 'loadToys', toys })
                    return toys
                    // context.dispatch({type: 'flashUserMsg', msg: 'Toys loaded successfully', style: 'success' })
                })
                .catch(err => {
                    console.error('Cannot load toys: ', err);
                    context.dispatch({ type: 'flashUserMsg', msg: 'Oops! Cannot load toys...', style: 'warning' })
                })
                .finally(() => {
                    context.commit({ type: 'setIsLoading', loadingStatus: false })
                })
        },
        getById(context, { toyId }) {
            context.commit({ type: 'setIsLoading', loadingStatus: true })
            return toyService.getById(toyId)
                .catch(err => {
                    console.error(`Cannot find toy ${toyId}: `, err);
                    context.dispatch({ type: 'flashUserMsg', msg: `Oops! Cannot fing toy ${toyId}...`, style: 'warning' })
                })
                .finally(() => {
                    context.commit({ type: 'setIsLoading', loadingStatus: false })
                })
        },
        removeToy(context, { toyId }) {
            context.commit({ type: 'setIsLoading', loadingStatus: true })
            return toyService.remove(toyId)
                .then(() => {
                    context.commit({ type: 'removeToy', toyId })
                    context.dispatch({ type: 'flashUserMsg', msg: `Toy ${toyId} removed successfully`, style: 'success' })
                })
                .catch(err => {
                    console.error(`Cannot remove toy ${toyId}: `, err)
                    context.dispatch({ type: 'flashUserMsg', msg: `Oops! Cannot remove toy ${toyId}...`, style: 'warning' })
                })
                .finally(() => {
                    context.commit({ type: 'setIsLoading', loadingStatus: false })
                })
        },
        saveToy(context, { toy }) {
            context.commit({ type: 'setIsLoading', loadingStatus: true })
            return toyService.save(toy)
                .then(savedToy => {
                    context.commit({ type: 'saveToy', savedToy })
                    context.dispatch({ type: 'flashUserMsg', msg: `Toy ${savedToy._Id} saved successfully`, style: 'success' })
                })
                .catch(err => {
                    console.error(`Cannot save toy ${toyId}: `, err)
                    context.dispatch({ type: 'flashUserMsg', msg: `Oops! Cannot save toy ${toyId}...`, style: 'warning' })
                })
                .finally(() => {
                    context.commit({ type: 'setIsLoading', loadingStatus: false })
                })
        },
        getEmptyToy(context) {
            context.commit({ type: 'setIsLoading', loadingStatus: true })
            return toyService.getEmptyToy()
                .catch(err => {
                    console.error(`Cannot get empty toy: `, err)
                    context.dispatch({ type: 'flashUserMsg', msg: `Oops! Cannot make new toy...`, style: 'warning' })
                })
                .finally(() => {
                    context.commit({ type: 'setIsLoading', loadingStatus: false })
                })
        }
    }
}


