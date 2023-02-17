// 禁止body滚动
export const lockScroll = () => {
    document.body.classList.add('lock-scroll')
}
// 允许body滚动
export const unlockScroll = () => {
    document.body.classList.remove('lock-scroll')
}
// 监听esc
export const listenEsc = (cb: () => void) => {
    document.addEventListener('keyup', cb)
}
// 取消监听esc
export const unlistenEsc = (cb: () => void) => {
    document.removeEventListener('keyup', cb)
}
