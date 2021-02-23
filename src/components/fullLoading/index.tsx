import {defineComponent, Teleport} from 'vue'
import {Spin} from 'ant-design-vue'
import styled from "vue3-styled-components";
import {LoadingOutlined} from '@ant-design/icons-vue'


const Wrap = styled('div')`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .ant-spin {
    color: #d33a31;

  }

  .ant-spin-dot {
    font-size: 50px;
  }

  .ant-spin-container {
    color: #d33a31;
    font-size: 20px;
    opacity: 1;
    position: absolute;
    width: 100px;
    text-align: center;
    left: -40px;
    top: 50px;

    &::after {
      background: none;
    }
  }

`

const FullLoading = defineComponent(() => {
    return () => (
        <Teleport to={'#loading'}>
            <Wrap>
                <Spin v-slots={{indicator: () => <LoadingOutlined/>}}>
                    载入中
                </Spin>
            </Wrap>
        </Teleport>

    )
})
export default FullLoading