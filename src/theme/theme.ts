import {reactive, ref} from 'vue'

export type themeType = {
    menuBgColor?: string,
    menuItemHoverBg?: string,
    menuItemActiveBg?: string,
    fontColor?: string,
    headerBgColor?: string,
    roundHoverBgColor?: string,
    titleFontColor?: string,
    headFontColor?: string,
    bodyBgColor?: string
}
const theme: themeType = {
    menuBgColor: '#ededed',
    menuItemHoverBg: '#e7e7e7',
    menuItemActiveBg: '#e7e7e7',
    fontColor: '#4a4a4a',
    headerBgColor: '#f9f9f9',
    roundHoverBgColor: '#ebebeb',
    titleFontColor: '#333333',
    headFontColor: '#4a4a4a',
    bodyBgColor: '#fff'
}

export default theme