<template>
    <div>
        <kl-button @click="handleClick(0)" plain>Message</kl-button>
        <kl-button @click="handleClick(1)" plain>Message Scroll</kl-button>
        <kl-button @click="handleClick(2)" plain>Message Scroll Close</kl-button>
    </div>
</template>

<script setup lang="ts">
import { KlMessage } from '@kunlun-design/components'
const handleClick = (type: number) => {
    switch (type) {
        case 0:
            KlMessage({
                content:
                    'If the length is insufficient, Message will automatically scroll the actual length of the text.',
                duration: 5000
            })
            break
        case 1:
            KlMessage({
                content:
                    'If the length is insufficient, Message will automatically scroll the actual length of the text.',
                scroll: true,
                duration: 5000
            })
            break
        case 2:
            KlMessage.text(
                'If the length is insufficient, Message will automatically scroll the actual length of the text.',
                5000,
                true,
                true
            )
            break
    }
}
</script>

<style scoped>
button {
    margin-bottom: 20px;
}
</style>
