<template>
    <div>
        <kl-progress :percentage="100" :storke-width="26" :text-inside="true" />
        <kl-progress :percentage="100" :storke-width="24" :text-inside="true" status="success" />
        <kl-progress :percentage="100" :storke-width="22" :text-inside="true" status="warning" />
        <kl-progress :percentage="100" :storke-width="20" :text-inside="true" status="exception" />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
