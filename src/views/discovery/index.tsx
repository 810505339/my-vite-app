import {defineComponent, ref, computed} from 'vue'
import {Carousel} from 'ant-design-vue'
import {bannersApi, BannerType} from "@/api/discovery/api";
import {Wrap} from "./style";

const App = defineComponent(() => {
    const bannerList  = ref<BannerType[]>([])

    const bannerList_=computed(()=> {
            let newList = []
            let index = 0;
            while (index<bannerList.value.length-1)
            {
                newList.push(bannerList.value.slice(index, index += 3));
            }
            return newList
        })


    ;(async () => {
        const {banners} = await bannersApi<{ banners: BannerType[] }>(1)
        bannerList.value = banners
    })()





    return () => (<Wrap>
        <Carousel>
            {bannerList_.value.map((bannerGorp:BannerType[],index) => <div  key={index}>
                <div class={'img-gorp'}>
                    {bannerGorp.map((item,index)=>(<img src={item.pic}/>))}
                </div>

            </div>)}
        </Carousel>
    </Wrap>)
})

export default App