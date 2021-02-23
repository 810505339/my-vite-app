import instance from '../http'

export interface BannerType {
    pic?: string,
    typeTitle?: string

}

export function bannersApi<T>(type: number): Promise<T> {
    return instance.get(`/banner?type=${type}`)
}
