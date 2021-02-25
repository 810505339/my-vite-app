import {Module} from 'vuex'
import RootStateTypes from '@/stroe/interface'
import MusicStateType from './interface'
import {detailApi} from '@/api/global/api'

const musicModule: Module<MusicStateType, RootStateTypes> = {
    state: {
        currentSong: {},
        currentTime: 0,
        playlist: []
    },
    mutations: {
        setCurrentSong(state, currentSong) {
            state.currentSong = currentSong;
        },
        setCurrentTime(state, currentTime) {
            state.currentTime = currentTime
        }
    },
    actions: {
        async CurrentSongAction({commit}, ids: string) {
            const {songs} = await detailApi(ids)
            songs[0].audio = `https://music.163.com/song/media/outer/url?id=${ids}.mp3`
            commit('setCurrentSong', songs[0])
        }
    }

}

export default musicModule