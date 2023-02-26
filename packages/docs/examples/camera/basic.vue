<template>
    <div>
        <div class="container">
            <kl-camera ref="cameraRef"></kl-camera>
        </div>
        <div class="btns">
            <kl-button @click="handleOpenCamera">开启摄像头</kl-button>
            <kl-button @click="handleCloseCamera">关闭摄像头</kl-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { KlCamera, KlMessage } from 'kunlun-design'

const cameraRef = ref<InstanceType<typeof KlCamera> | null>(null)

const handleOpenCamera = async () => {
    const [status, message] = await cameraRef.value.openCamera()
    status ? KlMessage.success(message) : KlMessage.error(message)
}

const handleCloseCamera = () => {
    const [status, message] = cameraRef.value.closeCamera()
    status ? KlMessage.success(message) : KlMessage.error(message)
}
</script>

<style lang="scss" scoped>
.container {
    display: inline-block;
    padding: 12px;
    background-color: #67c23a;
    border-radius: 10px;
}

.btns {
    margin-top: 15px;
}
</style>
