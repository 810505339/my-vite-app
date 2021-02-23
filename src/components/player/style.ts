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


  .slider-bar {
    position: absolute;
    left: 0;
    right: 0;
    top: -20px;
  }

`
