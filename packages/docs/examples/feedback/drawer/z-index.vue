<template>
    <div>
        <div class="box">z-index: 300</div>
        <kl-button @click="drawer299 = true">z-index: 299</kl-button>
        <kl-button @click="drawer301 = true">z-index: 301</kl-button>

        <kl-drawer v-model="drawer299" :z-index="299">
            <div>z-index: 300</div>
        </kl-drawer>
        <kl-drawer v-model="drawer301" :z-index="301">
            <div>z-index: 302</div>
        </kl-drawer>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const drawer299 = ref(false)
const drawer301 = ref(false)
</script>

<style lang="scss" scoped>
.box {
    position: relative;
    box-sizing: border-box;
    width: 120px;
    height: 120px;
    margin: 10px;
    padding: 10px;
    background-color: #67c23a;
    color: #fff;
    z-index: 300;
}
</style>
