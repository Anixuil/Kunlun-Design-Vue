// 取消默认行为
const preventDefault = (event: Event) => {
    event.preventDefault()
}
// 禁止body滚动
export const lockScroll = () => {
    if (globalThis['document']) {
        globalThis['document'].body.style.overflow = 'hidden'
        globalThis['document'].addEventListener('touchmove', preventDefault, false)
    }
}
// 允许body滚动
export const unlockScroll = () => {
    if (globalThis['document']) {
        globalThis['document'].body.style.overflow = ''
        globalThis['document'].removeEventListener('touchmove', preventDefault, false)
    }
}
// 监听esc
export const listenEsc = (cb: () => void) => {
    if (globalThis['document']) {
        globalThis['document'].addEventListener('keyup', cb)
    }
}
// 取消监听esc
export const unlistenEsc = (cb: () => void) => {
    if (globalThis['document']) {
        globalThis['document'].removeEventListener('keyup', cb)
    }
}
