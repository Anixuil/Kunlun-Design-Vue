<template>
    <kl-input v-model="password" type="password" placeholder="Please input password"> </kl-input>
    <kl-input v-model="password1" type="password" placeholder="Please input password" showPassword>
    </kl-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const password = ref('')
const password1 = ref('')
</script>

<style scoped>
.kl-input {
    margin-top: 5px;
}
</style>
