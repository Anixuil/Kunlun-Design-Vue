<template>
    <div>
        <kl-button @click="pt20 = true">20%</kl-button>
        <kl-button @click="pt30 = true">30%</kl-button>
        <kl-button @click="px200 = true">200px</kl-button>
        <kl-button @click="px300 = true">300px</kl-button>

        <kl-drawer v-model="pt20" size="20%">
            <div>20%</div>
        </kl-drawer>
        <kl-drawer v-model="pt30" size="30%">
            <div>30%</div>
        </kl-drawer>
        <kl-drawer v-model="px200" :size="200">
            <div>200px</div>
        </kl-drawer>
        <kl-drawer v-model="px300" :size="300">
            <div>300px</div>
        </kl-drawer>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const pt20 = ref(false)
const pt30 = ref(false)
const px200 = ref(false)
const px300 = ref(false)
</script>

<style lang="scss" scoped></style>
