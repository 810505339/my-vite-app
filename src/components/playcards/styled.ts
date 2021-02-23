import styled, {css} from "vue3-styled-components";
import {ellipsis} from '@/theme/common'


export const CardWrap = styled('div')`
  cursor: pointer;


  .desc {

  }

  .name {
    ${() => ellipsis}
  }

  img {
    object-fit: cover;
  }
`

export const CardsWrap = styled('div')`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  text-align: center;
  row-gap: 15px;
  column-gap: 15px;
`

