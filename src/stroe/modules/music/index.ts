import {Module} from 'vuex'
import RootStateTypes from '@/stroe/interface'
import MusicStateType from './interface'
import {detailApi} from '@/api/global/api'

const musicModule: Module<MusicStateType, RootStateTypes> = {
    state: {
        currentSong: {}, //当前播放的歌曲
        currentTime: 0, //当前播放的时间
        playlist: [],  //当前播放的列表
        isPlayerShow: false, //是否显示详情
        isMenuShow: false,//是否显示菜单
        // 播放状态
        playing: false,
        playMode: 'sequence', //播放模式
        playHistory: []//历史记录

    },
    mutations: {
        setCurrentSong(state, currentSong) {
            state.currentSong = currentSong;
        },
        setCurrentTime(state, currentTime) {
            state.currentTime = currentTime
        },
        setPlaylist(state, playlist) {
            state.playlist = playlist
        },

        setPlaying(state, playing) {
            state.playing = playing
        },
        setIsPlayerShow(state, isPlayerShow) {
            state.isPlayerShow = isPlayerShow
        },
        setIsMenuShow(state, isMenuShow) {
            state.isMenuShow = isMenuShow
        },
        setPlayMode(state, playMode) {
            state.playMode = playMode
        }
    },
    actions: {
        async CurrentSongAction({commit, state}, ids: string) {
            const {songs} = await detailApi(ids)
            songs[0].audio = `https://music.163.com/song/media/outer/url?id=${ids}.mp3`
            commit('setCurrentSong', songs[0])
            commit('setPlaying', true)
            //历史记录
            const {playHistory} = state
            const playHistoryCopy = [...playHistory]  //拷贝一份不能直接修改state里面的数据


        },
        clearCurrentSong({commit}) {
            //清除所选歌曲
            commit('setCurrentTime', 0)
            commit('setPlaying', false)
            commit('setCurrentSong', {})

        },
        clearPlaylist({commit, dispatch}) {
            commit('setPlaylist', [])
            dispatch('clearCurrentSong')
        },
        clearHistory({commit}) {
            commit('setPlayHistory', [])
        },
        addToPlaylist({commit, state}, song: songType.Song) {
            const {playlist} = state
            const copy = [...playlist]
            const copyItem = copy.find(({id}) => id === song.id)
            if (!copyItem) {
                copy.unshift(song)
                commit('setPlaylist', copy)
            }
        }
    }

}

export default musicModule