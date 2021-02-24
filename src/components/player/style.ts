import styled from "vue3-styled-components";
import {PropType} from 'vue'
import {themeType} from "@/theme/theme";
import {ellipsis} from '@/theme/common'

export const PlayerWrap = styled('div', {theme: Object as PropType<themeType>})`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({theme}) => theme?.bodyBgColor!};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;


  .control {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .play-wrap {
    background: #d33a31;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0 15px;
    position: relative;

    .icon {
      color: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
    }
  }

  .icon {
    font-size: 16px;
    cursor: pointer;
  }

  .slider-bar {
    position: absolute;
    left: 0;
    right: 0;
    top: -20px;
  }


  .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: #d33a31;
  }

  .ant-slider {
    margin-left: 0;

    .ant-slider-track {
      background-color: #d33a31;
    }

    .ant-slider-handle {
      border-color: #d33a31;
      display: none;

      &:focus {
        border-color: #d33a31;
        box-shadow: none;
      }
    }


    &:hover {
      .ant-slider-handle {
        display: block;
      }

      .ant-slider-track {
        background-color: #d33a31;
      }
    }
  }

  .mode {
    display: flex;
    height: 100%;
    align-items: center;


    .icon {
      margin-left: 15px;
      font-size: 18px;
    }
  }

  .volume {
    width: 100px;
    margin: 0 10px;
  }


`

export const SongWrap = styled('div', {theme: Object as PropType<themeType>})`
  display: flex;
  width: 40%;
  height: 100%;
  align-items: center;

  .img-wrap {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    flex-shrink: 0;
    margin-right: 10px;
    position: relative;


    .mask {
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      background: rgba(0, 0, 0, .2);
      z-index: 1;
      border-radius: 5px;

    }

    .blur {
      filter: blur(2px);
    }

    img {

    }
  }

  .content {
    flex: 1;

    .top {
      display: flex;
      align-items: center;

      .name {
        font-size: 16px;
        ${() => ellipsis};
      }

      .split {
        font-size: 14px;
        margin: 0 2px;
      }

      .artists {
        ${() => ellipsis};
        font-size: 12px;
      }
    }

    .time {
      display: flex;
      align-items: center;
      font-size: 12px;

      .split {
        font-size: 12px;
        margin: 0 2px;
      }
    }

  }

`
