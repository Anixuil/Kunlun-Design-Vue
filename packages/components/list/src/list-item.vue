<template>
    <!-- 这里是不是不应该放样式，在li那里放 -->
    <div :class="[n()]">
        <slot name="extra"></slot>
        <slot name="actions"></slot>
        <slot name="content"></slot>
    </div>
</template>

<script setup lang="ts">
// import { ListProps } from './list';
import './list.scss'
import { createNamespace } from '@kunlun-design/utils'

// const props = defineProps(ListProps)

defineOptions({
    name: 'KlListItem'
})
const { n } = createNamespace('list-item')
</script>

<style scoped lang="scss"></style>
