import type { RendererElement, RendererNode, VNode } from 'vue'
export interface messageCfgInt {
    type?: string
    content: string | VNode<RendererNode, RendererElement, { [key: string]: any }>
    duration?: number
    close?: boolean
    scroll?: boolean
}
