<script setup lang="ts">
import icons from '@kl-design/icons/icons.json'
import { KlMessage } from '@kunlun-design/components'
const props = defineProps<{ type: string }>()
const iconCpns = icons.filter((icon: string) => icon.includes(props.type))
const copyText = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text)
        KlMessage.success(`${text} 复制成功`)
    } catch (error) {
        KlMessage.error(`${text} 复制失败`)
    }
}
const handleCopy = (cpn: string) => {
    const cpnStr = `<${cpn} />`
    copyText(cpnStr)
}
</script>

<template>
    <div class="kl-icon">
        <div class="title">{{ type.replace('Kl', '') }}</div>
        <div class="icon-box">
            <div class="icon-item" v-for="cpn in iconCpns" :key="cpn" @click="handleCopy(cpn)">
                <Component :is="cpn" />
                <span>{{ cpn.replace(type, '') }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.title {
    margin: 30px 0 20px;
    font-size: 24px;
    font-family: '楷体', sans-serif;
}

.icon-box {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    border-top: 1px solid #dcdfe6;
    border-left: 1px solid #dcdfe6;

    .icon-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 16.6667%;
        height: 100px;
        border-bottom: 1px solid #dcdfe6;
        border-right: 1px solid #dcdfe6;
        font-size: 20px;
        cursor: pointer;
        transition: background-color 0.5s, color 0.2s;

        &:hover {
            background-color: #f0f9eb;
            color: rgb(58, 186, 85);
        }

        span {
            margin-top: 10px;
            font-size: 12px;
        }
    }
}
</style>
