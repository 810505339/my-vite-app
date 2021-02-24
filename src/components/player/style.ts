import styled from "vue3-styled-components";
import {PropType} from 'vue'
import {themeType} from "@/theme/theme";

export const PlayerWrap = styled('div', {theme: Object as PropType<themeType>})`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({theme}) => theme?.bodyBgColor!};
  height: 60px;

  .control {
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .play-wrap {
    background: #d33a31;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 0 20px;
    position: relative;

    .icon {
      color: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .icon {
    font-size: 18px;
    color: #d33a31;

  }

  .slider-bar {
    position: absolute;
    left: 0;
    right: 0;
    top: -20px;
  }

`
