<template>
    <div :class="[n()]"></div>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { DialogProps } from './dialog'
import './dialog.scss'

defineOptions({
    name: 'KlDialog'
})

const { n } = createNamespace('dialog')
</script>

<style scoped lang="scss"></style>
