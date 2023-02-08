
<template>

    <div :style="{ margin: '16px' }">
        <div :style="{ margin: '16px 0' }">
            <h2>基础列表</h2>
            <p>可通过设置bordered来展示边框，并预留avatar来放置头像</p>
        </div>
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

        <div :style="{ width: '40%', margin: '16px 0' }">
            <h2>简单列表</h2>
            <p> 列表拥有超大、大、中、小、迷你五种尺寸。 通过设置 size 为 xlarge、large、small、mini 分别把列表设为超大、大、小、迷你尺寸。
                若不设置 size,则尺寸为中。 可通过设置 header 和 footer,来自定义列表头部和尾部。</p>
        </div>
        <h3 :style="{ margin: '16px 0' }">Small Size</h3>
        <kl-list :dataSource="data" size="small" bordered header footer>
            <template #renderItem="{ item }">
                <kl-list-item>
                    <template #content>
                        {{ item }}
                    </template>
                </kl-list-item>
            </template>
            <template #header>
                header
            </template>
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
