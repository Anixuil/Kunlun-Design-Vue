<template>
    <div class="color-demo">
        <kl-qrcode link="https://juejin.cn/" dark-color="#3a7afe" light-color="#f3f3f3"></kl-qrcode>
        <kl-qrcode link="https://juejin.cn/" dark-color="#67c23a" light-color="#f3f3f3"></kl-qrcode>
        <kl-qrcode link="https://juejin.cn/" dark-color="#e6a23c" light-color="#f3f3f3"></kl-qrcode>
        <kl-qrcode link="https://juejin.cn/" dark-color="#f56c6c" light-color="#f3f3f3"></kl-qrcode>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.color-demo {
    display: flex;
    justify-content: space-between;
}
</style>
