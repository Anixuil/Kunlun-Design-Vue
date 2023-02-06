//引入 gsap 动画库
import gsap from 'gsap'
import { createApp } from 'vue'
import Message from './message.vue'
import { createNode, resetMsgTop, startPositionFn } from './utils'

const createMessage = (cfg: object) => {
    //获取传过来的参数，如果没有就是一个空对象
    const config = cfg || {}
    //获取已经存在的 message 节点数组
    const messageList: any = document.querySelectorAll('.kl-message')

    //创建一个 message 节点
    const messageNode = createNode()

    //每个 message 之间的距离
    const height = 10

    //这里我们实现一个效果，新生成的消息提示框会在上一个下面开始产生 所以我们需要动态设置每一个 message 的初始坐标
    messageNode.style.top = startPositionFn(messageList, height) + 'px'

    //统一时间管理
    const time = 300

    //用来存放每次新增和删除一个message节点时的数组
    let currentMessageList: NodeListOf<HTMLElement>

    //创建app
    const app: any = createApp(Message, {
        config,
        remove() {
            //改变当前状态
            messageNode.setAttribute('state', 'true')
            //状态变更就更新队列
            currentMessageList = document.querySelectorAll('.kl-message')
            //更新位置
            // hideFn(currentMessageList,height,time)
            resetMsgTop(currentMessageList, height, time)

            //移除
            gsap.to(messageNode, {
                top: messageNode.offsetTop - messageNode.offsetHeight,
                opacity: 0,
                duration: time / 1000,
                ease: 'Power1.easeOut'
            }).then(() => {
                handleRemove()
            })
        }
    })

    //挂载实例并追加到 body 结尾
    app.vm = app.mount(messageNode)
    document.body.appendChild(messageNode)

    //出现动画
    gsap.to(messageNode, {
        opacity: 1,
        duration: time / 1000,
        ease: 'Power1.ease'
    })

    //更新
    currentMessageList = document.querySelectorAll('.kl-message')
    resetMsgTop(currentMessageList, height, time)

    app.close = () => {
        handleRemove()
    }

    //卸载 移除
    const handleRemove = () => {
        app.unmount()
        document.body.removeChild(messageNode)
    }

    return app
}

export default createMessage
