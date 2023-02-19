<template>
    <h1>Form {{ form.radio }}</h1>
    <div class="form">
        <kl-form :model="form" labelWidth="120px">
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
            <kl-form-item label="checkbox">
                <kl-checkbox v-model="form.checkbox"><KlLogoQq /></kl-checkbox>
            </kl-form-item>
            <kl-form-item label="checkbox">
                <kl-checkbox-group v-model="form.checkbox1">
                    <kl-checkbox label="胡桃" value="胡桃" />
                    <kl-checkbox label="夜兰" value="夜兰" />
                </kl-checkbox-group>
            </kl-form-item>
            <kl-form-item label="switch">
                <kl-switch v-model="form.switch" :title="form.switch"></kl-switch>
            </kl-form-item>
            <kl-form-item label="select">
                <kl-select v-model="form.select">
                    <kl-option value="胡桃" icon="KlLogoQq"></kl-option>
                    <kl-option value="夜兰">YeLan</kl-option>
                    <kl-option value="七七">QiQi</kl-option>
                </kl-select>
            </kl-form-item>
            <kl-form-item label="radio">
                <kl-radio-group v-model="form.radio">
                    <kl-radio label="HuTao" value="胡桃"></kl-radio>
                    <kl-radio label="YeLan" value="夜兰"></kl-radio>
                    <kl-radio label="QiQi" value="七七"></kl-radio>
                </kl-radio-group>
            </kl-form-item>
            <kl-form-item label="textarea">
                <kl-input
                    placeholder="请输入文本"
                    v-model="form.text"
                    :clearable="true"
                    type="textarea"
                    :rows="4"
                ></kl-input>
            </kl-form-item>
            <kl-form-item>
                <kl-button type="primary" @click="onSubmit">submit</kl-button>
                <kl-button>Create</kl-button>
            </kl-form-item>
        </kl-form>
    </div>
</template>

<script setup lang="ts">
import {
    KlForm,
    KlInput,
    KlFormItem,
    KlButton,
    KlCheckbox,
    KlCheckboxGroup,
    KlSwitch,
    KlSelect,
    KlOption,
    KlRadio,
    KlRadioGroup
} from 'kunlun-design'
import { reactive } from 'vue'

const form = reactive({
    name: '',
    password: '',
    checkbox: true,
    checkbox1: [],
    switch: true,
    select: '',
    radio: '',
    text: '',
    region: ''
})

const change = (val: any) => {
    console.log(val)
}

const clear = () => {
    console.log('清除成功')
}
const onSubmit = () => {
    console.log(JSON.parse(JSON.stringify(form)))
}
</script>

<style scoped lang="scss">
.form {
    width: 600px;
    margin-left: 20px;
}
</style>
