<template>
    <div class="carousel">
        <KlCarousel trigger="hover" :autoplay="true" :initial-index="3">
            <div class="carousel-item">1</div>
            <div class="carousel-item">2</div>
            <div class="carousel-item">3</div>
            <div class="carousel-item">4</div>
        </KlCarousel>
    </div>
</template>

<script lang="ts" setup>
import { KlCarousel } from '@kunlun-design/components'
</script>

<style lang="scss" scoped>
.carousel-item {
    height: 300px;
    background-color: #d3dce6;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
