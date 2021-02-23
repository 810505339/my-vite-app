import {defineComponent, KeepAlive, Transition, VNode, Suspense, defineAsyncComponent} from 'vue'
import Header from "@/components/layout/Header";
import {RouterView} from "vue-router";
import {LayoutWrap, LayoutBody} from './style'
import SliderBar from "@/components/layout/SliderBar";
import Player from "@/components/player";
import FullLoading from '@/components/fullLoading'

const Layout = defineComponent(() => {
    return () => (
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
                <Player/>
            </LayoutWrap>
        </>
    )
})

export default Layout
