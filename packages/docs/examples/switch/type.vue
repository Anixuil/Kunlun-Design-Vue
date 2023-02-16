<template>
    <h3>value:{{ value }}</h3>
    <kl-switch
        v-model="value"
        activeText="Yasuo"
        inactiveText="The Unforgotten"
        activeValue="Yasuo"
        inactiveValue="The Unforgotten"
    ></kl-switch>
    <hr />
    <h3>value:{{ value1 }}</h3>
    <kl-switch
        v-model="value1"
        activeText="111"
        inactiveText="999"
        activeValue="111"
        inactiveValue="999"
    ></kl-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
const value1 = ref()
</script>

<style lang="scss" scoped>
* {
    display: block;
}
</style>
