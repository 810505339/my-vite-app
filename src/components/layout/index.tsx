import {
    defineComponent,
    KeepAlive,
    Transition,
    VNode,
    Suspense,
    defineAsyncComponent,
    computed,
    reactive,
    ref
} from 'vue'
import Header from "@/components/layout/Header";
import {RouterView} from "vue-router";
import {LayoutWrap, LayoutBody} from './style'
import SliderBar from "@/components/layout/SliderBar";
import Player from "@/components/player";
import {useStore} from "@/stroe";
import {PlayerType} from "@/components/player/PlayerType";

const Layout = defineComponent(() => {
    const store = useStore()
    ;(async () => {
        await store.dispatch('CurrentSongAction', '523250334')
    })()

    // @ts-ignore
    const currentSong = computed<PlayerType>(() => {
        const {id, dt, name, al, ar, audio} = store.state.musicModule.currentSong


        return {
            name,
            picUrl: al?.picUrl,
            totalTime: dt,
            artists: ar && ar[0].name,
            audio: audio
        }
    })

    const playTime = computed<number>({
        get: () => store.state.musicModule.currentTime,
        set: value => {
            store.commit('setCurrentTime', value)
        }
    })


    return () => {
        return (
            <>
                <LayoutWrap>
                    <Header/>
                    <LayoutBody>
                        <SliderBar/>
                        <RouterView class={'router-view'} v-slots={{
                            default: ({Component}: { Component: VNode }) => (
                                <Transition mode={'out-in'} name={'component-fade'}>
                                    <KeepAlive>
                                        {Component}
                                    </KeepAlive>
                                </Transition>)
                        }}/>
                    </LayoutBody>
                    <Player  {...currentSong.value} v-model={[playTime.value, 'playTime']}/>
                </LayoutWrap>
            </>
        )
    }
})

export default Layout
