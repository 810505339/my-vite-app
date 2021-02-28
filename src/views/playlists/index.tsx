import {defineComponent, ref} from 'vue'
import {Wrap, TopWrap} from './style'
import {tagList, highqualityApi, PlayLists, playlistApi, PlayCardType} from '@/api/playlists/api'
import {Image} from "ant-design-vue";
import PlayCardList, {CardType} from '@/components/playcards'


const TopCards = defineComponent<PlayLists>(() => {
    const topList = ref<PlayLists>();
    ;(async () => {
        const {playlists} = await highqualityApi(1, '全部')
        topList.value = playlists[0];
    })()


    return () => {
        if (topList.value) {
            const {coverImgUrl, description, name} = topList.value
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


    }
})

const Tabs = defineComponent(() => {

    const activeIndex = ref(0);
    const handleClick = (index: number) => {
        activeIndex.value = index;
    }
    return () => {

        return (<div class={'tab-wrap'}>
            {tagList.map((item, index) => (
                <div class={` tab-item ${activeIndex.value === index ? 'active' : ''}`} key={index}
                     onClick={() => handleClick(index)}>{item}</div>))}
        </div>)
    }
})


const PlayList = defineComponent(() => {
    const cardList = ref<CardType[]>([])
    ;(async () => {
        const {playlists} = await playlistApi(50, '全部', 0)
        cardList.value = playlists.map(item => {
            return {
                desc: `播放量:`,
                name: item.name,
                picUrl: item.coverImgUrl
            }
        })
    })()


    return () => {
        return (<Wrap>
            <TopCards/>
            <Tabs/>
            <PlayCardList cards={cardList.value}/>
        </Wrap>)
    }
})

export default PlayList