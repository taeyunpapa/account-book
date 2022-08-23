import {createStore} from 'vuex'
import {getUserName} from '@/api/api'

export default createStore({
    state: {
        userName:null
    },
    mutations: {
        setUserName(state, item) {
            state.userName = item
        }
    },
    actions: {
        async getUserName(context, payload){
                const {data} = await getUserName(payload)
                // const {data} = '111'
                //console.log(payload)
                console.log('store-result')
                console.log(data)
                context.commit('setUserName', data)
                return true
        }
    }
});