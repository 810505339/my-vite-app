import {defineComponent, PropType, ref} from 'vue'
import {Wrap, TopWrap} from './style'
import {tagList, highqualityApi, PlayLists, playlistApi, PlayCardType} from '@/api/playlists/api'
import {Image} from "ant-design-vue";
import PlayCardList, {CardType} from '@/components/playcards'
import {Pagination} from 'ant-design-vue'
import {Unit} from "@/utils/format";


const TopCards = defineComponent<{ PlayLists: PlayLists }>((props) => {
    return () => {
        const {coverImgUrl, description, name} = props.PlayLists


        return (<TopWrap bg={coverImgUrl}>
            <div class={'card'}>
                <Image class={'img-wrap'} src={coverImgUrl + '?param=280y280'} preview={false}/>
                <div class={'content'}>
                    <div class={'tag-wrap'}><span>精品歌单</span></div>
                    <div class={'name'}>{name}</div>
                    <p class={'desc'}>{description}</p>
                </div>
            </div>
            <div class={'bg'}/>
            <div class={'mask'}/>
        </TopWrap>)
    }
})
TopCards.props = {
    PlayLists: Object as PropType<PlayLists>
}

const Tabs = defineComponent((_, {emit}) => {

    const activeIndex = ref(0);
    const handleClick = (index: number) => {
        activeIndex.value = index;
        emit('activeTag', tagList[index])
    }
    return () => {

        return (<div class={'tab-wrap'}>
            {tagList.map((item, index) => (
                <div class={` tab-item ${activeIndex.value === index ? 'active' : ''}`} key={index}
                     onClick={() => handleClick(index)}>{item}</div>))}
        </div>)
    }
})

Tabs.emits = ['activeTag']


const PlayList = defineComponent(() => {
    const cardList = ref<CardType[]>([]) //playlists列表
    const totals = ref(0); //总页数
    const current = ref(1) //当前页数
    const tag = ref('全部')//当前的所选tag

    const topList = ref<PlayLists>();  //精品歌单


    const getPlayList = async (limit: number, cat: string, offset: number) => {
        const Api = await playlistApi(limit, cat, offset)
        const {playlists, total} = Api
        cardList.value = playlists.map(item => {
            return {
                desc: `播放量:${Unit(Number(item.playCount))}`,
                name: item.name,
                picUrl: item.coverImgUrl
            }
        })
        totals.value = total
        return Api
    }
    //获取精品歌单
    const getHotList = async () => {
            const Api = await highqualityApi(1, tag.value)
            topList.value = Api.playlists[0]
            return Api
        }

    ;(async () => {
        await Promise.all([getHotList(), getPlayList(50, tag.value, current.value)])
    })()


    const handleChange = async () => {
        await Promise.all([getHotList(), getPlayList(50, tag.value, current.value)])

    }
    const activeTag = async (tags: string) => {
        tag.value = tags
        current.value = 1; //切换类别回到第一页
        await Promise.all([getHotList(), getPlayList(50, tag.value, current.value)])
    }


    return () => {

        return (<Wrap>
            {topList.value && <TopCards PlayLists={topList.value}/>}
            <Tabs onActiveTag={activeTag}/>
            <PlayCardList cards={cardList.value}/>
            <Pagination size="small" total={totals.value} v-model={[current.value, 'current']}
                        onChange={handleChange}/>
        </Wrap>)
    }
})

export default PlayList