import instance from '../http'

export interface BannerType {
    pic?: string,
    typeTitle?: string,


}

export function bannersApi<T>(type: number): Promise<T> {
    return instance.get(`/banner?type=${type}`)
}

export interface PersonalizedType {
    picUrl?: string,
    name?: string,
    playCount?: number
    id?: number,
    copywriter?: string
}

export function personalized<T>(limit: number): Promise<T> {
    return instance.get(`/personalized?limit=${limit}`)
}
