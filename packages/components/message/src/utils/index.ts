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
export const resetMsgTop = (newArr: NodeListOf<HTMLElement>, height: number, time: number) => {
    let num = 0
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].getAttribute('state') == 'true') {
            num++
        } else {
            gsap.to(newArr[i], {
                top: (i - num) * height,
                duration: time / 1000,
                ease: 'Power1.ease'
            })
        }
    }
}
