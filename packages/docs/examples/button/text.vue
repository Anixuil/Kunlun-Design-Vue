<template>
    <div>
        <kl-button v-for="item in link_button" :key="item.text" :type="item.type" text>{{
            item.text
        }}</kl-button
        ><br />
        <kl-button v-for="item in link_button" :key="item.text" :type="item.type" text bg>{{
            item.text
        }}</kl-button
        ><br />
        <kl-button
            v-for="item in link_button"
            :key="item.text"
            :type="item.type"
            link
            text
            bg
            disabled
            >{{ item.text }}</kl-button
        >
    </div>
</template>

<script setup lang="ts">
const link_button = [
    { type: '', text: 'default' },
    { type: 'primary', text: 'primary' },
    { type: 'success', text: 'success' },
    { type: 'danger', text: 'danger' },
    { type: 'info', text: 'info' }
] as const
</script>

<style scoped>
button {
    margin: 5px;
}
</style>
