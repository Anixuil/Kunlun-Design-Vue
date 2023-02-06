<template>
    <div>
        <h2>message消息提示框</h2>
        <kl-button type="success" @click="handleClick(0)">成功</kl-button>
        <kl-button type="warning" @click="handleClick(1)">警告</kl-button>
        <kl-button type="danger" @click="handleClick(2)">错误</kl-button>
        <kl-button type="info" @click="handleClick(3)">信息</kl-button>
        <h2>message文字自动滚动</h2>
        <kl-button type="success" @click="handleClick(4)">成功</kl-button>
    </div>
</template>

<script setup lang="ts">
import { KlButton, KlMessage } from 'kunlun-design'
KlMessage({ type: 'success', content: '这是api调用', duration: 5000, close: true })

const handleClick = (type: number) => {
    switch (type) {
        case 0:
            KlMessage.success(
                '这是一条成功消息这是一条成功消息这是一条成功消息这是一条成功消息这是一条成功消息这是一条成功消息这是一条成功消息这是一条成功消息',
                5000,
                true
            )
            break
        case 1:
            KlMessage.warning('这是一条警告消息', 5000, true)
            break
        case 2:
            KlMessage.error('这是一条错误消息', 5000, true)
            break
        case 3:
            KlMessage.text('这是一条普通消息', 5000, true)
            break
        case 4:
            KlMessage.success(
                '这是一条成功消息这是一条成功消息这是一条成功消息这是一条成功消息这是一条成功消息这是一条成功消息这是一条成功消息这是一条成功消息',
                5000,
                false,
                true
            )
            break
    }
}
</script>

<style scoped lang="scss"></style>
