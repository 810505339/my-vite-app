import dayjs from 'dayjs'

export const timeForMat = (timer: number) => dayjs(timer).format('mm:ss')