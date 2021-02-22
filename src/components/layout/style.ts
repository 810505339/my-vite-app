import styled from "vue3-styled-components";
import {PropType}from 'vue'
import {RouterLink} from "vue-router";
import {themeType} from '@/theme/theme'


export const HeadWrap = styled('div',{theme:{type:Object as PropType<themeType>}})`
    background:${({theme})=>theme?.headerBgColor??''};
    height:50px;
    display: flex;
    align-items: center;
  .header-round{
    font-size: 15px;
    border-radius: 50%;
    padding: 10px;
    &:hover{
      background: ${({theme})=>theme?.roundHoverBgColor||''};
    }
  }
`



export const LayoutWrap=styled('div',)`
  height: 100vh;
`

export const SliderWrap=styled('div',{theme:{type:Object as PropType<themeType>}})`
  height: 100%;
  background: ${({theme})=>theme?.menuBgColor??''};
  color:${({theme})=>theme?.fontColor??''};
  width: 250px;
  .menu-list{
      .router-link-active{
        background: ${({theme})=>theme?.menuItemActiveBg??''};
        color: #d33a31;
       
      }
      .menu-item{
        padding: 10px 20px;
        
        &:hover{
          background: ${({theme})=>theme?.menuItemHoverBg??''};
        }
      }
    }
  
  
    
`

export const StyledLink =styled(RouterLink)`
    
`

export const LayoutBody=styled('div')`
    display: flex;
    height: 100%;
`