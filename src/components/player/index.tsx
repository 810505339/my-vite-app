import {defineComponent} from 'vue'
import {PlayerWrap} from './style'
import {Slider} from 'ant-design-vue'
import Icon from '@/components/icon'

const Player = defineComponent({
    props: {},
    setup() {
        return () => (<div style={{height: '60px'}}>
            <PlayerWrap>
                <div class={'song'}></div>
                <div class={'control'}>
                    <Icon type={'icon-previous'} class={'icon'}/>
                    <span class={'play-wrap'}>
                          <Icon type={'icon-play'} class={'icon'}/>
                    </span>
                    <Icon type={'icon-next'} class={'icon'}/>
                </div>
                <div class={'mode'}></div>
                <div class={'slider-bar'}>
                    <Slider tipFormatter={null}/>
                </div>
            </PlayerWrap>
        </div>)
    }
})

export default Player
