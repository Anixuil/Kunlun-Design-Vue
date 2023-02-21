<template>
    <div class="main">
        <kl-timeline>
            <kl-timeline-item timestamp="2023/02/20" :dotsolid="true">solid node</kl-timeline-item>
            <kl-timeline-item timestamp="2023/02/21" dotsize="large"
                >Custom node dimensions</kl-timeline-item
            >
            <kl-timeline-item timestamp="2023/02/22" dotcolor="pink"
                >Custom node colors</kl-timeline-item
            >
            <kl-timeline-item timestamp="2023/02/23">
                <template #default>Custom node icons</template>
                <template #dot>
                    <KlMediaDiscFill />
                </template>
            </kl-timeline-item>
        </kl-timeline>
    </div>
</template>
<script setup lang="ts"></script>
<style></style>
