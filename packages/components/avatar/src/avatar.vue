<template>
    <div :class="[n(), shape && n(`--${shape}`), size && n(`--${size}`)]">
        <img :src="src" :alt="alt" :srcset="srcSet" v-if="src || srcSet" />
        <span v-else>
            <slot>User</slot>
        </span>
    </div>
</template>
<script setup lang="ts">
import { AvatarProps, shapevalidator } from './avatar'
import { createNamespace } from '@kunlun-design/utils'
import { computed } from 'vue'
import './avatar.scss'
const props = defineProps(AvatarProps)

//检测shape是否符合规范
const shape = computed(() => {
    if (props.shape === undefined) return 'circle'
    return shapevalidator(props.shape) ? props.shape : 'circle'
})
defineOptions({
    name: 'KlAvatar'
})
const { n } = createNamespace('avatar')
</script>
<style scoped lang="scss"></style>
