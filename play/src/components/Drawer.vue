<template>
    <div class="test">
        <div class="btn">
            <KlButton @click="handleSwitch">{{ drawer ? '关闭' : '打开' }}</KlButton>
        </div>

        <KlDrawer
            v-model="drawer"
            :lock-scroll="true"
            :modal="true"
            :z-index="3000"
            :close-esc="false"
        >
            <h1>身体</h1>
        </KlDrawer>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { KlDrawer, KlButton } from '@kunlun-design/components'

const drawer = ref<boolean>(true)

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
</style>
