<template>
    <div class="kl-date-picker">
        <kl-date-picker :disabledDate="disabledDate"></kl-date-picker>
        <kl-date-picker isDateTime :disabledTime="disabledTime"></kl-date-picker>
    </div>
</template>

<script setup lang="ts">
const disabledDate = [
    [2023, 2, 26],
    [2023, 2, 27],
    [2023, 2, 28]
]

const disabledTime = [
    [2, 3],
    [5, 6],
    [8, 9]
]
</script>

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
