import {defineComponent} from 'vue'
import {PlayerWrap} from './style'
import {Slider} from 'ant-design-vue'

const Player = defineComponent({
    props: {},
    setup() {
        return () => (<PlayerWrap>
            <div class={'song'}></div>
            <div class={'control'}></div>
            <div class={'mode'}></div>
            <div class={'slider-bar'}>
                <Slider tipFormatter={null}/>
            </div>
        </PlayerWrap>)
    }
})

export default Player