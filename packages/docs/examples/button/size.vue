<template>
    <div class="kl-4">
        <kl-button size="mini">Primary</kl-button>
        <kl-button size="small">Success</kl-button>
        <kl-button size="normal">Info</kl-button>
        <kl-button size="large">Warning</kl-button>
        <kl-button size="xlarge">Danger</kl-button>
    </div>
    <div class="kl-4">
        <kl-button round size="mini">mini</kl-button>
        <kl-button round size="small">small</kl-button>
        <kl-button round size="normal">normal</kl-button>
        <kl-button round size="large">large</kl-button>
        <kl-button round size="xlarge">xlarge</kl-button>
    </div>
    <div class="kl-4">
        <kl-button circle size="mini">√</kl-button>
        <kl-button circle size="small">√</kl-button>
        <kl-button circle size="normal">√</kl-button>
        <kl-button circle size="large">√</kl-button>
        <kl-button circle size="xlarge">√</kl-button>
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
