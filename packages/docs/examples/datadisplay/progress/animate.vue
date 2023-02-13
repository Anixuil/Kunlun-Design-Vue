<template>
    <div>
        <kl-progress :percentage="50" indeterminate :duration="1" />
        <kl-progress :percentage="100" indeterminate :format="format" :duration="1.5" />
        <kl-progress :percentage="100" indeterminate status="success" :duration="2" />
        <kl-progress :percentage="100" indeterminate status="warning" :duration="3" />
        <kl-progress :percentage="100" indeterminate status="exception" :duration="4" />
    </div>
</template>

<script setup lang="ts">
const format = (percentage: Number) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style scoped></style>
