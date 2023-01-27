<template>
    <ul :class="[n()]">
        <li v-for="item in props.dataSource" :key="item">{{ item }}</li>
    </ul>

</template>

<script setup lang="ts">
import { ListProps } from './list'
import { createNamespace } from '@kunlun-design/utils'
const props = defineProps(ListProps)


defineOptions({
    name: 'KlList'
})
const { n } = createNamespace('list')
</script>

<style scoped lang="scss">

</style>