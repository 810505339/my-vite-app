import {defineComponent} from 'vue'
import Layout from '@/components/layout'
import {ThemeProvider} from 'vue3-styled-components'
import {provideTheme} from "@/hook/useTheme";
import FullLoading from "@/components/fullLoading";


const App = defineComponent(() => {
    const themes = provideTheme()
    return () => (
        <ThemeProvider theme={themes.value}>
            <Layout/>
            <FullLoading/>
        </ThemeProvider>
    )
})

export default App
