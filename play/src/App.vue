<script setup lang="ts">
import Button from './components/Button.vue'
import Form from './components/Form.vue'
import Switch from './components/Switch.vue'
</script>

<template>
    <Button></Button>
    <Form></Form>
    <Switch />
</template>

<style scoped lang="scss">
button {
    margin: 5px;
}

.kl-button.self-button {
    color: black;
    // background-color: black;
    border-color: black;

    &:hover {
        background-color: red;
        color: white;
        border-color: red;
    }

    &:visited {
        border-color: darkred;
        background-color: darkred;
    }

    &:link {
        border-color: darkred;
        background-color: darkred;
    }

    &:focus {
        border-color: red;
        background-color: red;
        color: white;
    }

    &:active {
        border-color: darkred;
        background-color: darkred;
    }
}

.test {
    padding: 5px 10px;
    background-color: skyblue;
    color: white;
    border-radius: 5px;
    transition: opacity 0.3s ease;

    &:hover,
    &:active {
        opacity: 0.6;
    }

    outline: none;
    cursor: pointer;
    border: none;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
</style>
