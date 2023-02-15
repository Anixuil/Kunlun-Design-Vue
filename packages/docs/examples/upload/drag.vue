<template>
    <div class="kl-upload">
        <kl-upload
            v-model:files="files"
            action="http://localhost:3000/file/upload-multiple"
            name="files"
            multiple
            drag
            @success="handleSuccess"
            @error="handleError"
        >
            <template #trigger="{ dragging }">
                <div :class="['drag-area', { dragging: dragging }]">
                    <div class="drag-msg">
                        <KlOtherUploadFill size="50" />
                        <p>Drop file here or click to upload</p>
                    </div>
                </div>
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
.dragging {
    border-color: #3a7afe !important;
    background-color: #ebf1ff;
}

.drag-area {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 100px 100px;
    height: 300px;
    border-radius: 10px;
    border: 2px dashed#ccc;
    transition: all 0.3s;

    .drag-msg {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #85878b;

        p {
            padding: 0;
            margin: 0;
        }
    }

    &:hover {
        border-color: #3a7afe;
    }
}
</style>
