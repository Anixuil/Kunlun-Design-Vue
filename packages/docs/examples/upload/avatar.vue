<template>
    <div class="kl-upload">
        <kl-upload
            v-model:files="files"
            action="http://localhost:3000/file/upload-single"
            name="file"
            :show-file-list="false"
            @success="handleSuccess"
            @error="handleError"
            @before-upload="handleBeforeUpload"
        >
            <template #trigger>
                <div class="avatar">
                    <img v-if="imageUrl" :src="imageUrl" alt="" />
                    <KlSystemAdd v-else size="50" />
                </div>
            </template>
            <template #tip>
                <div class="upload-tip">jpg files with a size less than 2MB.</div>
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
const imageUrl = ref<string>('')

const handleSuccess = (respance: any, uploadFile: FileItem) => {
    KlMessage.success('上传成功')
    imageUrl.value = URL.createObjectURL(uploadFile.rawFile)
}

const handleError = () => {
    KlMessage.error('上传失败')
}

const handleBeforeUpload = (uploadFile: FileItem) => {
    console.log(URL.createObjectURL(uploadFile.rawFile))
    if (uploadFile.type !== 'image/jpeg') {
        KlMessage.error('Avatar picture must be JPG format!')
        return false
    } else if (uploadFile.size / 1024 / 1024 > 2) {
        KlMessage.error('Avatar picture size can not exceed 2MB!')
        return false
    }
    return true
}
</script>

<style lang="scss" scoped>
.upload-tip {
    font-size: 12px;
    margin-top: 6px;
}

.avatar {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border: 2px dashed #ccc;
    border-radius: 10px;
    transition: all 0.3s;
    color: #ccc;
    cursor: pointer;

    img {
        width: 100%;
    }

    &:hover {
        border-color: #2b8e41;
        color: #2b8e41;
    }
}
</style>
