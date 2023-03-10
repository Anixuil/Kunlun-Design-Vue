//message 的一些工具方法
import gsap from 'gsap'
//创建节点
export const createNode = () => {
    //创建 message 容器 并设置 class state
    const node = document.createElement('div')
    const attr = document.createAttribute('class')
    //state用来判断当前message的状态，是出于提示中还是消失中
    const state = document.createAttribute('state')
    //给 class state 设置默认值
    attr.value = 'kl-message'
    state.value = 'false'
    node.setAttributeNode(attr)
    node.setAttributeNode(state)

    return node
}

// 重新计算 message 消息提示框的高度
export const resetMsgTop = (arr: NodeListOf<HTMLElement>, height: number, time: number): void => {
    let num = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].getAttribute('state') == 'true') {
            num++
        } else {
            gsap.to(arr[i], {
                top: (i - num) * (i == 0 ? height : height + arr[i - 1].offsetHeight),
                duration: time / 1000,
                ease: 'Power1.ease'
            })
        }
    }
}

//判断情况使用距离变量
//计算初始位置
export const startPositionFn = (arr: NodeListOf<HTMLElement>, height: number): number => {
    //如果数组为0则证明当前的message是页面当中第一个message
    if (arr.length === 0) {
        return -(height * 7)
    }
    return arr[arr.length - 1].offsetTop
}

import type { Ref } from 'vue'
export type htmlType = {
    clientWidth: number
    offsetWidth: number
}

//文字滚动方法
export const textScroll = (
    wrapper: Ref<HTMLElement | htmlType>,
    container: Ref<HTMLElement | htmlType>,
    duration: number
): Promise<boolean> => {
    return new Promise(resolve => {
        //容器宽度
        const wrapperWidth = wrapper.value.clientWidth - 80
        //内容应有宽度
        const containerWidth = container.value.offsetWidth
        //如果文字内容宽度比容器宽度大 证明文字需要滚动
        if (wrapperWidth < containerWidth) {
            setTimeout(() => {
                gsap.to(container.value, {
                    translateX: -(containerWidth - wrapperWidth),
                    duration: duration / 1000,
                    ease: 'none.none'
                }).then(() => {
                    resolve(true)
                })
            }, 2000)
        } else {
            resolve(false)
        }
    })
}
