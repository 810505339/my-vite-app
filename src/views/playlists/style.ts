import styled from "vue3-styled-components";


export const Wrap = styled('div')`

  .tab-wrap {
    display: flex;
    justify-content: flex-end;

    .active {
      color: #d33a31 !important;
    }

    .tab-item {
      padding: 10px 0;
      margin: 0 10px;
      font-size: 13px;
      color: #7f7f81;
      cursor: pointer;
    }

  }
`

export const TopWrap = styled('div', {bg: String})`

  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;

  .card {
    position: relative;
    z-index: 1;
    display: flex;
    padding: 10px 15px;

    .ant-image {
      flex-shrink: 0;
      width: 150px;
      height: 150px;
      margin-right: 10px;

    }


    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .name {
        margin-bottom: 5px;
        font-size: 17px;
        font-weight: 400;
        color: #fff;
      }

      .desc {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        color: hsla(0, 0%, 100%, .5);
        font-size: 12px;

      }

      .tag-wrap {
        align-self: flex-start;
        padding: 5px 20px;
        margin-bottom: 10px;
        color: #e7aa5a;
        border-radius: 5px;
        border: .07143rem solid #e7aa5a;
        box-sizing: border-box;

      }
    }
  }
}

.bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url(${props => props.bg!});
  filter: blur(15px);
  z-index: 0;
}

.mask {
  position: absolute;
  background-color: rgba(0, 0, 0, .5);
  z-index: 0;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
}
`