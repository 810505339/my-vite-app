import {defineComponent, KeepAlive, Transition, VNode} from 'vue'
import Header from "@/components/layout/Header";
import {RouterView} from "vue-router";
import {LayoutWrap,LayoutBody} from './style'
import SliderBar from "@/components/layout/SliderBar";

const Layout=defineComponent(()=>{
    return ()=>(
       <LayoutWrap>
           <Header/>
           <LayoutBody>
               <SliderBar/>
               <RouterView v-slots={{
                   default: ({Component}: { Component: VNode }) => (<Transition mode={'out-in'} name={'component-fade'}>
                       <KeepAlive>{Component}</KeepAlive>
                   </Transition>)
               }}/>
           </LayoutBody>
       </LayoutWrap>
    )
})

export default Layout