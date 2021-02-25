import {computed} from 'vue'
import {PlayerType} from "@/components/player/PlayerType";
import store from '@/stroe'

export default function () {
    // @ts-ignore
    return computed<PlayerType>(() => {
        const {id, dt, name, al, ar} = store.state.musicModule.currentSong

        return {
            name,
            picUrl: al?.picUrl,
            totalTime: dt,
            artists: ar && ar[0].name,
            playTime: 0,
            audio: ''
        }
    })
}