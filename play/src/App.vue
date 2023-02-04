<script setup lang="ts">
import Button from './components/Button.vue'
import DatePicker from './components/DatePicker.vue'
const data: string[] = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
</script>


<template>
    <!-- list测试 -->
    <kl-list :dataSource="data" size="small">
        <template #renderItem="item">
            <kl-list-item>
                <p>{{ item.key }}</p>
            </kl-list-item>
        </template>
        <template #header>
            <p>header</p>
        </template>
        <template #footer>
            <p>footer</p>
        </template>
    </kl-list>
    <!-- <kl-list :dataSource="data" size="normal">
        <kl-list-item>normal</kl-list-item>
    </kl-list>

    <kl-list :dataSource="data" size="large">
        <kl-list-item>large</kl-list-item>
    </kl-list> -->
    <Button></Button>
    <DatePicker></DatePicker>
</template>

<style scoped lang="scss">

</style>
