<script setup lang="ts">
import icons from '@kl-design/icons/icons.json'
const props = defineProps<{ type: string }>()
const iconCpns = icons.filter((icon: string) => icon.includes(props.type))
const messageBox = () => {
    let timer: NodeJS.Timeout | null = null
    return (status: 'success' | 'failure', text: string) => {
        if (timer) return
        const dialogEl = document.createElement('div')
        dialogEl.className = 'dialog-' + status
        dialogEl.innerText = text
        document.body.appendChild(dialogEl)
        timer = setTimeout(() => {
            document.body.removeChild(dialogEl)
            timer = null
        }, 1000)
    }
}
const message = messageBox()
const copyText = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text)
        message('success', `${text} 复制成功`)
    } catch (error) {
        message('failure', `${text} 复制失败`)
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
:global(.dialog-success) {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
    font-size: 20px;
    background-color: #f0f9eb;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid #67c23a;
    z-index: 999;
}
:global(.dialog-failure) {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
    font-size: 20px;
    background-color: #fef0f0;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid #f56c6c;
    z-index: 999;
}
.title {
    margin: 30px 0 20px;
    font-size: 24px;
    font-family: '楷体';
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
            background-color: #f3f6ff;
            color: #3a7afe;
        }

        span {
            margin-top: 10px;
            font-size: 12px;
        }
    }
}
</style>
