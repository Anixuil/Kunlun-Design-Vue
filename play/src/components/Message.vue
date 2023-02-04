<template>
    <div>
        <h2>message消息提示框</h2>
        <kl-button type="success" @click="handleClick(0)">成功</kl-button>
        <kl-button type="warning" @click="handleClick(1)">警告</kl-button>
        <kl-button type="danger" @click="handleClick(2)">错误</kl-button>
        <kl-button type="info" @click="handleClick(3)">信息</kl-button>
    </div>
</template>

<script setup lang="ts">
import { KlButton, Message, KlMessage } from 'kunlun-design'
KlMessage({ type: 'success', text: '这是api调用', duration: 5000 })

const handleClick = (type: number) => {
    switch (type) {
        case 0:
            Message.success('这是一条成功消息', 5000)
            break
        case 1:
            Message.warning('这是一条警告消息', 5000)
            break
        case 2:
            Message.error('这是一条错误消息', 5000)
            break
        case 3:
            Message.text('这是一条普通消息', 5000)
    }
}
</script>

<style scoped lang="scss"></style>
