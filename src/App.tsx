import {computed, defineComponent} from 'vue'
import Layout from '@/components/layout'
import {ThemeProvider} from 'vue3-styled-components'
import {provideTheme} from "@/hook/useTheme";
import FullLoading from "@/components/fullLoading";
import {useStore} from '@/stroe'


const App = defineComponent(() => {
    const themes = provideTheme()
    const store = useStore();

    const loading = computed(() => store.state.globalModule.axiosLoading)

    return () => {
        console.log(loading.value)
        return (
            <ThemeProvider theme={themes.value}>
                {/*{loading.value ? <Layout/> : <FullLoading/>}*/}
                <Layout/>
                {loading.value && <FullLoading/>}

            </ThemeProvider>
        )
    }
})

export default App
