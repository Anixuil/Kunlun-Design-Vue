<template>
    <div>
        <kl-button @click="handleClick()" plain>Show Message</kl-button>
        <kl-button @click="vNodeClick()" plain>VNode</kl-button>
    </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { KlMessage } from '@kunlun-design/components'
const handleClick = () => {
    KlMessage({ content: 'This is a message' })
}
const vNodeClick = () => {
    KlMessage({
        content: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color:teal' }, ' VNode')
        ])
    })
}
</script>

<style scoped>
button {
    margin-bottom: 20px;
}
</style>
