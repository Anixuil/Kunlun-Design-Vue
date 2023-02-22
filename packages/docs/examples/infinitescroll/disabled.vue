<template>
    <div
        id="scroll"
        class="kl-infinite-scroll"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="true"
    >
        <p
            class="kl-infinite-scroll--item"
            style="background-color: #fff6f6; color: #ff8484"
            v-for="(item, index) in list"
            :key="index"
            v-text="item"
        ></p>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const list = ref<any[]>([1, 2, 3, 4, 5, 6])
const load = () => {
    for (let i = 1; i <= 10; i++) {
        list.value.push(i)
    }
}
</script>
<style></style>
