import {defineComponent, AllowedComponentProps, ComponentCustomProps, VNodeProps} from 'vue'
import {SliderWrap} from './style'
import {RouterLink, RouterLinkProps, useLink} from 'vue-router'
import {menuRoutes} from '@/router'
import Icon from "@/components/icon";

//自定义menuLink
const MenuLink = defineComponent<AllowedComponentProps & ComponentCustomProps & VNodeProps & RouterLinkProps>
({
    props: {
        // @ts-ignore
        ...RouterLink.props,
    },
    setup(props, {slots}) {
        console.log(props)
        const {isActive, isExactActive, navigate} = useLink(props)
        return () => {
            return (<li onClick={navigate} class={{
                'router-link-active': isActive.value,
                'router-link-exact-active': isExactActive.value
            }}>{slots.default?.()}</li>)
        }
    }
})


const SliderBar = defineComponent(() => {
    return () => (<SliderWrap>
        <ul class={'menu-list'}>
            {menuRoutes.map(item => <MenuLink to={item.path}
                                              class={'menu-item'}>
                <Icon type={item.meta?.icon}/>
                <span>{item.meta?.title}</span>
            </MenuLink>)}
        </ul>
    </SliderWrap>)
})

export default SliderBar
