import {createStore, useStore as baseUseStore} from 'vuex'
import RootStateTypes, {AllStateTypes} from './interface'
import globalModule from '@/stroe/modules/global'

const store = createStore<AllStateTypes>({
    modules: {
        globalModule
    }
})

export default store

export function useStore<T = AllStateTypes>() {
    return baseUseStore<T>()
}

