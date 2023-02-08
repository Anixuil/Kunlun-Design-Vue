<template>
    <div class="app" :style="{ margin: '16px' }">
        <h1>placeholder属性</h1>
        <KlDatePicker placeholder="花无凋零之时"></KlDatePicker>
        <br />
        <br />
        <h1>placeholderRange属性</h1>
        <KlDatePicker :isRangePicker="true" :placeholderRange="['花无凋零之时', '爱无传达之日']"></KlDatePicker>
        <br />
        <br />
        <h1>picker属性</h1>
        <KlDatePicker></KlDatePicker>
        <br />
        <br />
        <KlDatePicker picker="month"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker picker="year"></KlDatePicker>
        <h1>format属性</h1>
        <KlDatePicker></KlDatePicker>
        <br />
        <br />
        <KlDatePicker format="YYYY/MM/DD"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker format="M.D.YYYY"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker format="M/D/YY"></KlDatePicker>
        <h1>isDateTime属性</h1>
        <KlDatePicker :isDateTime="true"></KlDatePicker>
        <br />
        <br />
        <h1>isRangePicker属性</h1>
        <KlDatePicker :isRangePicker="true"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :isRangePicker="true" picker="month"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :isRangePicker="true" picker="year"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :isRangePicker="true" :isDateTime="true"></KlDatePicker>
        <br />
        <br />
        <h1>disabledDate属性</h1>
        <KlDatePicker :disabledDate="disabledDate"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :disabledDate="disabledDate" :isRangePicker="true"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :disabledDate="disabledDate" :isRangePicker="true" :isDateTime="true"></KlDatePicker>
        <br />
        <br />
        <h1>disabledTime属性</h1>
        <KlDatePicker :disabledTime="disabledTime" :isRangePicker="true" :isDateTime="true"></KlDatePicker>
        <br />
        <br />
        <h1>showHolidays属性</h1>
        <KlDatePicker :showHolidays="true"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :isDateTime="true" :showHolidays="true"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :isRangePicker="true" :showHolidays="true"></KlDatePicker>
        <br />
        <br />
        <h1>lang属性</h1>
        <KlDatePicker lang="en"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker picker="month" lang="en"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker picker="year" lang="en"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :isDateTime="true" lang="en"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :isRangePicker="true" lang="en"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker picker="month" :isRangePicker="true" lang="en"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker picker="year" :isRangePicker="true" lang="en"></KlDatePicker>
    </div>
</template>

<script lang="ts" setup>
import { KlDatePicker } from 'kunlun-design'
// import Test from "./components/others/Test.vue"
const disabledDate = [
    [2023, 1, 28],
    [2023, 1, 29],
    [2023, 1, 30],
    [2023, 2, 21],
    [2023, 2, 22],
    [2023, 2, 23]
]

const disabledTime = [
    [0, 1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
]
</script>

<style lang="scss" scoped>
.app {
    height: 2800px;
}
</style>
