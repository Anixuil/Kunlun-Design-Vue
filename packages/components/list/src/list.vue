<template>
    <div :class="[n(), size && n(`--${size}`), bordered && n(`--bordered`)]" :style="{ ...style }">
        <div :class="[header && 'kl-list--header', header && bordered && 'kl-list-item--bordered']">
            <slot name="header"></slot>
        </div>

        <ul class="kl-list-items">
            <template v-for="item in props.dataSource" :key="item">
                <li :class="bordered && 'kl-list-item--bordered'">
                    <slot name="renderItem" :item="item"></slot>
                </li>
            </template>
        </ul>

        <div
            :class="[footer && 'kl-list--footer ', footer && bordered && 'kl-list-item--bordered']"
        >
            <slot name="footer"></slot>
        </div>

        <div :class="extra && 'kl-list--extra '">
            <slot name="extra"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ListProps, sizeValidatorList } from './list'
import { createNamespace } from '@kunlun-design/utils'
import { computed } from 'vue'
import './list.scss'
const props = defineProps(ListProps)

// 这里是props中带有样式设置的时候设置样式的,增加了自主性
const style = computed(() => {
    return props.color || props.textColor
        ? {
              '--kl-bg-color': props.color,
              '--kl-font-color': props.textColor,
              '--kl-border-color': props.color,
              '--kl-border': `var(--kl-border-width) var(--kl-border-style) var(--kl-border-color) var(--kl-border-style)`
          }
        : {}
})
//检测size是否符合规范
const size = computed(() => {
    //首先验证的函数不允许是undefined 只允许string类型 如果类型非法就转换到默认类型
    if (props.size === undefined) return 'normal'
    return sizeValidatorList(props.size) ? props.size : 'normal'
})

defineOptions({
    name: 'KlList'
})
const { n } = createNamespace('list')
</script>

<style scoped lang="scss"></style>
