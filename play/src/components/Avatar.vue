<template>
    <h1>Avatar</h1>
    <div class="avatar">
        <div class="circle">
            <h2>circle</h2>
            <kl-avatar
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/11/172a2c2c076cd9f2~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp"
                shape="circle"
                size="mini"
            ></kl-avatar>
            <kl-avatar
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/11/172a2c2c076cd9f2~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp"
                shape="circle"
                size="small"
            ></kl-avatar>
            <kl-avatar
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/11/172a2c2c076cd9f2~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp"
                shape="circle"
                size="normal"
            ></kl-avatar>
            <kl-avatar
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/11/172a2c2c076cd9f2~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp"
                shape="circle"
                size="large"
            ></kl-avatar>
            <kl-avatar
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/11/172a2c2c076cd9f2~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp"
                shape="circle"
                size="max"
            ></kl-avatar>
            <kl-avatar shape="circle" size="max"></kl-avatar>
        </div>
        <div class="square">
            <h2>square</h2>
            <kl-avatar
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/11/172a2c2c076cd9f2~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp"
                shape="square"
                size="mini"
            ></kl-avatar>
            <kl-avatar
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/11/172a2c2c076cd9f2~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp"
                shape="square"
                size="small"
            ></kl-avatar>
            <kl-avatar
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/11/172a2c2c076cd9f2~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp"
                shape="square"
                size="normal"
            ></kl-avatar>
            <kl-avatar
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/11/172a2c2c076cd9f2~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp"
                shape="square"
                size="large"
            ></kl-avatar>
            <kl-avatar
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/11/172a2c2c076cd9f2~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp"
                shape="square"
                size="max"
            ></kl-avatar>
            <kl-avatar shape="square" size="max"></kl-avatar>
        </div>
    </div>
</template>
<script setup lang="ts">
import { KlAvatar } from 'kunlun-design'
</script>
<style lang="scss">
.avatar {
    display: flex;
    justify-content: space-around;
    width: 500px;
}
</style>
