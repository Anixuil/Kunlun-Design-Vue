<template>
    <div class="carousel">
        <KlCarousel>
            <div class="carousel-item">page 1</div>
            <div class="carousel-item">page 2</div>
            <div class="carousel-item">page 3</div>
            <div class="carousel-item">page 3</div>
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
