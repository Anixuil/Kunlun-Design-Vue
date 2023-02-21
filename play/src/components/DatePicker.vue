<template>
    <div class="app" :style="{ margin: '16px' }">
        <h1>placeholder属性</h1>
        <KlDatePicker placeholder="花无凋零之时" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <h1>placeholderRange属性</h1>
        <KlDatePicker
            :isRangePicker="true"
            :placeholderRange="['花无凋零之时', '爱无传达之日']"
            @change="getValue"
        ></KlDatePicker>
        <br />
        <br />
        <h1>picker属性</h1>
        <KlDatePicker @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker picker="month" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker picker="year" @change="getValue"></KlDatePicker>
        <h1>format属性</h1>
        <KlDatePicker @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker format="YYYY/MM/DD" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker format="M.D.YYYY" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker format="M/D/YY" @change="getValue"></KlDatePicker>
        <h1>isDateTime属性</h1>
        <KlDatePicker :isDateTime="true" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <h1>isRangePicker属性</h1>
        <KlDatePicker :isRangePicker="true" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :isRangePicker="true" picker="month" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :isRangePicker="true" picker="year" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :isRangePicker="true" :isDateTime="true" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <h1>disabledDate属性</h1>
        <KlDatePicker :disabledDate="disabledDate" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker
            :disabledDate="disabledDate"
            :isRangePicker="true"
            @change="getValue"
        ></KlDatePicker>
        <br />
        <br />
        <KlDatePicker
            :disabledDate="disabledDate"
            :isRangePicker="true"
            :isDateTime="true"
            @change="getValue"
        ></KlDatePicker>
        <br />
        <br />
        <h1>disabledTime属性</h1>
        <KlDatePicker
            :disabledTime="disabledTime"
            :isRangePicker="true"
            :isDateTime="true"
            @change="getValue"
        ></KlDatePicker>
        <br />
        <br />
        <h1>showHolidays属性</h1>
        <KlDatePicker :showHolidays="true" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :isDateTime="true" :showHolidays="true" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :isRangePicker="true" :showHolidays="true" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <h1>lang属性</h1>
        <KlDatePicker lang="en" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker picker="month" lang="en" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker picker="year" lang="en" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :isDateTime="true" lang="en" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker :isRangePicker="true" lang="en" @change="getValue"></KlDatePicker>
        <br />
        <br />
        <KlDatePicker
            picker="month"
            :isRangePicker="true"
            lang="en"
            @change="getValue"
        ></KlDatePicker>
        <br />
        <br />
        <KlDatePicker
            picker="year"
            :isRangePicker="true"
            lang="en"
            @change="getValue"
        ></KlDatePicker>
    </div>
</template>

<script lang="ts" setup>
import { KlDatePicker } from '@kunlun-design/components'
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

const getValue = (value: string | string[]) => {
    console.log(value)
}
</script>

<style lang="scss" scoped>
.app {
    margin-bottom: 100px;
}
</style>
