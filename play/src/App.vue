<script setup lang="ts">
import { KlButton } from 'kunlun-design'
</script>

<template>
    <div>
        <h2>基础按钮</h2>
        <kl-button>default</kl-button>
        <kl-button type="default">default</kl-button>
        <kl-button type="primary">primary</kl-button>
        <kl-button type="success">success</kl-button>
        <kl-button type="info">info</kl-button>
        <kl-button type="warning">warning</kl-button>
        <kl-button type="danger">danger</kl-button>
        <h2>单色按钮</h2>
        <kl-button plain>default</kl-button>
        <kl-button type="default" plain>default</kl-button>
        <kl-button type="primary" plain>primary</kl-button>
        <kl-button type="success" plain>success</kl-button>
        <kl-button type="info" plain>info</kl-button>
        <kl-button type="warning" plain>warning</kl-button>
        <kl-button type="danger" plain>danger</kl-button>
        <h2>圆角按钮</h2>
        <kl-button round>button</kl-button>
        <kl-button type="default" round>button</kl-button>
        <kl-button type="primary" round>button</kl-button>
        <kl-button type="success" round>button</kl-button>
        <kl-button type="info" round>button</kl-button>
        <kl-button type="warning" round>button</kl-button>
        <kl-button type="danger" round>button</kl-button>
        <h2>圆形按钮</h2>
        <kl-button circle>1</kl-button>
        <kl-button type="default" circle>1</kl-button>
        <kl-button type="primary" circle>1</kl-button>
        <kl-button type="success" circle>1</kl-button>
        <kl-button type="info" circle>1</kl-button>
        <kl-button type="warning" circle>1</kl-button>
        <kl-button type="danger" circle>1</kl-button>
        <h2>按钮尺寸</h2>
        <kl-button size="mini">button</kl-button>
        <kl-button size="small">button</kl-button>
        <kl-button size="normal">button</kl-button>
        <kl-button size="large">button</kl-button>
        <kl-button size="xlarge">button</kl-button>
        <h2>prop属性</h2>
        <kl-button color="red" textColor="white">button</kl-button>
        <h2>自定义样式按钮</h2>
        <kl-button class="self-button" plain>button</kl-button>
        <h2>禁用按钮</h2>
        <kl-button disabled type="primary" plain>button</kl-button>
        <kl-button type="primary">button</kl-button>
    </div>
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
