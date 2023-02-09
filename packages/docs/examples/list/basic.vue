<template>
    <kl-list :dataSource="data1" size="small" bordered>
        <template #renderItem="{ item }">
            <kl-list-item size="large">
                <template #content>
                    <kl-list-item-meta>
                        <template #avatar>
                            <img src="../../public/images/logo.jpg" alt="头像" class="avatar" />
                        </template>

                        <template #title>
                            <h4>
                                <a href="https://anixuil.github.io/">{{ item.title }}</a>
                            </h4>
                        </template>
                        <template #description>
                            {{ item.description }}
                        </template>
                    </kl-list-item-meta>
                </template>
                <template #actions>
                    <kl-button link type="primary">edit</kl-button>
                </template>
            </kl-list-item>
        </template>
    </kl-list>
</template>

<script setup lang="ts">
const data1: object[] = [
    {
        title: 'KL-Design Title 1',
        description:
            'KL-Design, a design language for background applications, is refined by KL-Design Team'
    },
    {
        title: 'KL-Design Title 2',
        description: 'KL-Desig  was founded by a group of creative people '
    },
    {
        title: 'KL-Design Title 3',
        description:
            'KL-Design, a design language for background applications, is refined by KL-Design Team'
    },
    {
        title: 'KL-Design Title 4',
        description:
            'KL-Design, a design language for background applications, is refined by KL-Design Team'
    }
]
</script>

<style scoped lang="scss">
.avatar {
    width: 10%;
    height: 10%;
    border-radius: 50%;
}

.vp-doc ul {
    list-style: none;
}
</style>
