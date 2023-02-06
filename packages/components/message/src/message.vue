<template>
    <div :class="[config.type && n(`--${config.type}`)]" ref="wrapper">
        <span v-if="!config.scroll" v-text="config.text" ref="container"></span>
        <div class="scroll-wrapper" v-else>
            <span v-text="config.text" class="kl-message--scroll" ref="container"></span>
        </div>
        <i v-if="config.close" @click="closeMessage">❌</i>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { computed, nextTick, ref } from 'vue'
import { htmlstr, textScroll } from './utils/index'
import './message.scss'

const props = defineProps({ config: Object, remove: Function })

interface IntConfig {
    text: String
    duration: number
    scroll: boolean
}

const config = computed(() => {
    if (props.config === undefined || props.config === null) return {} as IntConfig
    return props.config
})

//检测文本是否超出，如果超出则自动添加对应的文字滚动效果
const wrapper = ref(htmlstr)
const container = ref(htmlstr)

let time: any
nextTick(async () => {
    if (config.value.scroll) {
        let isContinue = await textScroll(wrapper, container)
        if (isContinue) {
            //自动延迟消失
            time = setTimeout(() => {
                props.remove!()
            }, 1000)
            return
        }
    }
    //自动延迟消失
    time = setTimeout(() => {
        props.remove!()
    }, config.value.duration)
})

//按钮关闭 message
const closeMessage = () => {
    //必须清空定时器，不清空定时器还是会执行，就会报错
    clearTimeout(time)
    props.remove!()
}

defineOptions({
    name: 'KlMessage'
})

const { n } = createNamespace('message')
</script>

<style scoped></style>
