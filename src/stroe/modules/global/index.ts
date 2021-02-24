import {Module} from 'vuex'
import RootStateTypes from '@/stroe/interface'
import GlobalStateType from '@/stroe/modules/global/interface'

const globalModule: Module<GlobalStateType, RootStateTypes> = {
    state: {
        axiosLoading: false
    },
    mutations: {
        setAxiosLoading(state, axiosLoading: boolean) {
            state.axiosLoading = axiosLoading
        }
    }
}

export default globalModule
