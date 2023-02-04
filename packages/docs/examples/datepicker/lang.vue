<template>
    <div class="kl-date-picker">
        <KlDatePicker lang="en"></KlDatePicker>
        <KlDatePicker picker="month" lang="en"></KlDatePicker>
        <KlDatePicker picker="year" lang="en"></KlDatePicker>
        <KlDatePicker isDateTime lang="en"></KlDatePicker>
        <KlDatePicker isRangePicker lang="en"></KlDatePicker>
        <KlDatePicker picker="month" isRangePicker lang="en"></KlDatePicker>
        <KlDatePicker picker="year" isRangePicker lang="en"></KlDatePicker>
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
