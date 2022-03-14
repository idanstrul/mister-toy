import { createStore } from "vuex";
import { toyStore } from "./modules/toy.store.js";

const store = createStore({
    strict: true,
    state: {
        isLoading: false,
        filterBy: {
            txt: '',
            status: 'all'
        }, 
        userMsg: {
            msg: '',
            style: '',
            isAlive: false
        }
    },
    getters: {
        isLoading(state){
            return state.isLoading
        },
        filterBy(state){
            return state.filterBy
        },
        userMsg(state){
            return state.userMsg
        }
    },
    mutations: {
        setIsLoading(state, {loadingStatus}){
            state.isLoading = loadingStatus
        },
        setUserMsg(state, {msg, style, isAlive}){
            state.userMsg = {
                msg,
                style,
                isAlive
            }
        }

    },
    actions: {
        flashUserMsg(context, {msg, style}){
            context.commit({type: 'setUserMsg', msg, style, isAlive: true})
            setTimeout(() => {
                context.commit({type: 'setUserMsg', msg: '', style: '', isAlive: false})
            }, 2000)
        }
    },
    modules: {
        toyStore
    }
})

export default store