<template>
    <span :class="[n()]">
        <span v-if="to" @click="onClick" class="kl-breadcrumb-item-link">
            <slot></slot>
        </span>
        <span v-else>
            <slot></slot>
        </span>
        <span class="kl-breadcrumb-item-separator">{{ separator }}</span>
    </span>
</template>

<script setup lang="ts">
import './breadcrumb.scss'
import { createNamespace } from '@kunlun-design/utils'
import { BreadCrumbItemProps } from './breadcrumb-item'
import { getCurrentInstance, inject } from 'vue'
import type { Router } from 'vue-router'

const instance = getCurrentInstance()!
const props = defineProps(BreadCrumbItemProps)
const separator = inject('separator')

defineOptions({
    name: 'KlBreadCrumbItem'
})

const { n } = createNamespace('breadcrumb-item')

const router = instance.appContext.config.globalProperties.$router as Router

const onClick = () => {
    if (!props.to || !router) return
    props.replace ? router.replace(props.to) : router.push(props.to)
}
</script>

<style scoped lang="scss"></style>
