<template>
    <kl-checkbox-group v-model="value">
        <kl-checkbox value="Basketball"><KlSportBasketball /></kl-checkbox>
        <kl-checkbox value="Football"><KlSportFootball /></kl-checkbox>
        <kl-checkbox value="Tennis"><KlSportTennis /></kl-checkbox>
    </kl-checkbox-group>
    <div>value: {{ value }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref([])
</script>
