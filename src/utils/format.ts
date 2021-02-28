import dayjs from 'dayjs'

//转换时间 00:00格式
export const timeForMat = (timer: number) => dayjs(timer).format('mm:ss')

//转换单位
export const Unit = (playCount: number) => {
    let count: string = '';
    if (playCount < 10000) {
        count = playCount.toString()
    } else if (playCount > 10000 || playCount < 100000000) {
        count = parseInt(String(playCount / 10000)) + '万'
    } else if (playCount > 100000000) {
        count = parseInt(String(playCount / 10000000)) + '亿'
    }

    return count


}