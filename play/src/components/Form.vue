<template>
    <h1>Form</h1>
    <kl-form :model="{}">
        <kl-input placeholder="请输入账号"></kl-input>
        <kl-input type="password" placeholder="请输入密码"></kl-input>
        <kl-input disabled placeholder="禁用输入框" />
    </kl-form>
</template>

<script setup lang="ts">
import { KlForm, KlInput } from 'kunlun-design'
</script>

<style scoped></style>
