<template>
    <div>
        <kl-button type="success" @click="handleClick(0)" plain>Message Success</kl-button>
        <kl-button type="warning" @click="handleClick(1)" plain>Message Warning</kl-button>
        <kl-button type="danger" @click="handleClick(2)" plain>Message error</kl-button>
        <kl-button type="info" @click="handleClick(3)" plain>Message info</kl-button>
    </div>
</template>

<script setup lang="ts">
import { KlMessage } from '@kunlun-design/components'
const handleClick = (type: number) => {
    switch (type) {
        case 0:
            KlMessage.success('This is a success message', 0, true)
            break
        case 1:
            KlMessage.warning('This is a warning message', 0, true)
            break
        case 2:
            KlMessage.error('This is a error message', 0, true)
            break
        case 3:
            KlMessage.text('This is a normal message', 0, true)
    }
}
</script>

<style scoped>
button {
    margin-bottom: 20px;
}
</style>
