<template>
    <div>
        <kl-button @click="lock = true">锁定滚动条</kl-button>
        <kl-button @click="unlock = true">不锁定滚动条</kl-button>

        <kl-drawer v-model="lock" :lock-scroll="true">
            <div>锁定滚动条</div>
        </kl-drawer>
        <kl-drawer v-model="unlock" :lock-scroll="false">
            <div>不锁定滚动条</div>
        </kl-drawer>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const lock = ref(false)
const unlock = ref(false)
</script>

<style lang="scss" scoped></style>
