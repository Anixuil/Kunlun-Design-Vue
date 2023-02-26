<template>
    <div>
        <div class="container">
            <kl-camera ref="cameraRef" audio></kl-camera>
            <div :class="['rec', cameraRef?.recorderState]">REC</div>
        </div>
        <div class="container">
            <video ref="videoRef" style="width: 320px; height: 180px"></video>
        </div>
        <div class="btns">
            <kl-button @click="handleOpenCamera">开启摄像头</kl-button>
            <kl-button @click="handleCloseCamera">关闭摄像头</kl-button>
        </div>

        <div class="btns">
            <kl-button @click="handleRecordStart">开始录制</kl-button>
            <kl-button @click="handleRecordPause">暂停录制</kl-button>
            <kl-button @click="handleRecordResume">继续录制</kl-button>
            <kl-button @click="handleRecordStop">结束录制</kl-button>
            <kl-button @click="showRecord">查看录像</kl-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { KlCamera, KlMessage } from 'kunlun-design'
const cameraRef = ref<InstanceType<typeof KlCamera> | null>(null)
const videoRef = ref<HTMLVideoElement | null>(null)
let blob: Blob
// 开启摄像头
const handleOpenCamera = async () => {
    const [status, message] = await cameraRef.value.openCamera()
    status ? KlMessage.success(message) : KlMessage.error(message)
}
// 关闭摄像头
const handleCloseCamera = () => {
    const [status, message] = cameraRef.value.closeCamera()
    status ? KlMessage.success(message) : KlMessage.error(message)
}
// 开始录制
const handleRecordStart = () => {
    const [status, message] = cameraRef.value.startRecord()
    status ? KlMessage.success(message) : KlMessage.error(message)
}
// 暂停录制
const handleRecordPause = () => {
    const [status, message] = cameraRef.value.pauseRecord()
    status ? KlMessage.success(message) : KlMessage.error(message)
}
// 继续录制
const handleRecordResume = () => {
    const [status, message] = cameraRef.value.resumeRecord()
    status ? KlMessage.success(message) : KlMessage.error(message)
}
// 结束录制
const handleRecordStop = () => {
    const [status, message] = cameraRef.value.stopRecord()
    status ? (blob = message) : KlMessage.error(message)
}
// 查看录像
const showRecord = () => {
    if (!blob) return
    videoRef.value!.src = URL.createObjectURL(blob)
    videoRef.value!.play()
}
</script>

<style lang="scss" scoped>
.container {
    display: inline-block;
    padding: 12px;
    background-color: #67c23a;
    border-radius: 10px;
    margin-bottom: 10px;
    position: relative;

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

    .rec {
        position: absolute;
        right: 30px;
        top: 20px;
        color: red;
    }

    .inactive {
        display: none;
    }

    .paused {
        display: block;
    }

    @keyframes flicker {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0.4;
        }
    }
    .recording {
        animation: flicker 0.8s linear infinite alternate;
    }
}

.btns {
    margin-top: 15px;
}
</style>
