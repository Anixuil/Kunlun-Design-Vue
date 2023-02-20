<template>
    <div class="kl-carousel-indicator">
        <div
            :class="['kl-carousel-indicator-item', { active: modelValue === item }]"
            v-for="item in count"
            :key="item"
        ></div>
    </div>
</template>

<script lang="ts" setup>
/**
 * --------------------组件通信--------------------
 */
export interface IPropsType {
    modelValue: number
    count: number
}
export interface IEmitType {
    (e: 'update:modelValue', value: number): void
}
const props = defineProps<IPropsType>()
const emit = defineEmits<IEmitType>()
</script>

<style lang="scss" scoped>
.kl-carousel-indicator {
    display: flex;
    position: absolute;
    bottom: 12px;
    justify-content: center;
    width: 100%;

    .kl-carousel-indicator-item {
        cursor: pointer;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        margin-right: 8px;
        background: rgba(30, 45, 60, 0.2);

        &.active {
            width: 12px;
            background: #5e7ce0;
            transition: all 0.3s ease;
        }
    }
}
</style>
