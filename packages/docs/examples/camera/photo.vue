<template>
    <div>
        <div class="container">
            <kl-camera ref="cameraRef"></kl-camera>
        </div>
        <div class="container">
            <img v-if="imgSrc !== ''" :src="imgSrc" />
            <div v-else class="filler">
                <KlMediaImageLine />
            </div>
        </div>
        <div class="btns">
            <kl-button @click="handleOpenCamera">打开摄像头</kl-button>
            <kl-button @click="handleCloseCamera">关闭摄像头</kl-button>
            <kl-button @click="handleTakePhoto">拍一张照片</kl-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { KlCamera, KlMessage } from 'kunlun-design'

const cameraRef = ref<InstanceType<typeof KlCamera> | null>(null)
const imgSrc = ref('')

const handleOpenCamera = async () => {
    const [status, message] = await cameraRef.value.openCamera()
    status ? KlMessage.success(message) : KlMessage.error(message)
}

const handleCloseCamera = () => {
    const [status, message] = cameraRef.value.closeCamera()
    status ? KlMessage.success(message) : KlMessage.error(message)
}

const handleTakePhoto = () => {
    const [status, message] = cameraRef.value.takePhoto()
    status ? (imgSrc.value = message) : KlMessage.error(message)
}
</script>

<style lang="scss" scoped>
.container {
    display: inline-block;
    padding: 12px;
    background-color: #67c23a;
    border-radius: 10px;
    margin-bottom: 10px;

    .filler {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 100px;
        color: #999;
        width: 320px;
        height: 180px;
        background-color: #f0f9eb;
    }
}

.btns {
    margin-top: 15px;
}
</style>
