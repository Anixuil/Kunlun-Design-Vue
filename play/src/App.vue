<script setup lang="ts">
const data: string[] = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];


</script>


<template>
    <!-- list测试 -->

    <kl-list :dataSource="data"></kl-list>

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
    </div>
</template>

<style scoped lang="scss">
button {
    margin: 5px;
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
