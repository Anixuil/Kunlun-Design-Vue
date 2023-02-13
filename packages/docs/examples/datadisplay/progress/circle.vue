<template>
    <div class="kl-wrapper">
        <kl-progress :percentage="15" width="125" type="circle" />
        <kl-progress :percentage="100" width="125" type="circle" />
        <kl-progress :percentage="100" width="125" type="circle" status="success" />
        <kl-progress :percentage="100" width="125" type="circle" status="warning" />
        <kl-progress :percentage="100" width="125" type="circle" status="exception" />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.kl-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}
</style>
