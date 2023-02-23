<template>
    <div class="kl-carousel-item">
        <slot />
    </div>
</template>
<script setup lang="ts">
import { computed, CSSProperties, inject } from 'vue'
defineOptions({
    name: 'KlCarouselItem'
})
// const translate = inject('translate')

// const itemStyle = computed<CSSProperties>(() => {})
</script>
<style>
.kl-carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    overflow: hidden;
}
</style>
