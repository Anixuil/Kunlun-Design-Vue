<template>
    <div :class="[config.type && n(`--${config.type}`)]">
        <span v-text="config.text"></span>
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

nextTick(() => {
    setTimeout(() => {
        props.remove!()
    }, config.value.duration)
})

defineOptions({
    name: 'KlMessage'
})

const { n } = createNamespace('message')
</script>

<style scoped></style>
