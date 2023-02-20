<template>
    <div class="kl-upload">
        <kl-upload
            v-model:files="files"
            action="http://localhost:3000/file/upload-multiple"
            name="files"
            multiple
            @success="handleSuccess"
            @error="handleError"
        >
            <template #trigger>
                <kl-button>Click to upload</kl-button>
            </template>
            <template #tip>
                <div class="upload-tip">prompt message.</div>
            </template>
        </kl-upload>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { KlMessage } from '@kunlun-design/components'
interface FileItem {
    id: string
    name: string
    percent: number
    rawFile: File
    size: number
    status: 'ready' | 'uploading' | 'success' | 'failure'
    type: string
}

const files = ref<FileItem[]>([])

const handleSuccess = () => {
    KlMessage.success('上传成功')
}

const handleError = () => {
    KlMessage.error('上传失败')
}
</script>

<style lang="scss" scoped>
.upload-tip {
    font-size: 12px;
    margin-top: 6px;
}
</style>
