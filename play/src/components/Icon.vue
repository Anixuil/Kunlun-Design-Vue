<script lang="ts" setup>
import icons from '@kl-design/icons/icons.json'
</script>

<template>
    <Component v-for="icon in icons" :key="icon" :is="icon"></Component>
</template>
