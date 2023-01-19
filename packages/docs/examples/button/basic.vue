<template>
    <div class="kl-4">
        <kl-button>Default</kl-button>
        <kl-button type="primary">Primary</kl-button>
        <kl-button type="success">Success</kl-button>
        <kl-button type="info">Info</kl-button>
        <kl-button type="warning">Warning</kl-button>
        <kl-button type="danger">Danger</kl-button>
    </div>
    <div class="kl-4">
        <kl-button plain>Default</kl-button>
        <kl-button type="primary" plain>Primary</kl-button>
        <kl-button type="success" plain>Success</kl-button>
        <kl-button type="info" plain>Info</kl-button>
        <kl-button type="warning" plain>Warning</kl-button>
        <kl-button type="danger" plain>Danger</kl-button>
    </div>
    <div class="kl-4">
        <kl-button round>Default</kl-button>
        <kl-button type="primary" round>Primary</kl-button>
        <kl-button type="success" round>Success</kl-button>
        <kl-button type="info" round>Info</kl-button>
        <kl-button type="warning" round>Warning</kl-button>
        <kl-button type="danger" round>Danger</kl-button>
    </div>
    <div class="kl-4">
        <kl-button circle>K</kl-button>
        <kl-button type="primary" circle>U</kl-button>
        <kl-button type="success" circle>N</kl-button>
        <kl-button type="info" circle>L</kl-button>
        <kl-button type="warning" circle>U</kl-button>
        <kl-button type="danger" circle>N</kl-button>
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
