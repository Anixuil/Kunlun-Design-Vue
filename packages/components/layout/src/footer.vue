<template>
    <footer :class="[n()]" :style="{ height }">
        <slot />
    </footer>
</template>
<script lang="ts">
export default {
    name: 'KlFooter'
}
</script>
<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { defineProps, withDefaults } from 'vue'
import './styles/footer.scss'
type Props = {
    height?: string
}
withDefaults(defineProps<Props>(), {
    height: '60px'
})
const { n } = createNamespace('footer') //命名
</script>
<style></style>
