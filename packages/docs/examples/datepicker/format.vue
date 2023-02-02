<template>
    <div class="kl-date-picker">
        <kl-date-picker format="YYYY/MM/DD"></kl-date-picker>
        <kl-date-picker format="MM/DD/YYYY"></kl-date-picker>
        <kl-date-picker picker="month" format="YYYY/MM"></kl-date-picker>
        <kl-date-picker picker="month" format="YYYY.M"></kl-date-picker>
        <kl-date-picker isDateTime format="YYYY/MM/DD HH:mm:ss"></kl-date-picker>
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
