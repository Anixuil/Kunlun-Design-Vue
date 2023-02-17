<template>
    <div>
        <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
        <p text="sm" v-html="decodedDescription"></p>
        <div class="example">
            <!-- <Example :file="path" :demo="formatPathDemos[path]" /> -->
            <div class="example-showcase">
                <component :is="formatPathDemos[path]" v-if="formatPathDemos[path]" />
            </div>

            <div class="kl-divider"></div>

            <div class="op-btns">
                <span class="op-btn" @click="toggleSourceVisible()">&lt;&gt;</span>
            </div>

            <div v-show="sourceVisible"></div>

            <div class="example-source-wrapper" ref="code">
                <div class="example-source language-vue" v-html="decodedSource"></div>
            </div>

            <Transition name="kl-fade-in-linear">
                <div
                    v-show="sourceVisible"
                    class="example-float-control"
                    @click="toggleSourceVisible()"
                >
                    <span>Hide Code</span>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick } from 'vue'
import type { Ref } from 'vue'
import gsap from 'gsap'
const demos = import.meta.globEager('../../../examples/**/*.vue')

const props = defineProps<{
    source: string
    path: string
    rawSource: string
    description?: string
}>()

const formatPathDemos = computed(() => {
    const demoObj = {}

    Object.keys(demos || {}).forEach(key => {
        demoObj[key.replace('../../../examples/', '').replace('.vue', '')] = demos[key].default
    })

    return demoObj
})

const sourceVisible = ref(false)

const decodedSource = computed(() => {
    return decodeURIComponent(props.source)
})
const decodedDescription = computed(() => decodeURIComponent(props.description!))

//代码展现隐藏过渡效果实现
//声明类型 htmlType接口用来处理文档站打包时存在的找不到 offsetHeight 属性的问题
type htmlType = {
    offsetHeight: number
    style: {
        height: number
    }
}
const htmlstr: htmlType = { offsetHeight: 0, style: { height: 0 } }
const code: Ref<HTMLElement | htmlType> = ref(htmlstr)

const codeHeight = ref<number>()
nextTick(() => {
    codeHeight.value = code.value.offsetHeight
    if (!sourceVisible.value) {
        code.value.style.height = '0px'
    }
})

//控制代码展现
function toggleSourceVisible() {
    sourceVisible.value = !sourceVisible.value

    if (sourceVisible.value) {
        gsap.to(code.value, {
            height: `${codeHeight.value}`,
            duration: 0.7,
            ease: 'Power1.easeOut'
        })
    } else {
        gsap.to(code.value, {
            height: '0',
            duration: 0.7,
            ease: 'expo'
        })
    }
}
</script>

<style lang="scss">
.example-showcase {
    padding: 0.8rem;
    margin: 0.5px;

    > .kl-icon {
        margin-right: 16px;
        font-size: 26px;
    }
}

.example {
    border: 1px solid var(--demo-border);
    border-radius: 3px;

    .op-btns {
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 2.5rem;
        user-select: none;

        .op-btn {
            cursor: pointer;

            &:hover {
                color: var(--theme-color);
            }
        }
    }

    .example-float-control {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid var(--demo-border);
        height: 44px;
        box-sizing: border-box;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        margin-top: -1px;
        color: var(--demo-sen-color);
        cursor: pointer;
        position: sticky;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        user-select: none;

        &:hover {
            color: var(--theme-color);
        }
    }

    .example-source-wrapper {
        overflow: hidden;

        .example-source.language-vue {
            margin: 0 !important;
            border-radius: 0;
        }
    }
}

.kl-divider {
    display: block;
    height: 1px;
    width: 100%;
    margin: 0;
    border-top: 1px solid var(--demo-border);
}

.content-container .vp-doc .example [class*='language-'] pre {
    // user-select: none;
    &::-webkit-scrollbar {
        height: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(57 183 84);
        border-radius: 10px;
    }
}
</style>
