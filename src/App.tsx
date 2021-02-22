import {defineComponent, provide, reactive, readonly, ref, toRefs} from 'vue'
import Layout from '@/components/layout'
import {ThemeProvider} from 'vue3-styled-components'
import theme, {themeType} from "@/theme/theme";
import {HeadWrap} from "@/components/layout/style";

const App = defineComponent(() => {
    const themes=ref(theme)

    //修改主题
    const updateTheme=(theme:themeType)=>{
        //themes.value=theme
       // themes.value.menuItemActiveBg='green'



        for (const Key in theme) {
            if(theme.hasOwnProperty(Key))
            {
                themes.value[Key]=theme[Key]
            }
        }

    }

    provide('theme',themes)
    provide('updateTheme',updateTheme)


    return () => (
        <ThemeProvider  theme={themes.value}>
            <Layout/>
        </ThemeProvider>
    )
})

export default App