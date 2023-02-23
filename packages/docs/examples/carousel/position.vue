<template>
    <KlCarousel class="block" indicatorPosition="outside">
        <div class="carousel-item">1</div>
        <div class="carousel-item">2</div>
        <div class="carousel-item">3</div>
        <div class="carousel-item">4</div>
    </KlCarousel>
</template>
<script lang="ts"></script>
<style>
.block {
    margin: 20px;
}

.carousel-item {
    height: 300px;
    width: 400px;
    background-color: var(--theme-color-dark);
    color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
