<template>
    <div class="upload-pregress"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { FileItem } from '../utils/type'
/**
 * --------------------组件通信--------------------
 */
const props = defineProps<{ uploadFile: FileItem }>()
/**
 * --------------------组件状态--------------------
 */
const percent = computed(() => '-' + (100 - Math.floor(props.uploadFile.percent)) + '%')
</script>

<style lang="scss" scoped>
.upload-pregress {
    position: absolute;
    height: 100%;
    width: 100%;
    left: v-bind(percent);
    top: 95%;
    background: linear-gradient(to right, #f56c6c, #67c23a);
}
</style>
