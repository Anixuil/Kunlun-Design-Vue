import { Directive, DirectiveBinding, nextTick } from 'vue'
import { throttle } from 'lodash'

//定义可以传入的属性的默认值
const DELAY = 200
const DISABLED = false
const DISTANCE = 0
const IMMEDIATE = true

//处理传入的属性值(确保类型正确，没有传入就返回默认值)
const handleAttribute = (attribute: any, defaultValue: any) => {
    if (null === attribute || '' === attribute) return defaultValue //如果是null或者''空字符串说明没有传入
    if ('false' === attribute || 'true' === attribute) {
        //boolean值的属性
        return attribute
    } else if (!isNaN(Number(attribute))) {
        //不是NaN，是数字
        return Number(attribute)
    } else {
        return defaultValue
    }
}
//这个就是指令名
const InfiniteScroll: Directive = {
    async mounted(el: any, binding: DirectiveBinding) {
        const fn = binding.value //获得v指令传入的值
        const instance = binding.instance //组件实例

        //指令的值必须是一个函数
        if (typeof fn !== 'function') {
            throw new Error('指令value必须是函数')
        }
        await nextTick()

        /*获取属性*/
        const delay: number = handleAttribute(el.getAttribute('infinite-scroll-delay'), DELAY)
        const disabled: boolean = handleAttribute(
            el.getAttribute('infinite-scroll-disabled'),
            DISABLED
        )
        const distance: number = handleAttribute(
            el.getAttribute('infinite-scroll-distance'),
            DISTANCE
        )
        const immediate: boolean = handleAttribute(
            el.getAttribute('infinite-scroll-immediate'),
            IMMEDIATE
        )
        //scroll监听事件，处理触底加载核心
        const handleScroll = () => {
            if (disabled) return //禁用
            const totalHeight = el.scrollHeight
            const clientHeight = el.clientHeight
            const scrollTop = el.scrollTop

            if (Math.floor(totalHeight - clientHeight - scrollTop) <= distance) {
                //触底调用加载函数
                fn.call(instance)
            }
        }
        ;(instance as any).handleScroll = handleScroll
        //如果设置有immediate说明立即执行，则立即执行回调，直到将内容撑满内容区
        if (immediate) {
            const timer: any = setInterval(() => {
                let child = el.children[0]
                const len = el.children.length
                let i = 0
                let childHeight = 0
                while (i < len) {
                    childHeight = childHeight + child.scrollHeight

                    child = child.nextElementSibling
                    i++
                }
                //子元素高度综合
                if (childHeight >= el.clientHeight) {
                    return clearInterval(timer)
                }
                fn.call(instance)
            }, 1500)
        }

        //给当前dom元素添加scroll监听事件
        el.addEventListener('scroll', throttle((instance as any).handleScroll, delay))
    },
    unmounted(el: any, binding: DirectiveBinding) {
        const instance = binding.instance
        const handleScroll = (instance as any).handleScroll
        el.removeEventListener('scroll', handleScroll)
    }
}

export default InfiniteScroll
