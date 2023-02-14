<template>
    <div>
        <kl-progress :percentage="50" />
        <kl-progress :percentage="100" :format="format" />
        <kl-progress :percentage="100" status="success" />
        <kl-progress :percentage="100" status="warning" />
        <kl-progress :percentage="50" status="exception" />
    </div>
</template>

<script setup lang="ts">
const format = (percentage: Number) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style scoped></style>
