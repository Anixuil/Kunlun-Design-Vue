<template>
    <div :class="[config.type && n(`--${config.type}`)]">
        <span v-text="config.text"></span>
        <i v-if="config.close" @click="closeMessage">❌</i>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { computed, nextTick } from 'vue'
import './message.scss'

const props = defineProps({ config: Object, remove: Function })

interface IntConfig {
    text: String
    duration: number
}

const config = computed(() => {
    if (props.config === undefined || props.config === null) return {} as IntConfig
    return props.config
})

let time: any
nextTick(() => {
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
