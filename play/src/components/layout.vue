<template>
    <h1>布局</h1>
    <h2>grid栅格</h2>
    <h3>--基础栅格span</h3>
    <div class="main">
        <KlRow>
            <KlCol :span="24" style="background-color: #1677ffbf">col</KlCol>
        </KlRow>
        <KlRow>
            <KlCol :span="12" style="background-color: #1677ffbf">col-12</KlCol>
            <KlCol :span="12" style="background-color: #1e80ff">col-12</KlCol>
        </KlRow>
        <KlRow>
            <KlCol :span="8" style="background-color: #1677ffbf">col-8</KlCol>
            <KlCol :span="8" style="background-color: #1e80ff">col-8</KlCol>
            <KlCol :span="8" style="background-color: #0f6be3">col-8</KlCol>
        </KlRow>
        <KlRow>
            <KlCol :span="6" style="background-color: #1677ffbf">col-6</KlCol>
            <KlCol :span="6" style="background-color: #1e80ff">col-6</KlCol>
            <KlCol :span="6" style="background-color: #0f6be3">col-6</KlCol>
            <KlCol :span="6" style="background-color: #065ccd">col-6</KlCol>
        </KlRow>
    </div>
    <h3>--gutter间隔</h3>
    <div class="main" style="height: 300px">
        <h4>水平方向</h4>
        <KlRow :gutter="16">
            <KlCol :span="6" style="background-color: #1677ffbf">col-6</KlCol>
            <KlCol :span="6" style="background-color: #1e80ff">col-6</KlCol>
            <KlCol :span="6" style="background-color: #0f6be3">col-6</KlCol>
            <KlCol :span="6" style="background-color: #065ccd">col-6</KlCol>
        </KlRow>
        <h4>水平+垂直</h4>
        <KlRow :gutter="[16, 24]">
            <KlCol :span="6" style="background-color: #1677ffbf">col-6</KlCol>
            <KlCol :span="6" style="background-color: #1e80ff">col-6</KlCol>
            <KlCol :span="6" style="background-color: #0f6be3">col-6</KlCol>
            <KlCol :span="6" style="background-color: #065ccd">col-6</KlCol>
            <KlCol :span="6" style="background-color: #1677ffbf">col-6</KlCol>
            <KlCol :span="6" style="background-color: #1e80ff">col-6</KlCol>
            <KlCol :span="6" style="background-color: #0f6be3">col-6</KlCol>
            <KlCol :span="6" style="background-color: #065ccd">col-6</KlCol>
        </KlRow>
    </div>
    <h3>--溢出换行wrap</h3>
    <div class="main" style="height: 100px">
        <KlRow :wrap="true">
            <KlCol :span="6" style="background-color: #1677ffbf">col-6</KlCol>
            <KlCol :span="6" style="background-color: #1e80ff">col-6</KlCol>
            <KlCol :span="6" style="background-color: #0f6be3">col-6</KlCol>
            <KlCol :span="8" style="background-color: #065ccd">col-8</KlCol>
        </KlRow>
    </div>
    <h3>--偏移offset</h3>
    <div class="main">
        <KlRow>
            <KlCol :span="6" :offset="6" style="background-color: #1677ffbf"
                >col-6 col-offset-6</KlCol
            >
            <KlCol :span="6" :offset="6" style="background-color: #1e80ff"
                >col-6 col-offset-6</KlCol
            >
        </KlRow>
    </div>
    <h3>--栅格排序，改变列的顺序push和pull</h3>
    <div class="main">
        <KlRow>
            <KlCol :span="6" :push="18" style="background-color: #1677ffbf"
                >col-6 col-push-18</KlCol
            >
            <KlCol :span="18" :pull="6" style="background-color: #1e80ff">col-18 col-pull-6</KlCol>
        </KlRow>
    </div>
    <h3>--order排序</h3>
    <div class="main">
        <KlRow>
            <KlCol :span="6" :order="2" style="background-color: #1677ffbf">col-6 1</KlCol>
            <KlCol :span="18" :order="1" style="background-color: #1e80ff">col-18 2</KlCol>
        </KlRow>
    </div>
    <h3>--flex布局</h3>
    <h4>*列排版</h4>
    <div class="main">
        <h4>start</h4>
        <KlRow justify="start">
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff">col-4</KlCol>
        </KlRow>
        <h4>center</h4>
        <KlRow justify="center">
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff">col-4</KlCol>
        </KlRow>
        <h4>end</h4>
        <KlRow justify="end">
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff">col-4</KlCol>
        </KlRow>
        <h4>space-between</h4>
        <KlRow justify="space-between">
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff">col-4</KlCol>
        </KlRow>
        <h4>space-around</h4>
        <KlRow justify="space-around">
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff">col-4</KlCol>
        </KlRow>
        <h4>space-evenly</h4>
        <KlRow justify="space-evenly">
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff">col-4</KlCol>
        </KlRow>
    </div>
    <h4>*行排版</h4>
    <div class="main">
        <h4>top</h4>
        <KlRow align="top" style="background-color: #ebebeb">
            <KlCol :span="4" style="background-color: #1677ffbf; height: 60px">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff; height: 70px">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff; height: 40px">col-4</KlCol>
        </KlRow>
        <h4>middle</h4>
        <KlRow align="middle" style="background-color: #ebebeb">
            <KlCol :span="4" style="background-color: #1677ffbf; height: 60px">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff; height: 70px">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff; height: 40px">col-4</KlCol>
        </KlRow>
        <h4>bottom</h4>
        <KlRow align="bottom" style="background-color: #ebebeb">
            <KlCol :span="4" style="background-color: #1677ffbf; height: 60px">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff; height: 70px">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1677ffbf">col-4</KlCol>
            <KlCol :span="4" style="background-color: #1e80ff; height: 40px">col-4</KlCol>
        </KlRow>
    </div>
    <h3>响应式布局 xm sm md lg xl</h3>
    <div class="main">
        <h4>基础</h4>
        <KlRow>
            <KlCol :xs="2" :sm="4" :md="6" :lg="8" :xl="10" style="background-color: #1677ffbf"
                >哈哈</KlCol
            >
            <KlCol :xs="20" :sm="16" :md="12" :lg="8" :xl="4" style="background-color: #1e80ff"
                >哈哈</KlCol
            >
            <KlCol :xs="2" :sm="4" :md="6" :lg="8" :xl="10" style="background-color: #1677ffbf"
                >哈哈</KlCol
            >
        </KlRow>
        <h4>offset</h4>
        <KlRow>
            <KlCol
                :xs="<any>{span:2, offset: 22 }"
                :sm="4"
                :md="6"
                :lg="8"
                :xl="10"
                style="background-color: #1677ffbf"
                >哈哈1</KlCol
            >
            <KlCol :xs="20" :sm="16" :md="12" :lg="8" :xl="4" style="background-color: #1e80ff"
                >哈哈2</KlCol
            >
            <KlCol :xs="2" :sm="4" :md="6" :lg="8" :xl="10" style="background-color: #1677ffbf"
                >哈哈3</KlCol
            >
        </KlRow>
    </div>
</template>
<script setup lang="ts">
import { KlCol, KlRow } from 'kunlun-design'
</script>
<style scoped>
.main {
    margin: 20px;
    padding: 20px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
}
.kl-row {
    height: 80px;
}
.kl-col {
    color: aliceblue;
    /* box-sizing: content-box; */
    background-color: #065ccd;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
}
</style>
