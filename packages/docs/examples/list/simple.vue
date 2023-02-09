<template>
    <h3 :style="{ margin: '16px 0' }">Mini Size</h3>
    <kl-list :dataSource="data" size="mini" bordered header footer>
        <template #renderItem="{ item }">
            <kl-list-item>
                <template #content>
                    {{ item }}
                </template>
            </kl-list-item>
        </template>
        <template #header> header </template>
        <template #footer>
            <div>footer</div>
        </template>
    </kl-list>

    <h3 :style="{ margin: '16px 0' }">Small Size</h3>
    <kl-list :dataSource="data" size="small" bordered header footer>
        <template #renderItem="{ item }">
            <kl-list-item>
                <template #content>
                    {{ item }}
                </template>
            </kl-list-item>
        </template>
        <template #header> header </template>
        <template #footer>
            <div>footer</div>
        </template>
    </kl-list>

    <h3 :style="{ margin: '16px 0' }">Normal Size</h3>
    <kl-list :dataSource="data" size="normal" header footer bordered>
        <template #renderItem="{ item }">
            <kl-list-item>
                <template #content>
                    <p>{{ item }}</p>
                </template>
            </kl-list-item>
        </template>
        <template #header>
            <div>header</div>
        </template>
        <template #footer>
            <div>footer</div>
        </template>
    </kl-list>

    <h3 :style="{ margin: '16px 0' }">Large Size</h3>
    <kl-list :dataSource="data" size="large" header footer bordered>
        <template #renderItem="{ item }">
            <kl-list-item>
                <template #content>
                    <p>{{ item }}</p>
                </template>
            </kl-list-item>
        </template>
        <template #header>
            <div>header</div>
        </template>
        <template #footer>
            <div>footer</div>
        </template>
    </kl-list>

    <h3 :style="{ margin: '16px 0' }">Xlarge Size</h3>
    <kl-list :dataSource="data" size="xlarge" header footer bordered>
        <template #renderItem="{ item }">
            <kl-list-item>
                <template #content>
                    <p>{{ item }}</p>
                </template>
            </kl-list-item>
        </template>
        <template #header>
            <div>header</div>
        </template>
        <template #footer>
            <div>footer</div>
        </template>
    </kl-list>
</template>

<script setup lang="ts">
const data: string[] = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
]
</script>

<style scoped lang="scss"></style>
