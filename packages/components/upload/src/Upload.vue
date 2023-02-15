<template>
    <div class="upload">
        <input
            ref="inputRef"
            type="file"
            style="display: none"
            @change="handleInputChange"
            :multiple="multiple"
        />
        <div
            :class="['upload-trigger', { dragging: dragging }]"
            @click="handleTgClick"
            @dragenter="handleTgDragEnter"
            @dragover.prevent="handleTgDragOver"
            @dragleave="handleTgDragLeave"
            @drop.prevent="handleTgDrop"
        >
            <slot name="trigger" :dragging="dragging"></slot>
        </div>
        <!-- 提示 -->
        <slot name="tip"></slot>
        <!-- 文件列表 -->
        <UploadList v-if="showFileList" :files="files" @remove="handleRemoveFile"></UploadList>
    </div>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue'
import { request, uid } from './utils'
import type { FileItem, requestConfig } from './utils/type'
import UploadList from './cpns/UploadList.vue'
/**
 * --------------------类型定义--------------------
 */
export interface IPropsType {
    files: FileItem[]
    name?: string
    action: string
    method?: string
    headers?: Record<string, string>
    limit?: number
    multiple?: boolean
    showFileList?: boolean
    data?: Record<string, any>
    drag?: boolean
    onExceed?: (files: FileItem[], uploadFiles: FileItem[]) => void
    onChange?: (uploadFile: FileItem, uploadFiles: FileItem[]) => void
    onBeforeUpload?: (uploadFile: FileItem) => boolean
    onPreview?: (file: FileItem) => void
    onRemove?: (file: FileItem, files: FileItem[]) => void
    onBeforeRemove?: (file: FileItem, files: FileItem[]) => boolean
    onSuccess?: (response: any, uploadFile: FileItem, uploadFiles: FileItem[]) => void
    onError?: (error: Error, uploadFile: FileItem, uploadFiles: FileItem[]) => void
    onProgress?: (percent: number, uploadFile: FileItem, uploadFiles: FileItem[]) => void
}

/**
 * --------------------组件通信--------------------
 */
const props = withDefaults(defineProps<IPropsType>(), {
    name: 'file',
    limit: 1,
    multiple: false,
    method: 'post',
    showFileList: true,
    drag: false
})
const emit = defineEmits<{ (e: 'update:files', files: FileItem[]): void }>()
// 预览钩子
provide<((file: FileItem) => void) | undefined>('onPreview', props.onPreview)
// 移除前
provide<((file: FileItem, files: FileItem[]) => boolean) | undefined>(
    'onBeforeRemove',
    props.onBeforeRemove
)
// 移除后
provide<((file: FileItem, files: FileItem[]) => void) | undefined>('onRemove', props.onRemove)

/**
 * --------------------组件状态--------------------
 */
// input的dom元素
const inputRef = ref<HTMLInputElement | null>(null)
// 是否处于drag状态
const dragging = ref<boolean>(false)
/**
 * --------------------功能函数--------------------
 */
// 格式化文件
const formatFile = (rawFile: File) => {
    const file: FileItem = {
        name: rawFile.name,
        type: rawFile.type,
        size: rawFile.size,
        percent: 0,
        id: uid(),
        status: 'ready',
        rawFile
    }
    return file
}

// 初始化上传
const initUpload = (rawFiles: File[]) => {
    // 格式化文件
    const uploadFiles = rawFiles.map(rawFile => {
        const file = formatFile(rawFile)
        return file
    })

    // 检测文件数量是否超出
    const length = uploadFiles.length + props.files.length
    if (props.limit < length && props.onExceed) {
        return props.onExceed(props.files, uploadFiles)
    }

    // 上传文件
    upload(uploadFiles)
}

// 上传文件
const upload = (uploadFiles: FileItem[]) => {
    const newFiles = [...props.files, ...uploadFiles]

    // 开始上传文件
    uploadFiles.forEach(uploadFile => {
        // onBeforeUpload钩子
        if (props.onBeforeUpload && !props.onBeforeUpload(uploadFile)) return
        // 将状态更改为上传中
        uploadFile.status = 'uploading'
        updateFiles(newFiles)
        if (props.onChange) {
            props.onChange(uploadFile, uploadFiles)
        }
        const config: requestConfig = {
            url: props.action,
            name: props.name,
            file: uploadFile.rawFile,
            method: props.method,
            data: props.data,
            headers: props.headers,
            onSuccess: handleSuccess(uploadFile, uploadFiles),
            onError: handleError(uploadFile, uploadFiles),
            onProgress: handleProgress(uploadFile, uploadFiles)
        }
        const xhr = request(config)
        if (xhr instanceof Promise) {
            xhr.then(config.onSuccess, config.onError)
        }
    })
}

// 清除input的值，防止不能重复上传文件
const clearFileInput = () => {
    if (inputRef.value) {
        inputRef.value.value = ''
    }
}

// 更新files数据
const updateFiles = (newFiles: FileItem[]) => {
    emit('update:files', newFiles)
}

/**
 * --------------------事件处理--------------------
 */
// 触发文件选择
const handleTgClick = () => {
    inputRef.value?.click()
}
// 文件改变事件
const handleInputChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    const rawFiles = [...(target.files as FileList)]
    initUpload(rawFiles)
}
// 上传文件成功时
const handleSuccess = (uploadFile: FileItem, uploadFiles: FileItem[]) => {
    return (response: any) => {
        // 将状态更改成功
        const id = uploadFile.id
        const newFiles = props.files.map(file => {
            if (id === file.id) {
                file.status = 'success'
            }
            return file
        })
        updateFiles(newFiles)

        // 清除input值
        clearFileInput()

        if (props.onChange) {
            props.onChange(uploadFile, uploadFiles)
        }
        if (props.onSuccess) {
            props.onSuccess(response, uploadFile, uploadFiles)
        }
    }
}
// 上传文件失败时
const handleError = (uploadFile: FileItem, uploadFiles: FileItem[]) => {
    return (error: Error) => {
        // 将状态更改为失败
        const id = uploadFile.id
        const newFiles = props.files.map(file => {
            if (id === file.id) {
                file.status = 'failure'
            }
            return file
        })
        updateFiles(newFiles)

        // 清除input值
        clearFileInput()
        if (props.onChange) {
            props.onChange(uploadFile, uploadFiles)
        }
        if (props.onError) {
            props.onError(error, uploadFile, uploadFiles)
        }
    }
}
// 正在上传文件
const handleProgress = (uploadFile: FileItem, uploadFiles: FileItem[]) => {
    return (percent: number) => {
        // 更改文件上传进度
        const id = uploadFile.id
        const newFiles = props.files.map(file => {
            if (id === file.id) {
                file.percent = percent
            }
            return file
        })
        updateFiles(newFiles)
        if (props.onProgress) {
            props.onProgress(percent, uploadFile, uploadFiles)
        }
    }
}
// 移除文件
const handleRemoveFile = (fileId: string) => {
    const newFiles = props.files.filter(file => fileId !== file.id)
    updateFiles(newFiles)
}

// drag-enter
const handleTgDragEnter = () => {
    if (!props.drag) return
    dragging.value = true
}
// drag-leave
const handleTgDragLeave = () => {
    if (!props.drag) return
    dragging.value = false
}
// drag-over
const handleTgDragOver = () => {
    if (!props.drag) return
    dragging.value = true
}
// drop
const handleTgDrop = (event: DragEvent) => {
    if (!props.drag) return
    dragging.value = false
    if (event.dataTransfer) {
        const rawFiles = [...event.dataTransfer.files]
        initUpload(rawFiles)
    }
}

defineOptions({
    name: 'KlUpload'
})
</script>

<style lang="scss" scoped>
.upload-trigger {
    display: inline-block;
}
</style>
