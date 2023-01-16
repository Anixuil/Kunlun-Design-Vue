<script setup lang="ts"></script>

<template>
    <kl-button plain>button</kl-button>
    <kl-button type="primary">primary</kl-button>
    <kl-button type="default">default</kl-button>
    <kl-button type="success">success</kl-button>
    <kl-button type="info">info</kl-button>
    <kl-button type="warning">warning</kl-button>
    <kl-button type="danger">danger</kl-button>
    <br />
    <kl-button type="primary" size="mini">primary</kl-button>
    <kl-button type="default" size="small">default</kl-button>
    <kl-button type="success" size="normal">success</kl-button>
    <kl-button type="info" size="large">info</kl-button>
    <kl-button type="warning" size="xlarge" round>warning</kl-button>
    <kl-button type="danger" plain circle>danger</kl-button>
</template>

<style scoped lang="scss">
button {
    margin: 10px;
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
