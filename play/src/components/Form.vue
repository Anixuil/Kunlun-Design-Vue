<template>
    <h1>Form</h1>
    <div class="form">
        <kl-form
            :model="{
                labelWidth: '100px'
            }"
        >
            <kl-form-item label="username">
                <kl-input placeholder="请输入账号"></kl-input>
            </kl-form-item>
            <kl-form-item label="password">
                <kl-input type="password" placeholder="请输入密码"></kl-input>
            </kl-form-item>
            <kl-form-item label="disabled">
                <kl-input disabled placeholder="禁用输入框" />
            </kl-form-item>
        </kl-form>
    </div>
</template>

<script setup lang="ts">
import { KlForm, KlInput, KlFormItem } from 'kunlun-design'
</script>

<style scoped lang="scss">
.form {
    width: 500px;
    margin-left: 20px;
}
</style>
