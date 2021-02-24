import {defineComponent, ref} from 'vue'
import {PlayerWrap, SongWrap} from './style'
import {Image, Slider} from 'ant-design-vue'
import Icon from '@/components/icon'
import {Tooltip} from 'ant-design-vue'
import {GithubOutlined, SelectOutlined} from '@ant-design/icons-vue'

//播放按钮
const Control = defineComponent(() => {
    return () => (<div class={'control'}>
        <Tooltip v-slots={{title: () => <>上一曲</>}}>
            <Icon type={'icon-previous'} class={'icon'}/>
        </Tooltip>
        <Tooltip v-slots={{title: () => <>播放</>}}>
                <span class={'play-wrap'}>
                       <Icon type={'icon-play'} class={'icon'}/>
                </span>
        </Tooltip>
        <Tooltip v-slots={{title: () => <>下一曲</>}}>
            <Icon type={'icon-next'} class={'icon'}/>
        </Tooltip>
    </div>)
})

// 图标
const Mode = defineComponent(() => {
    const iconList = ref([
        {title: '顺序播放', type: 'icon-cycle'},
        {title: '单曲循环', type: 'icon-singleCycle'},
        {title: '随机播放', type: 'icon-random'},
    ])

    return () => (<div class={'mode'}>
        <Tooltip v-slots={{title: () => <>分享</>}}>
            <SelectOutlined class={'icon'}/>
        </Tooltip>

        <Tooltip v-slots={{title: () => <>111</>}}>
            <Icon type={'icon-random'} class={'icon'}/>
        </Tooltip>
        <Icon type={'icon-list'} class={'icon'}/>
        <Icon type={'icon-laba'} class={'icon'}/>
        <Slider tipFormatter={null} class={'volume'}/>
        <GithubOutlined class={'icon'}/>
    </div>)
})

//歌曲详情面板
const Song = defineComponent(() => {
    return () => (<SongWrap>
        <div class={'img-wrap'}>
            <div class={'mask'}/>
            <Image class={'blur'}
                   src={'https://p1.music.126.net/G7LEwbfXpvPHzgZ-sbzGTw==/109951164811927560.jpg?param=80y80'}/>
        </div>
        <div class={'content'}>
            <div class={'top'}>
                <div class={'name'}>啊</div>
                <div class={'split'}>-</div>
                <div class={'artists'}>White Ray</div>
            </div>
            <div class={'time'}>
                <div class={'played-time'}>00:55</div>
                <div class={'split'}>/</div>
                <div class={'total-time'}>02:06</div>
            </div>
        </div>
    </SongWrap>)
})


const Player = defineComponent({
    props: {},
    setup() {

        return () => (<div style={{height: '60px'}}>
            <PlayerWrap>
                <Song/>
                <Control/>
                <Mode/>
                <div class={'slider-bar'}>
                    <Slider tipFormatter={null}/>
                </div>
            </PlayerWrap>
        </div>)
    }
})

export default Player
