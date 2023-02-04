<template>
    <div class="kl-4">
        <kl-button type="success" @click="handleClick(0)" plain>Message Success</kl-button>
        <kl-button type="warning" @click="handleClick(1)" plain>Message Warning</kl-button>
        <kl-button type="danger" @click="handleClick(2)" plain>Message error</kl-button>
        <kl-button type="info" @click="handleClick(3)" plain>Message info</kl-button>
    </div>
</template>

<script setup lang="ts">
import { KlMessage, Message } from '@kunlun-design/components'
const handleClick = (type: number) => {
    switch (type) {
        case 0:
            Message.success('This is a success message', 5000)
            break
        case 1:
            KlMessage({ type: 'warning', text: 'This is a warn message', duration: 5000 })
            break
        case 2:
            Message.error('This is a error message', 5000)
            break
        case 3:
            Message.text('This is a normal message', 5000)
    }
}
</script>

<style scoped lang="scss">
.kl-4 {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    & > button {
        margin-bottom: 10px;
    }
}
</style>
