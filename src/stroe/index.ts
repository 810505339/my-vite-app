import {createStore, useStore as baseUseStore} from 'vuex'
import RootStateTypes, {AllStateTypes} from './interface'
import globalModule from '@/stroe/modules/global'
import musicModule from '@/stroe/modules/music'

const store = createStore<AllStateTypes>({
    modules: {
        globalModule,
        musicModule
    }
})

export default store

export function useStore<T = AllStateTypes>() {
    return baseUseStore<T>()
}

