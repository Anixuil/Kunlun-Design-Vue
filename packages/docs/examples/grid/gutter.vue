<template>
    <div class="main">
        <kl-row :gutter="16">
            <kl-col :span="6" class="color1">col-6</kl-col>
            <kl-col :span="6" class="color2">col-6</kl-col>
            <kl-col :span="6" class="color3">col-6</kl-col>
            <kl-col :span="6" class="color4">col-6</kl-col>
        </kl-row>
        <hr />
        <kl-row :gutter="[16, 24]" :wrap="true">
            <kl-col :span="6" class="color1">col-6</kl-col>
            <kl-col :span="6" class="color2">col-6</kl-col>
            <kl-col :span="6" class="color3">col-6</kl-col>
            <kl-col :span="6" class="color4">col-6</kl-col>
            <kl-col :span="6" class="color1">col-6</kl-col>
            <kl-col :span="6" class="color2">col-6</kl-col>
            <kl-col :span="6" class="color3">col-6</kl-col>
            <kl-col :span="6" class="color4">col-6</kl-col>
        </kl-row>
    </div>
</template>
<script lang="ts"></script>
<style></style>
