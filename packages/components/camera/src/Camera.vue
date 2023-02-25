<template>
    <div class="kl-camera">
        <video ref="videoRef" muted />
        <canvas ref="canvasRef" style="display: none" />
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, onUnmounted } from 'vue'
import { KlMessage } from '@kunlun-design/components'
import { uid } from './utils'
/**
 * --------------------组件通信--------------------
 */
export interface IPropsType {
    width?: number
    height?: number
    backgroundColor?: string
    audio?: boolean
}

interface IEmitsType {
    (e: 'onStartRecord'): void
    (e: 'onPauseRecord'): void
    (e: 'onResumeRecord'): void
    (e: 'onStopRecord'): void
    (e: 'onErrorRecord'): void
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
const chunks: Blob[] = []
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

// 开启摄像头
const openCamera = async () => {
    const videoEl = videoRef.value
    if (!videoEl) return KlMessage.error('未发现video节点')
    // 获取媒体流
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({
            video: { width: props.width, height: props.height },
            audio: props.audio
        })
        console.log(mediaStream)
        videoEl.srcObject = mediaStream
        videoEl.play()
    } catch (error) {
        KlMessage.error('摄像头开启失败')
        console.error(error)
    }
}

// 关闭摄像头
const closeCamera = () => {
    const tracks = mediaStream.getTracks() as MediaStreamTrack[]
    if (props.audio) {
        tracks[1].stop()
    }
    tracks[0].stop()
}

// 拍照
const takePhoto = (): string => {
    const canvasEl = canvasRef.value
    const videoEl = videoRef.value
    if (!canvasEl || !videoEl) return KlMessage.error('未发现canvas或video节点')
    const context = canvasEl.getContext('2d') as CanvasRenderingContext2D
    context.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height)
    return canvasEl.toDataURL()
}

// 开始录制
const startRecord = () => {
    mediaRecorder = new MediaRecorder(mediaStream, {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
        mimeType: 'video/webm'
    })
    mediaRecorder.start(100)

    mediaRecorder.addEventListener('dataavailable', _dataavailable)
    mediaRecorder.addEventListener('start', _start)
    mediaRecorder.addEventListener('pause', _pause)
    mediaRecorder.addEventListener('resume', _resume)
    mediaRecorder.addEventListener('stop', _stop)
    mediaRecorder.addEventListener('error', _error)
}

// 暂停录制
const pauseRecord = () => {
    mediaRecorder.pause()
}

// 继续录制
const resumeRecord = () => {
    mediaRecorder.resume()
}

// 结束录制
const stopRecord = () => {
    mediaRecorder.stop()
    const blob = new Blob(chunks, { type: 'video/webm' })
    return blob
}

// 下载录像
const downloadRecord = () => {
    const blob = new Blob(chunks, { type: 'video/webm' })
    const url = URL.createObjectURL(blob)
    const aEl = document.createElement('a')
    aEl.href = url
    aEl.download = `${uid()}.webm`
    aEl.click()
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
}
// 开始录制
const _start = () => {
    changeState()
    emit('onStartRecord')
}
// 暂停录制
const _pause = () => {
    changeState()
    emit('onPauseRecord')
}
// 继续录制
const _resume = () => {
    changeState()
    emit('onResumeRecord')
}
// 结束录制
const _stop = () => {
    changeState()
    emit('onStopRecord')
}
// 录制错误
const _error = () => {
    changeState()
    emit('onErrorRecord')
}

/**
 * --------------------事件处理--------------------
 */
/**
 * --------------------生命周期--------------------
 */
onMounted(() => {
    setCtSize()
})

onUnmounted(() => {
    mediaRecorder.removeEventListener('dataavailable', _dataavailable)
    mediaRecorder.removeEventListener('start', _start)
    mediaRecorder.removeEventListener('pause', _pause)
    mediaRecorder.removeEventListener('resume', _resume)
    mediaRecorder.removeEventListener('stop', _stop)
    mediaRecorder.removeEventListener('error', _error)
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
    downloadRecord,
    recorderState
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
