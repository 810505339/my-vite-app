import {defineComponent, PropType, ref, watch, watchEffect} from 'vue'
import {PlayerWrap, SongWrap} from './style'
import {Image, Slider} from 'ant-design-vue'
import Icon from '@/components/icon'
import {Tooltip} from 'ant-design-vue'
import {GithubOutlined, SelectOutlined} from '@ant-design/icons-vue'
import {PlayerType} from './PlayerType'
import {timeForMat} from "@/utils/format";


//播放按钮
const Control = defineComponent<{ isPlay: boolean }>((props, {emit}) => {

    console.log(props.isPlay)
    const setPlay = () => {
        //修改播放
        emit('update:isPlay', !props.isPlay)
    }

    return () => {
        const {isPlay} = props

        console.log(isPlay)

        return (<div class={'control'}>
            <Tooltip v-slots={{title: () => <>上一曲</>}}>
                <Icon type={'icon-previous'} class={'icon'}/>
            </Tooltip>
            <Tooltip v-slots={{title: () => <>{!isPlay ? '播放' : '暂停'}</>}}>
                   <span class={'play-wrap'} onClick={setPlay}>
                           <Icon type={!isPlay ? 'icon-play' : 'icon-pause'} class={'icon'}/>
                    </span>
            </Tooltip>
            <Tooltip v-slots={{title: () => <>下一曲</>}}>
                <Icon type={'icon-next'} class={'icon'}/>
            </Tooltip>
        </div>)
    }
})

Control.props = {
    isPlay: Boolean
}
Control.emits = ['update:isPlay']


// 图标
const Mode = defineComponent<{ volume: number }>((props, {emit}) => {
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
        <Slider value={props.volume} onChange={(value: number) => emit('update:volume', value)}
                tipFormatter={null} min={0}
                max={100} class={'volume'}/>
        <GithubOutlined class={'icon'}/>
    </div>)
})

Mode.emits = ['update:volume']
Mode.props = {
    volume: Number as PropType<number>
}

//歌曲详情面板
const Song = defineComponent<PlayerType>((props) => {
    return () => {

        return (<SongWrap>
            <div class={'img-wrap'}>
                <div class={'mask'}/>
                <Image class={'blur'}
                       src={props.picUrl}/>
            </div>
            <div class={'content'}>
                <div class={'top'}>
                    <div class={'name'}>{props.name}</div>
                    <div class={'split'}>-</div>
                    <div class={'artists'}>{props.artists}</div>
                </div>
                <div class={'time'}>
                    <div class={'played-time'}>{timeForMat(props.playTime)}</div>
                    <div class={'split'}>/</div>
                    <div class={'total-time'}>{timeForMat(props.totalTime)}</div>
                </div>
            </div>
        </SongWrap>)
    }
})
Song.props = {
    picUrl: String,
    name: String,
    artists: String,
    playTime: Number,
    totalTime: Number,
}

const Player = defineComponent<PlayerType>((props, {emit}) => {
    const audio = ref<HTMLAudioElement>()
    //歌曲是否在正播放
    const isPlay = ref(false);
    //歌曲是否正在滑动
    const isSlide = ref(false);

    const songSlider = ref<number>(0) //歌曲进度

    const volume = ref(100) //音量

    //播放的方法


    watchEffect(() => {
        //自动收集依赖所以初始化会自动触发一次
        isPlay.value ? audio.value?.play() : audio.value?.pause()

    })
    watch(volume, (volume, newVolume) => {
        audio.value!.volume = newVolume / 100
    })
    //播放进行中
    const playUpdate = () => {
        const currentTime = (audio.value?.currentTime!) * 1000
        songSlider.value = (currentTime / props.totalTime) * 1000
        emit('update:playTime', currentTime)
    }

    //歌曲改变
    const songChange = (value: number) => {
        audio.value!.currentTime = (value / 1000) * props.totalTime / 1000

        console.log(1)
        if (!isPlay.value) {
            isPlay.value = true;
        }
    }


    return () => {
        return (<div style={{height: '60px'}}>
            <PlayerWrap>
                <Song {...props}/>
                <Control v-model={[isPlay.value, 'isPlay']}/>
                <Mode v-model={[volume.value, 'volume']}/>
                <div class={'slider-bar'}>
                    <Slider v-model={[songSlider.value, 'value']} min={0} max={1000} tipFormatter={null}
                            onChange={songChange}/>
                </div>
                <audio src={props.audio} ref={audio} onTimeupdate={playUpdate}/>
            </PlayerWrap>
        </div>)
    }
})
Player.props = {
    picUrl: String,
    name: String,
    artists: String,
    playTime: Number,
    totalTime: Number,
    audio: String
}
Player.emits = ['update:playTime']

export default Player
