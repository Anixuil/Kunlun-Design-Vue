<template>
    <kl-form :model="form" labelWidth="120px">
        <kl-form-item label="username">
            <kl-input placeholder="请输入账号" v-model="form.name" clearable></kl-input>
        </kl-form-item>
        <kl-form-item label="password">
            <kl-input
                type="password"
                placeholder="请输入密码"
                v-model="form.password"
                showPassword
            ></kl-input>
        </kl-form-item>
        <kl-form-item>
            <kl-button type="primary" @click="login">login</kl-button>
            <kl-button>Cancel</kl-button>
        </kl-form-item>
    </kl-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
    name: '',
    password: ''
})

const login = () => {
    console.log(form)
}
</script>
