<template>
    <div class="kl-qrcode">
        <img :src="imgVal" alt="qrcode" />
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { createQrcode } from './utils'
/**
 * --------------------类型定义--------------------
 */
export interface IPropsType {
    link: string
    size?: number
    padding?: number
    darkColor?: string
    lightColor?: string
    errorLevel?: 'L' | 'M' | 'Q' | 'H'
}

const props = withDefaults(defineProps<IPropsType>(), {
    size: 120,
    padding: 3,
    darkColor: '#000',
    lightColor: '#fff',
    errorLevel: 'L'
})
/**
 * --------------------组件状态--------------------
 */
const imgVal = ref('')
/**
 * --------------------功能函数--------------------
 */
// 初始化二维码
const initQrcode = async () => {
    const config = {
        link: props.link,
        size: props.size,
        padding: props.padding,
        darkColor: props.darkColor,
        lightColor: props.lightColor,
        errorLevel: props.errorLevel
    }
    const base64 = await createQrcode(config)
    imgVal.value = base64
}
/**
 * --------------------生命周期--------------------
 */
onMounted(() => {
    initQrcode()
})
// 监听props的变化
watch(props, () => {
    initQrcode()
})

defineOptions({
    name: 'KlQrcode'
})
</script>

<style lang="scss" scoped>
.kl-qrcode {
    box-sizing: border-box;
    display: inline-block;
    img {
        box-sizing: border-box;
        border-radius: 7px;
        border: 1px solid #ddd;
    }
}
</style>
