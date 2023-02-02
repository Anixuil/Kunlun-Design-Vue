<template>
    <div class="kl-date-picker">
        <kl-date-picker isRangePicker></kl-date-picker>
        <kl-date-picker isRangePicker picker="month"></kl-date-picker>
        <kl-date-picker isRangePicker picker="year"></kl-date-picker>
        <kl-date-picker isDateTime isRangePicker></kl-date-picker>
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
