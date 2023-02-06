<template>
    <h1>Form</h1>
    <div class="form">
        <kl-form
            :model="{
                labelWidth: '100px'
            }"
        >
            <kl-form-item label="username">
                <kl-input placeholder="请输入账号" v-model="form.name" :clearable="true"></kl-input>
            </kl-form-item>
            <kl-form-item label="password">
                <kl-input
                    type="password"
                    placeholder="请输入密码"
                    v-model="form.password"
                    showPassword
                ></kl-input>
            </kl-form-item>
            <kl-form-item label="disabled">
                <kl-input disabled placeholder="禁用输入框" />
            </kl-form-item>
            <kl-form-item>
                <kl-button type="primary" @click="onSubmit">submit</kl-button>
                <kl-button>Create</kl-button>
            </kl-form-item>
        </kl-form>
    </div>
</template>

<script setup lang="ts">
import { KlForm, KlInput, KlFormItem, KlButton } from 'kunlun-design'
import { reactive } from 'vue'

const form = reactive({
    name: '',
    password: ''
})

const onSubmit = () => {
    console.log(JSON.parse(JSON.stringify(form)))
}
</script>

<style scoped lang="scss">
.form {
    width: 500px;
    margin-left: 20px;
}
</style>
