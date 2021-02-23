import {defineComponent} from 'vue'
import {HeadWrap} from './style'
import {LeftOutlined, RightOutlined} from '@ant-design/icons-vue'
import {useRouter} from "vue-router";
import {useParent} from "@vant/use";
import {provideThemeType, THEME_KEY} from "@/hook/useTheme";

const Header = defineComponent(() => {
    const {parent} = useParent<provideThemeType>(THEME_KEY);  //获取theme
    const router = useRouter()
    const handleClick = () => {
        if (parent) {
            const {themes, updateTheme} = parent
            updateTheme({...themes, menuItemActiveBg: 'green'})
        }

    }

    return () => (<HeadWrap>
        <button onClick={handleClick}>点击</button>
        <LeftOutlined onClick={() => router.back()} class={'header-round'}/>
        <RightOutlined onClick={() => router.forward()} class={'header-round'}/>
    </HeadWrap>)
})

export default Header
