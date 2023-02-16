<template>
    <div class="main">
        <KlTimeline mode="center" :reverse="true">
            <KlTimelineItem timestamp="2002/11/01" dotcolor="pink">
                <template #default>111</template>
                <template #dot>
                    <KlLogoAlipay />
                </template>
            </KlTimelineItem>
            <KlTimelineItem
                timestamp="2002/11/01"
                dotsize="large"
                :dotsolid="true"
                dottype="default"
                >22</KlTimelineItem
            >
            <KlTimelineItem>33</KlTimelineItem>
        </KlTimeline>
    </div>
</template>
<script setup lang="ts">
import { KlTimeline } from 'kunlun-design'
import { KlTimelineItem } from 'kunlun-design'
</script>
<style lang="scss">
.main {
    margin: 20px;
}
</style>
