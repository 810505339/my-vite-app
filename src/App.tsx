import {defineComponent} from 'vue'
import Layout from '@/components/layout'
import {ThemeProvider} from 'vue3-styled-components'
import {provideTheme} from "@/hook/useTheme";


const App = defineComponent(() => {
    const themes = provideTheme()
    return () => (
        <ThemeProvider theme={themes.value}>
            <Layout/>
        </ThemeProvider>
    )
})

export default App
