import axios from "@/api/http";

//获取精品歌单

export interface HighqualListType {
    playlists: PlayLists
}

export interface PlayLists {
    name: string,
    coverImgUrl: string,
    description: string
}

export const tagList = ['全部', '欧美', '华语', '流行', '说唱', '摇滚', '民谣', '电子', '轻音乐', '影视原声', 'ACG', '怀旧', '治愈', '旅行']

//获取精品歌单
export const highqualityApi = (limit: number, cat: string): Promise<HighqualListType> => axios.get(`/top/playlist/highquality?limit=${limit}&cat=${cat}`)

//获取歌单

export interface PlayCardType {
    name: string,
    description: string,
    coverImgUrl: string,
    playCount: string
}

export interface PlaylistApiType {
    playlists: PlayCardType[]
}

export const playlistApi = (limit: number, cat: string, offset: number):Promise<PlaylistApiType> => axios.get(`/top/playlist?limit=${limit}&offset=${offset}&cat=${cat}`)