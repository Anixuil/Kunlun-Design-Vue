<template>
    <div class="main">
        <h4>水平间隔</h4>
        <kl-row :gutter="16">
            <kl-col :span="6" class="color1">col-6</kl-col>
            <kl-col :span="6" class="color2">col-6</kl-col>
            <kl-col :span="6" class="color3">col-6</kl-col>
            <kl-col :span="6" class="color4">col-6</kl-col>
        </kl-row>
        <h4>水平+垂直间隔</h4>
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
