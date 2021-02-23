import styled, {css} from "vue3-styled-components";
import {ellipsis} from '@/theme/common'


export const CardWrap = styled('div')`
  cursor: pointer;
  flex-shrink: 0;
  width: 18%;
  position: relative;
  overflow: hidden;

  &:hover {
    .img-wrap {
      transform: translateY(0);
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

