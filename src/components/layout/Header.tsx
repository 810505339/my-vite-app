import {defineComponent, inject, reactive, Ref, toRefs,} from 'vue'
import {HeadWrap} from './style'
import theme, {themeType} from "@/theme/theme";
import {LeftOutlined,RightOutlined} from '@ant-design/icons-vue'
import {useRouter} from "vue-router";

const Header=defineComponent(()=>{
   const updateThem= inject<(theme:themeType)=>void>('updateTheme')  //获取跟新theme的方法
    const theme=inject<themeType>('theme') //获取theme
    const router=useRouter()

    const handleClick=()=>{
       updateThem?.({...theme,menuItemActiveBg:'green'})
    }

    return()=>(<HeadWrap>
        <LeftOutlined onClick={()=>router.back()} class={'header-round'}/>
        <RightOutlined onClick={()=>router.forward()} class={'header-round'}/>
        </HeadWrap>)
})

export default Header