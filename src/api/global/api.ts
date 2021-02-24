import axios from "@/api/http";

//获取mp3
export function getUrlApi(id: number) {
    return axios.get(`https://music.163.com/song/media/outer/url?id=${id}.mp3`)
}

//获取歌曲详情
export function detailApi<T>(ids: string): Promise<T> {
    return axios.get(`/song/detail?ids=${ids}`)
}

//获取歌词
export function lyricApi<T>(id: number): Promise<T> {
    return axios.get(`/lyric?id=${id}`)
}


