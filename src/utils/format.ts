import dayjs from 'dayjs'

//转换时间 00:00格式
export const timeForMat = (timer: number) => dayjs(timer).format('mm:ss')

//转换单位
export const Unit = () => {

}