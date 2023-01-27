<template>
    <div class="kl-4">
        <kl-button disabled>Default</kl-button>
        <kl-button type="primary" disabled>Primary</kl-button>
        <kl-button type="success" disabled>Success</kl-button>
        <kl-button type="info" disabled>Info</kl-button>
        <kl-button type="warning" disabled>Warning</kl-button>
        <kl-button type="danger" disabled>Danger</kl-button>
    </div>
    <div class="kl-4">
        <kl-button plain disabled>plain</kl-button>
        <kl-button type="primary" plain disabled>Primary</kl-button>
        <kl-button type="success" plain disabled>Success</kl-button>
        <kl-button type="info" plain disabled>Info</kl-button>
        <kl-button type="warning" plain disabled>Warning</kl-button>
        <kl-button type="danger" plain disabled>Danger</kl-button>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.kl-4 {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    & > button {
        margin-bottom: 10px;
    }
}
</style>
