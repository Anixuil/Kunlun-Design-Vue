import createMessage from './src/message'
export * from './src/message'

const renderMsg = (typeCfg = {}, cfg: any = '') => {
    const isContent = typeof cfg === 'string'

    cfg = isContent ? { text: cfg } : cfg

    //合并配置
    const config = Object.assign({}, typeCfg, cfg)

    const {
        type = 'text', // 消息类型
        text = '', // 消息内容
        duration = 3000, // 延迟时间
        close = false, // 是否显示关闭按钮
        scroll = false // 是否支持文字滚动
    } = config

    return createMessage({
        type,
        text,
        duration,
        close,
        scroll
    })
}

//默认延迟时间
const defaultDuration = 3000

export const Message = {
    // 纯文本消息
    text(cfg = '', duration = defaultDuration, close = false, scroll = false) {
        const textCfg = {
            type: 'text',
            duration,
            close,
            scroll
        }
        return renderMsg(textCfg, cfg)
    },
    // 成功提示
    success(cfg = '', duration = defaultDuration, close = false, scroll = false) {
        const successCfg = {
            type: 'success',
            duration,
            close,
            scroll
        }
        return renderMsg(successCfg, cfg)
    },
    //警告提示
    warning(cfg = '', duration = defaultDuration, close = false, scroll = false) {
        const warningCfg = {
            type: 'warning',
            duration,
            close,
            scroll
        }
        return renderMsg(warningCfg, cfg)
    },
    //错误提示
    error(cfg = '', duration = defaultDuration, close = false, scroll = false) {
        const errorCfg = {
            type: 'error',
            duration,
            close,
            scroll
        }
        return renderMsg(errorCfg, cfg)
    }
}

export const KlMessage = createMessage
