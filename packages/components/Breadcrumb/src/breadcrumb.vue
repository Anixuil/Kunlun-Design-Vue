<template>
    <div :class="[n()]">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import './breadcrumb.scss'
import { createNamespace } from '@kunlun-design/utils'
import { BreadCrumbProps } from './breadcrumb'
import { provide, ref } from 'vue'

const props = defineProps(BreadCrumbProps);

const separator = ref(props.separator)
provide('separator', separator);

defineOptions({
    name: 'KlBreadCrumb'
})

const { n } = createNamespace('breadcrumb')
</script>

<style scoped lang="scss">

</style>
