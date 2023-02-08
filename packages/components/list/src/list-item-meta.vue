<template>
    <div :class="[n()]">
        <div class="kl-list-item-meta-content">
            <div class="kl-list-item-meta-title">
                <slot name="title"></slot>
            </div>
            <div class="kl-list-item-meta-description">
                <slot name="description"></slot>
            </div>
        </div>
        <slot name="avatar"></slot>
    </div>
</template>

<script setup lang="ts">
// import { ListProps } from './list';
import './list.scss'
import { createNamespace } from '@kunlun-design/utils'

// const props = defineProps(ListProps)

defineOptions({
    name: 'KlListItemMeta'
})
const { n } = createNamespace('list-item-meta')
</script>

<style scoped lang="scss"></style>
