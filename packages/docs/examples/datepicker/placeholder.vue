<template>
    <div class="kl-date-picker">
        <kl-date-picker placeholder="Hello World"></kl-date-picker>
        <kl-date-picker
            isRangePicker
            :placeholderRange="['Hello World', '你好，世界']"
        ></kl-date-picker>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.kl-date-picker {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > div {
        margin-bottom: 20px;
    }
}
</style>
