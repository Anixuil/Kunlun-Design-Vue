<template>
    <div>
        <kl-button @click="rtl = true">right to left</kl-button>
        <kl-button @click="ltr = true">left to right</kl-button>
        <kl-button @click="ttb = true">top to bottom</kl-button>
        <kl-button @click="btt = true">bottom to top</kl-button>

        <kl-drawer v-model="rtl" direction="rtl">
            <div>right to left</div>
        </kl-drawer>
        <kl-drawer v-model="ltr" direction="ltr">
            <div>left to right</div>
        </kl-drawer>
        <kl-drawer v-model="ttb" direction="ttb">
            <div>top to bottom</div>
        </kl-drawer>
        <kl-drawer v-model="btt" direction="btt">
            <div>bottom to top</div>
        </kl-drawer>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const rtl = ref(false)
const ltr = ref(false)
const ttb = ref(false)
const btt = ref(false)
</script>

<style lang="scss" scoped></style>
