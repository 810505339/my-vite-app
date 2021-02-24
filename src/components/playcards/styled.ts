import styled, {css} from "vue3-styled-components";
import {ellipsis} from '@/theme/common'
import {PropType} from "vue";
import {themeType} from "@/theme/theme";


export const CardWrap = styled('div', {theme: {type: Object as PropType<themeType>}})`
  cursor: pointer;
  flex-shrink: 0;
  width: 18%;

  overflow: hidden;

  .card-wrap {
    position: relative;
  }

  .icon-wrap {
    width: 40px;
    height: 40px;
    font-size: 16px;
    color: #d33a31;
    opacity: 0;
    position: absolute;
    right: 5px;
    bottom: 5px;
    background: hsla(0, 0%, 100%, .5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  &:hover {
    .img-wrap {
      transform: translateY(0);
    }

    .icon-wrap {
      opacity: 1;
    }
  }

  .img-wrap {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transition: all 0.3s;
    background-color: rgba(0, 0, 0, .4);
    color: #fff;
    padding: 5px;
    transform: translateY(-100%);
  }

  .desc {

  }

  .name {
    ${() => ellipsis}
    color: ${({theme}) => theme?.fontColor!};
    padding: 5px 0 10px 0;
  }

  img {
    object-fit: cover;
    border-radius: 5px;
  }
`

export const CardsWrap = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

