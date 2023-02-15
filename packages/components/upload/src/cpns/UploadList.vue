<template>
    <div class="upload-list">
        <div
            :class="[
                'upload-item',
                { 'status-success': file.status === 'success' },
                { 'status-failure': file.status === 'failure' }
            ]"
            v-for="file in files"
            :key="file.id"
        >
            <div>
                <Component
                    :is="file.status === 'uploading' ? KlOtherLoading : KlSystemList"
                ></Component>
            </div>
            <span class="file-link" @click="handleFileClick(file)">{{ file.name }}</span>
            <div class="icon-remove" @click="handleRemoveFile(file, files)">
                <KlSystemDelete />
            </div>
            <UploadPregress v-if="file.status === 'uploading'" :uploadFile="file"></UploadPregress>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { KlSystemList, KlSystemDelete, KlOtherLoading } from '@kl-design/icons'
import '@kl-design/icons/style.css'
import type { FileItem } from '../utils/type'
import UploadPregress from './UploadPregress.vue'

/**
 * --------------------类型定义--------------------
 */
export interface IPropsType {
    files: FileItem[]
}
/**
 * --------------------组件通信--------------------
 */
defineProps<IPropsType>()
const emit = defineEmits<{
    (e: 'remove', fileId: string): void
}>()

const onPreview = inject<(file: FileItem) => void>('onPreview')
const onBeforeRemove = inject<(file: FileItem, files: FileItem[]) => boolean>('onBeforeRemove')
const onRemove = inject<(file: FileItem, files: FileItem[]) => void>('onRemove')
/**
 * --------------------事件处理--------------------
 */
// 移除文件
const handleRemoveFile = (file: FileItem, files: FileItem[]) => {
    // 移除前
    if (onBeforeRemove && !onBeforeRemove(file, files)) return
    emit('remove', file.id)
    // 移除后
    if (onRemove) {
        onRemove(file, files)
    }
}
// 点击文件
const handleFileClick = (file: FileItem) => {
    // 若为失败态，则不做处理
    if (file.status === 'failure') return
    if (onPreview) {
        onPreview(file)
    }
}
</script>

<style lang="scss" scoped>
.upload-list {
    font-size: 14px;
}

.upload-item {
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    height: 22px;
    margin-top: 8px;
    transition: all 0.3s;

    &:hover {
        background-color: #f5f5f5;
    }

    .file-link {
        flex: 1;
        padding: 0 8px;
        transition: all 0.3s;
    }

    .icon-remove {
        cursor: pointer;
        transition: all 0.3s;
    }
}

.status-success {
    .file-link {
        cursor: pointer;
        &:hover {
            color: #3a7afe;
        }
    }

    .icon-remove {
        &:hover {
            color: #3a7afe;
        }
    }
}

.status-failure {
    color: #f56c6c;
    .file-link {
        &:hover {
            color: #f56c6c;
        }
    }

    .icon-remove {
        &:hover {
            color: #3a7afe;
        }
    }
}
</style>
