<template>
    <kl-radio-group v-model="value">
        <kl-radio value="Basketball"><KlSportBasketball /></kl-radio>
        <kl-radio value="Football"><KlSportFootball /></kl-radio>
        <kl-radio value="Tennis"><KlSportTennis /></kl-radio>
    </kl-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
