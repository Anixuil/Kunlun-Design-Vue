<template>
    <div class="test">
        <h1>啦啦啦</h1>
        <h1>啦啦啦</h1>
        <h1>啦啦啦</h1>
        <h1>啦啦啦</h1>
        <div class="btn">
            <KlButton @click="handleSwitch">{{ drawer ? '关闭' : '打开' }}</KlButton>
        </div>

        <KlDrawer
            :model-value="drawer"
            @update:model-value="drawer = !drawer"
            :lock-scroll="true"
            :modal="true"
            :z-index="3000"
            :close-esc="false"
        >
            <div class="box1">啦啦啦啦啦啦啦啦啦啦啦啦</div>
            <div class="box2"></div>
            <div class="box3"></div>
        </KlDrawer>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { KlDrawer, KlButton } from '@kunlun-design/components'

const drawer = ref<boolean>(false)

const handleSwitch = () => {
    drawer.value = !drawer.value
}
</script>

<style lang="scss" scoped>
.test {
    height: 2000px;
}

.btn {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

:deep(.drawer) {
    background-color: pink;
}

.box1 {
    width: 200px;
    height: 200px;
    background-color: red;
}
.box2 {
    width: 100px;
    height: 100px;
    background-color: green;
}
.box3 {
    width: 50px;
    height: 50px;
    background-color: blue;
}
</style>
