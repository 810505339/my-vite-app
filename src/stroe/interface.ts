import GlobalStateType from "@/stroe/modules/global/interface";

export default interface RootStateTypes {

}

export interface AllStateTypes extends RootStateTypes {
    globalModule: GlobalStateType
}
