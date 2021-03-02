import {defineComponent} from 'vue'
import PlayTable from '@/components/playTable'

const Songs = defineComponent(() => {
    return () => (<div><PlayTable/></div>)
})

export default Songs