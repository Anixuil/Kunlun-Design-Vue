<template>
    <kl-input v-model="inputLarge" placeholder="Please input" size="large"></kl-input>
    <kl-input v-model="inputDefault" placeholder="Please input" size="default"></kl-input>
    <kl-input v-model="inputSmall" placeholder="Please input" size="small"></kl-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputLarge = ref('')
const inputDefault = ref('')
const inputSmall = ref('')
</script>

<style scoped>
* {
    margin-top: 5px;
}
</style>
