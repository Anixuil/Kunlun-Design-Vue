<template>
    <div>
        <h1>录制状态：{{ testRef?.recorderState }}</h1>
        <KlCamera
            ref="testRef"
            :width="600"
            :height="400"
            audio
            @start-record="handleCV(1)"
            @pause-record="handleCV(2)"
            @resume-record="handleCV(3)"
            @stop-record="handleCV(4)"
            @error-record="handleCV(5)"
            @progress-record="handleProgress"
        ></KlCamera>
        <div class="btns">
            <button @click="testRef?.openCamera()">打开摄像头</button>
            <button @click="testRef?.closeCamera()">关闭摄像头</button>
            <button @click="handleTake">拍照</button>
            <button @click="testRef?.startRecord()">开始录制</button>
            <button @click="testRef?.pauseRecord()">暂停录制</button>
            <button @click="testRef?.resumeRecord()">继续录制</button>
            <button @click="handleStop">结束录制</button>
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
    const [status, base64] = testRef.value!.takePhoto()
    if (status) {
        src.value = base64
    }
}

const handleStop = () => {
    const [status, data] = testRef.value!.stopRecord()
    if (status) {
        console.log(data)
    }
}

const handleCV = (status: number) => {
    switch (status) {
        case 1:
            console.log('录制开始')
            break
        case 2:
            console.log('录制暂停')
            break
        case 3:
            console.log('录制继续')
            break
        case 4:
            console.log('录制结束')
            break
        default:
            console.log('录制错误')
    }
}

const handleProgress = (event: BlobEvent) => {
    console.log(event)
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
