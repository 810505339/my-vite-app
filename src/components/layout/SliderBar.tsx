import {defineComponent,createVNode} from 'vue'
import {SliderWrap} from './style'
import {RouterLink, useLink} from 'vue-router'
import {menuRoutes} from '@/router'

const MenuLink=defineComponent<{to:string,tag:string}>({
    props:{
        // @ts-ignore
        ...RouterLink.props,
    },
    setup(props,{slots}){
        console.log(props)
       const {isActive, isExactActive, navigate } = useLink(props)
        return()=> {
            return (<li onClick={navigate} class={{'router-link-active':isActive.value,'router-link-exact-active':isExactActive.value}}>{slots.default?.()}</li>)
        }
            // const slots={
            //     default:({navigate,isActive,}:any)=>(<li onClick={navigate}></li>)
            // }
            // return()=>(<>
            //     {menuRoutes.map(item=><RouterLink to={item.path} custom  v-slots={slots}>{item.meta?.title}</RouterLink>)}
            // </>)
    }
})






const SliderBar=defineComponent(()=>{
    return()=>(<SliderWrap>
        <ul class={'menu-list'}>
            { menuRoutes.map(item=><MenuLink to={item.path} class={'menu-item'}><span>{item.meta?.title}</span></MenuLink>)}
        </ul>
    </SliderWrap>)
})

export default SliderBar