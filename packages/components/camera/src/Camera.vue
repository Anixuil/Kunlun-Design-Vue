<template>
    <div class="kl-camera">
        <video ref="videoRef" muted />
        <canvas ref="canvasRef" style="display: none" />
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, onUnmounted } from 'vue'
/**
 * --------------------类型定义--------------------
 */
export type CameraFNResult = [status: boolean, message: string]

/**
 * --------------------组件通信--------------------
 */
export interface IPropsType {
    width?: number
    height?: number
    backgroundColor?: string
    audio?: boolean
}

export interface IEmitsType {
    (e: 'startRecord'): void
    (e: 'pauseRecord'): void
    (e: 'resumeRecord'): void
    (e: 'stopRecord'): void
    (e: 'errorRecord'): void
    (e: 'progressRecord', event: BlobEvent): void
}

const props = withDefaults(defineProps<IPropsType>(), {
    width: 320,
    height: 180,
    backgroundColor: '#000',
    audio: false
})

const emit = defineEmits<IEmitsType>()

/**
 * --------------------组件状态--------------------
 */
// video标签的模板
const videoRef = ref<HTMLVideoElement | null>(null)
// canvas标签的模板
const canvasRef = ref<HTMLCanvasElement | null>(null)
// 组件宽高
const cwidth = computed(() => props.width + 'px')
const cheight = computed(() => props.height + 'px')
// 媒体流
let mediaStream: MediaStream
// 媒体录制
let mediaRecorder: MediaRecorder
let chunks: Blob[]
// 录制状态
const recorderState = ref<'recording' | 'paused' | 'inactive'>('inactive')

/**
 * --------------------功能函数--------------------
 */
// 设置video宽高
const setCtSize = () => {
    const videoEl = videoRef.value
    const canvasEl = canvasRef.value
    if (videoEl && canvasEl) {
        videoEl.setAttribute('width', props.width + 'px')
        videoEl.setAttribute('height', props.height + 'px')
        canvasEl.setAttribute('width', props.width + 'px')
        canvasEl.setAttribute('height', props.height + 'px')
    }
}

// 检测摄像头是否处于开启状态
const cameraIsOpen = () => {
    return mediaStream && mediaStream.active === true
}

// 开启摄像头
const openCamera = async (): Promise<CameraFNResult> => {
    const videoEl = videoRef.value
    if (!videoEl) return [false, '未发现video节点']
    if (cameraIsOpen()) return [false, '摄像头已开启，请勿重复操作']
    // 获取媒体流
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({
            video: { width: props.width, height: props.height },
            audio: props.audio
        })
        videoEl.srcObject = mediaStream
        videoEl.play()
        return [true, '摄像头开启成功']
    } catch (error) {
        console.error(error)
        return [false, '摄像头开启失败']
    }
}

// 关闭摄像头
const closeCamera = (): CameraFNResult => {
    if (!mediaStream) return [false, '摄像头未初始化']
    if (mediaStream && mediaStream.active === false) return [false, '摄像头已关闭，请勿重复操作']
    const tracks = mediaStream.getTracks() as MediaStreamTrack[]
    if (props.audio) {
        tracks[1].stop()
    }
    tracks[0].stop()
    return [true, '摄像头关闭成功']
}

// 拍照
const takePhoto = (): CameraFNResult => {
    if (!cameraIsOpen()) return [false, '摄像头未开启']
    const canvasEl = canvasRef.value
    const videoEl = videoRef.value
    if (!canvasEl || !videoEl) return [false, '未发现video或canvas节点']
    const context = canvasEl.getContext('2d') as CanvasRenderingContext2D
    context.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height)
    return [true, canvasEl.toDataURL()]
}

// 开始录制
const startRecord = (): CameraFNResult => {
    if (!cameraIsOpen()) return [false, '摄像头未开启']
    mediaRecorder = new MediaRecorder(mediaStream, {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
        mimeType: 'video/webm'
    })
    chunks = []
    mediaRecorder.start(100)

    mediaRecorder.addEventListener('dataavailable', _dataavailable)
    mediaRecorder.addEventListener('start', _start)
    mediaRecorder.addEventListener('pause', _pause)
    mediaRecorder.addEventListener('resume', _resume)
    mediaRecorder.addEventListener('stop', _stop)
    mediaRecorder.addEventListener('error', _error)

    return [true, '开始录制']
}

// 暂停录制
const pauseRecord = (): CameraFNResult => {
    if (!cameraIsOpen()) return [false, '摄像头未开启']
    if (!mediaRecorder || recorderState.value === 'inactive')
        return [false, '录制未开始，请先开始录制']
    if (recorderState.value === 'paused') return [false, '目前为暂停状态，请勿重复操作']
    mediaRecorder.pause()
    return [true, '暂停录制']
}

// 继续录制
const resumeRecord = (): CameraFNResult => {
    if (!cameraIsOpen()) return [false, '摄像头未开启']
    if (!mediaRecorder || recorderState.value === 'inactive')
        return [false, '录制未开始，请先开始录制']
    if (recorderState.value === 'recording') return [false, '正在录制，请勿重复操作']
    mediaRecorder.resume()
    return [true, '继续录制']
}

// 结束录制
const stopRecord = () => {
    if (!cameraIsOpen()) return [false, '摄像头未开启']
    if (!mediaRecorder || recorderState.value === 'inactive')
        return [false, '录制未开始，请先开始录制']
    mediaRecorder.stop()
    const blob = new Blob(chunks, { type: 'video/webm' })
    return [true, blob]
}

// 改变录制状态
const changeState = () => {
    recorderState.value = mediaRecorder.state
}

/**
 * 录制的事件监听函数
 */
const _dataavailable = (event: BlobEvent) => {
    chunks.push(event.data)
    emit('progressRecord', event)
}
// 开始录制
const _start = () => {
    changeState()
    emit('startRecord')
}
// 暂停录制
const _pause = () => {
    changeState()
    emit('pauseRecord')
}
// 继续录制
const _resume = () => {
    changeState()
    emit('resumeRecord')
}
// 结束录制
const _stop = () => {
    changeState()
    emit('stopRecord')
    mediaRecorder.removeEventListener('dataavailable', _dataavailable)
    mediaRecorder.removeEventListener('start', _start)
    mediaRecorder.removeEventListener('pause', _pause)
    mediaRecorder.removeEventListener('resume', _resume)
    mediaRecorder.removeEventListener('stop', _stop)
    mediaRecorder.removeEventListener('error', _error)
}
// 录制错误
const _error = () => {
    changeState()
    emit('errorRecord')
}
/**
 * --------------------生命周期--------------------
 */
onMounted(() => {
    setCtSize()
})

onUnmounted(() => {
    if (cameraIsOpen()) {
        closeCamera()
    }
})

// 暴露
defineExpose({
    openCamera,
    closeCamera,
    takePhoto,
    startRecord,
    pauseRecord,
    resumeRecord,
    stopRecord,
    recorderState
})

defineOptions({
    name: 'KlCamera'
})
</script>

<style lang="scss" scoped>
.kl-camera {
    width: v-bind(cwidth);
    height: v-bind(cheight);
    font-size: 0;
    display: inline-block;
    background-color: v-bind(backgroundColor);
}
</style>
