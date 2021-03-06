import {defineComponent, PropType} from 'vue'
import {CardWrap, CardsWrap} from './styled'
import {Image} from "ant-design-vue";
import Icon from '@/components/icon'

export interface CardType {
    name: string,
    desc: string,
    picUrl: string
}


const PlayCardItem = defineComponent({
    props: {
        name: String as PropType<string>,
        desc: String as PropType<string>,
        picUrl: String as PropType<string>
    },
    setup(props) {
        return () => (<CardWrap>
            <div class={'card-wrap'}>
                <Image src={props.picUrl} preview={false}/>
                <div class={'img-wrap'}>
                    <span class={'desc'}>{props.desc}</span>
                </div>
                <div class={'icon-wrap'}>
                    <Icon type={'icon-play'} class={'icon'}/>
                </div>
            </div>
            <p class={'name'}>{props.name}</p>
        </CardWrap>)
    }
})

const PlayCardList = defineComponent({
    props: {
        cards: Array as PropType<CardType[]>
    },
    setup(props) {
        return () => {
            return (<CardsWrap>
                {props?.cards?.map((item) => (<PlayCardItem {...item} />))}
            </CardsWrap>)
        }
    }
})

export default PlayCardList
