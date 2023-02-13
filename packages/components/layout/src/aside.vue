<template>
    <aside :class="[n()]" :style="{ width }">
        <slot />
    </aside>
</template>
<script lang="ts">
export default {
    name: 'kl-aside'
}
</script>
<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { defineProps, withDefaults } from 'vue'
import './styles/aside.scss'
type Props = {
    width: string
}
withDefaults(defineProps<Props>(), {
    width: '300px'
})
const { n } = createNamespace('aside') //命名
</script>
<style></style>
