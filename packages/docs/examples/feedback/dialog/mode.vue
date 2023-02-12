<template>
    <div>
        <kl-button @click="dialogFlag = true">click to open the dialog</kl-button>
        <kl-dialog
            v-model="dialogFlag"
            mode="kunlun"
            :show-close="false"
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
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const dialogFlag = ref(false)
</script>

<style scoped lang="scss">
.header-title {
    color: rgb(35 117 53);
    font-size: 20px;
}

em {
    font-style: italic;
}

.container {
    font-size: 20px;
    color: white;
}

.footer > span {
    cursor: pointer;
    color: gray;

    &:hover {
        color: black;
    }
}
</style>
