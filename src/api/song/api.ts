import axios from '@/api/http'

export interface Album {
    name: string,
    picUrl: string,

}

export interface songDataType {
    name: string,
    album: Album

}

export interface songApiType {

}

export const tagList = [
    {type: 0, label: '全部'},
    {type: 7, label: '华语'},
    {type: 96, label: '欧美'},
    {type: 8, label: '日本'},
    {type: 16, label: '韩国'},
]

export const songApi = (type: number): Promise<songApiType> => {
    return axios.get(`/top/song?type=${type}`)
}