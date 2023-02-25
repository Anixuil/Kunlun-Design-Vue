<template>
    <div>
        <h1>录制状态：{{ testRef?.recorderState }}</h1>
        <KlCamera ref="testRef" :width="600" :height="400" audio></KlCamera>
        <div class="btns">
            <button @click="testRef?.openCamera()">打开摄像头</button>
            <button @click="testRef?.closeCamera()">关闭摄像头</button>
            <button @click="handleTake">拍照</button>
            <button @click="testRef?.startRecord()">开始录制</button>
            <button @click="testRef?.pauseRecord()">暂停录制</button>
            <button @click="testRef?.resumeRecord()">继续录制</button>
            <button @click="handleStop">结束录制</button>
            <button @click="testRef?.downloadRecord()">下载录像</button>
        </div>
        <div class="show">
            <img :src="src" alt="" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { KlCamera } from '@kunlun-design/components'

const testRef = ref<InstanceType<typeof KlCamera> | null>(null)
const src = ref('')

const handleTake = () => {
    const base64 = testRef.value?.takePhoto()
    src.value = base64 as string
}

const handleStop = () => {
    const blob = testRef.value?.stopRecord()
    console.log(blob)
}
</script>

<style lang="scss" scoped>
.btns {
    margin: 10px 0;
    background-color: #aaa;

    * {
        margin: 0 10px;
    }
}

.show {
    width: 600px;
    height: 400px;
    background-color: pink;
}
</style>
