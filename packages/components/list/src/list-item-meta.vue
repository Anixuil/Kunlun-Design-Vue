<template>
    <!-- 这里是不是不应该放样式，在li那里放 -->
    <div :class="[n()]">
        <div class="kl-list-item-meta-content">
            <slot name="title"></slot>
            <slot name="description"></slot>
        </div>
        <!-- <slot name="avatar"></slot> -->

    </div>

</template>

<script setup lang="ts">
// import { ListProps } from './list';
import './list.scss';
import { createNamespace } from '@kunlun-design/utils'

// const props = defineProps(ListProps)



defineOptions({
    name: 'KlListItemMeta'
})
const { n } = createNamespace('list-item-meta')
</script>


<style scoped lang="scss">

</style>