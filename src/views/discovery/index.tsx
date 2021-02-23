import {defineComponent, ref, computed} from 'vue'
import {Carousel} from 'ant-design-vue'
import {bannersApi, BannerType, personalized, PersonalizedType} from "@/api/discovery/api";
import {Wrap} from "./style";
import {Image} from 'ant-design-vue'
import PlayCardList, {CardType} from "@/components/playcards";

const App = defineComponent(() => {
    const bannerList = ref<BannerType[]>([]) //BANNER

    const cardList = ref<CardType[]>([])

    const bannerList_ = computed(() => {
            let newList = []
            let index = 0;
            while (index < bannerList.value.length - 1) {
                newList.push(bannerList.value.slice(index, index += 3));
            }
            return newList
        })

    ;(async () => {
        const {banners} = await bannersApi<{ banners: BannerType[] }>(1)
        const {result} = await personalized<{ result: PersonalizedType[] }>(10)
        bannerList.value = banners
        cardList.value = result.map(item => {
            return {
                picUrl: item.picUrl! + '?param=300y300',
                desc: item.copywriter!,
                name: item.name!
            }
        })

        console.log(bannerList.value)

    })()


    return () => (<Wrap>
        {/*banner*/}
        <Carousel autoplay>
            {bannerList_.value.map((bannerGorp: BannerType[], index) => <div key={index}>
                <div class={'img-gorp'}>
                    {bannerGorp.map((item, itemIndex) => (
                        <>
                            <div class={'img-item'}>
                                <Image src={item.pic} key={itemIndex} preview={false}/>
                                <span class={'tag'}>{item.typeTitle}</span>
                            </div>
                        </>
                    ))}
                </div>
            </div>)}
        </Carousel>
        {/*推荐*/}
        <PlayCardList cards={cardList.value}/>

    </Wrap>)
})

export default App
