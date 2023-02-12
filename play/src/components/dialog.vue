<template>
    <div>
        <h1>基础使用</h1>
        <kl-button @click="dialogFlag = true">打开对话框</kl-button>
        <kl-dialog
            v-model="dialogFlag"
            mode="kunlun"
            cxt-position="center"
            bgColor="rgb(58,194,167)"
            foot-position="right"
        >
            <template #header>
                <span class="header-title"> Tips </span>
            </template>
            <div class="container">KUNLUN DESIGN</div>
            <template #footer>
                <div class="footer" @click="dialogFlag = false">
                    <span>点击此处或空白处关闭提示</span>
                </div>
            </template>
        </kl-dialog>
        <kl-button @click="dialogFlag2 = true">打开正常对话框</kl-button>
        <kl-dialog v-model="dialogFlag2">
            <template #header>提示</template>
            恭喜您发现宝藏
            <template #footer>
                <span class="footer">
                    <kl-button @click="dialogFlag2 = false">取消</kl-button>
                    <kl-button type="primary" @click="dialogFlag2 = false">确定</kl-button>
                </span>
            </template>
        </kl-dialog>
    </div>
</template>

<script setup lang="ts">
import { KlButton, KlDialog } from 'kunlun-design'
import { ref } from 'vue'

const dialogFlag = ref(false)
const dialogFlag2 = ref(false)
</script>

<style scoped lang="scss">
h1 {
    line-height: 50px;
}

.header-title {
    color: rgb(35 117 53);
    font-size: 20px;
}

.container {
    font-size: 20px;
}

.footer > span {
    cursor: pointer;
    color: gray;

    &:hover {
        color: black;
    }
}
</style>
