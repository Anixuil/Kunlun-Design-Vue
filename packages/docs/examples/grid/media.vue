<template>
    <div class="main">
        <h4>基础</h4>
        <kl-row>
            <kl-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" class="color1">col</kl-col>
            <kl-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4" class="color2">col</kl-col>
            <kl-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" class="color3">col</kl-col>
        </kl-row>
        <h4>offset</h4>
        <kl-row>
            <kl-col :xs="{ span: 2, offset: 22 }" :sm="4" :md="6" :lg="8" :xl="10" class="color1"
                >col1</kl-col
            >
            <kl-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4" class="color2">col2</kl-col>
            <kl-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" class="color3">col3</kl-col>
        </kl-row>
    </div>
</template>
<script lang="ts"></script>
<style></style>
