// 取消默认行为
const preventDefault = (event: Event) => {
    event.preventDefault()
}
// 禁止body滚动
export const lockScroll = () => {
    document.body.style.overflow = 'hidden'
    document.addEventListener('touchmove', preventDefault, false)
}
// 允许body滚动
export const unlockScroll = () => {
    document.body.style.overflow = ''
    document.removeEventListener('touchmove', preventDefault, false)
}
// 监听esc
export const listenEsc = (cb: () => void) => {
    document.addEventListener('keyup', cb)
}
// 取消监听esc
export const unlistenEsc = (cb: () => void) => {
    document.removeEventListener('keyup', cb)
}
