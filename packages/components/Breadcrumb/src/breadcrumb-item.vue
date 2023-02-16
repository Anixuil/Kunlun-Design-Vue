<template>
    <span :class="[n()]">
        <router-link v-if="to" :to="to" :replace="replace">
            <slot></slot>
        </router-link>
        <span v-else>
            <slot></slot>
            <slot name="overlay"></slot>
        </span>
        <span class="kl-breadcrumb-item-separator">{{ separator }}</span>
    </span>
</template>

<script setup lang="ts">
import './breadcrumb.scss'
import { createNamespace } from '@kunlun-design/utils'
import { BreadCrumbItemProps } from './breadcrumb-item'
import { inject } from 'vue'

const props = defineProps(BreadCrumbItemProps);
const separator = inject('separator');

defineOptions({
    name: 'KlBreadCrumbItem'
})

const { n } = createNamespace('breadcrumb-item')
</script>

<style scoped lang="scss">

</style>
