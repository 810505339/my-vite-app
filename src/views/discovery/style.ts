import styled from "vue3-styled-components";

export const Wrap = styled('div')`

  .ant-carousel .slick-track {
    text-align: center;

    .img-gorp {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .img-item {
      position: relative;
      width: 32%;

      .tag {
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: #c7332f;
        color: #fff;
        font-size: 12px;
        padding: 3px 10px;
        position: absolute;
        z-index: 2;
        bottom: 6px;
        right: 0;
      }
    }

    img {
      height: 100%;
      width: 100%;
      border-radius: 5px;
    }
  }
`
