<template>
    <div :class="[config.type && n(`--${config.type}`)]" ref="wrapper">
        <div v-if="!config.scroll" ref="container">
            <contentVNode v-if="renderFlag" />
            <span ref="container" v-else>{{ contentStr }}</span>
        </div>
        <div class="scroll-wrapper" v-else>
            <contentVNode v-if="renderFlag" />
            <span v-else class="kl-message--scroll" ref="container">{{ contentStr }}</span>
        </div>
        <i v-if="config.close" @click="closeMessage">❌</i>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { ComponentOptions, computed, defineComponent, nextTick, ref, Ref } from 'vue'
import { htmlstr, textScroll } from './utils/index'
import type { htmlType } from './utils/index'
import { messageCfgInt } from './utils/type'
import './message.scss'

const props = defineProps({ config: Object, remove: Function })

const config = computed(() => {
    if (props.config === undefined || props.config === null) return {} as messageCfgInt
    return props.config
})

//渲染规则，为true则是虚拟dom
let renderFlag = ref(false)
let contentStr: Ref<string> = ref('')
let contentVNode: ComponentOptions
nextTick(() => {
    let result: any
    if (typeof config.value.content === 'string') {
        renderFlag.value = false
        result = config.value.content
        contentStr.value = result
    } else {
        renderFlag.value = true
        result = defineComponent({
            render(): any {
                return config.value.content
            }
        })
        contentVNode = result
    }
})

//检测文本是否超出，如果超出则自动添加对应的文字滚动效果
const wrapper = ref(htmlstr)
const container: Ref<HTMLElement | htmlType> = ref(htmlstr)

let time: any
let scrollState: boolean
nextTick(async () => {
    if (config.value.scroll) {
        //进入滚动状态
        scrollState = true
        let isContinue = await textScroll(wrapper, container, config.value.duration)
        //如果滚动成功且消息框没有中途暴毙，则往后继续执行
        if (isContinue && scrollState) {
            //如果延迟为0则是永不消失
            if (config.value.duration === 0) {
                return
            }
            //自动延迟消失
            time = setTimeout(() => {
                props.remove!()
            }, 1000)
            return
        }
    }
    //如果延迟为0则是永不消失
    if (config.value.duration === 0) {
        return
    }
    //如果滚动状态为false则不继续执行
    if (scrollState === false) return
    //自动延迟消失
    time = setTimeout(() => {
        props.remove!()
    }, config.value.duration)
})

//按钮关闭 message
const closeMessage = () => {
    //必须清空定时器，不清空定时器还是会执行，就会报错
    clearTimeout(time)
    //将滚动状态改为false
    scrollState = false
    props.remove!()
}

defineOptions({
    name: 'KlMessage'
})

const { n } = createNamespace('message')
</script>

<style scoped></style>
