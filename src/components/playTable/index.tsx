import {computed, defineComponent} from 'vue'
import {Table} from 'ant-design-vue'

const onClick = (record: any) => {

    console.log(record)
}

const PlayTable = defineComponent(() => {
    const showColumns = computed(() => {

    })
    return () => (<Table  customRow={(record) => {
        onClick(record)
    }
    }/>)
})

PlayTable.props = {
    hideColumns: Array,  //隐藏的columns
    songs: Array, //歌曲的list
    highlightText: String, //需要高亮文字
    renderNameDesc: Function //文字下方需要徐然的信息
}

export default PlayTable
