<template>
    <h1>Form</h1>
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
            <kl-form-item label="disabled">
                <kl-input disabled placeholder="禁用输入框" />
            </kl-form-item>
            <kl-form-item label="checkbox">
                <kl-checkbox v-model="form.isVIP" label="VIP" />
            </kl-form-item>
            <kl-form-item label="switch">
                <kl-switch v-model="form.isON" :title="form.isON"></kl-switch>
            </kl-form-item>
            <kl-form-item label="switch-颜色设置">
                <kl-switch v-model="form.isON" activeColor="red" inactiveColor="blue"></kl-switch>
            </kl-form-item>
            <kl-form-item label="switch-value">
                <kl-switch v-model="form.switch" activeValue="red" inactiveValue="blue"></kl-switch>
            </kl-form-item>
            <kl-form-item label="switch-disabled">
                <kl-switch v-model="form.isON" disabled></kl-switch>
            </kl-form-item>
            <kl-form-item label="switch-small">
                <kl-switch
                    v-model="form.isON"
                    :title="form.isON"
                    active-text="开"
                    inactive-text="关"
                    size="small"
                ></kl-switch>
            </kl-form-item>
            <kl-form-item label="switch-large">
                <kl-switch
                    v-model="form.isON"
                    :title="form.isON"
                    activeText="开"
                    inactiveText="关"
                    size="large"
                ></kl-switch>
            </kl-form-item>
            <kl-form-item label="switch-text">
                <kl-switch
                    v-model="form.isON"
                    :title="form.isON"
                    activeText="开"
                    inactiveText="关"
                ></kl-switch>
            </kl-form-item>
            <kl-form-item label="switch-icon">
                <kl-switch
                    v-model="form.isON"
                    activeIcon="KlOtherCorrect"
                    inactiveIcon="KlOtherError"
                ></kl-switch>
            </kl-form-item>
            <kl-form-item label="select">
                <kl-select v-model="form.selectData">
                    <kl-option value="胡桃">HuTao</kl-option>
                    <kl-option value="夜兰">YeLan</kl-option>
                    <kl-option value="七七">QiQi</kl-option>
                </kl-select>
            </kl-form-item>
            <kl-form-item label="select">
                <kl-select v-model="form.selectData" size="large">
                    <kl-option value="胡桃" disabled>HuTao</kl-option>
                    <kl-option value="夜兰">YeLan</kl-option>
                    <kl-option value="七七">QiQi</kl-option>
                </kl-select>
            </kl-form-item>
            <kl-form-item label="select">
                <kl-select v-model="form.selectData" size="small" clearable>
                    <kl-option value="胡桃">HuTao</kl-option>
                    <kl-option value="夜兰">YeLan</kl-option>
                    <kl-option value="七七">QiQi</kl-option>
                </kl-select>
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
    KlSwitch,
    KlSelect,
    KlOption
} from 'kunlun-design'
import { reactive } from 'vue'

const form = reactive({
    name: '',
    password: '',
    isVIP: true,
    isON: true,
    switch: 'red',
    selectData: '',
    text: ''
})

const model = reactive({
    model: '',
    options: JSON.stringify([
        {
            valueKey: '01',
            labelKey: '选项1',
            dis: '说明1',
            disA: '说明2'
        },
        {
            valueKey: '02',
            labelKey: '选项2',
            dis: '说明3',
            disA: '说明4'
        }
    ]),
    urlParams: JSON.stringify({
        key1: '01',
        key2: 'Y'
    }),
    optionKeys: JSON.stringify({
        value: 'valueKey',
        label: 'labelKey'
    }),
    showLabels: 'labelKey,dis,disA',
    disables: '02'
})

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
