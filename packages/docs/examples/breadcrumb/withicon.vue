<template>
    <kl-bread-crumb separator="/">
        <kl-bread-crumb-item>
            <KlSystemAdmin />
        </kl-bread-crumb-item>
        <kl-bread-crumb-item><a href="">Application Center</a></kl-bread-crumb-item>
        <kl-bread-crumb-item><a href="">Application List</a> </kl-bread-crumb-item>
        <kl-bread-crumb-item> An Application</kl-bread-crumb-item>
    </kl-bread-crumb>
</template>

<script setup lang="ts">
import { KlSystemAdmin } from '@kl-design/icons'
</script>

<style scoped lang="scss"></style>
