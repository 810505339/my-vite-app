import GlobalStateType from "@/stroe/modules/global/interface";
import musicModule from "@/stroe/modules/music";
import MusicStateType from "@/stroe/modules/music/interface";

export default interface RootStateTypes {

}

export interface AllStateTypes extends RootStateTypes {
    globalModule: GlobalStateType
    musicModule: MusicStateType
}
