
<template>
    <!-- meta结构演示： -->
    <div :style="{ margin: '16px' }">
        <kl-list :dataSource="data1" size="small" bordered>
            <template #renderItem="{ item }">
                <kl-list-item size="large">
                    <template #content>
                        <kl-list-item-meta>
                            <template #title>
                                <h4> <a href="https://www.KL-Designdv.com/">{{ item.title }}</a></h4>
                            </template>
                            <template #description>
                                {{ item.description }}
                            </template>
                        </kl-list-item-meta>
                    </template>
                </kl-list-item>
            </template>
        </kl-list>


        <h3 :style="{ margin: '16px 0' }">Small Size</h3>
        <kl-list :dataSource="data" size="small" bordered>
            <template #renderItem="{ item }">
                <kl-list-item>
                    <template #content>
                        {{ item }}
                    </template>
                </kl-list-item>
            </template>
            <!-- <template #header>
            header
        </template> -->
            <!-- <template #footer>
            <div>footer</div>
        </template> -->
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
    </div>


</template>

<script setup lang="ts">
import { KlList, KlListItem, KlListItemMeta } from 'kunlun-design'


const data: string[] = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
const data1: object[] = [
    {
        title: 'KL-Design Title 1',
        description: "KL-Design, a design language for background applications, is refined by KL-Design Team"
    },
    {
        title: 'KL-Design Title 2',
        description: "KL-Design, a design language for background applications, is refined by KL-Design Team"
    },
    {
        title: 'KL-Design Title 3',
        description: "KL-Design, a design language for background applications, is refined by KL-Design Team"
    },
    {
        title: 'KL-Design Title 4',
        description: "KL-Design, a design language for background applications, is refined by KL-Design Team"
    },
];
</script>


<style scoped lang="scss">

</style>
