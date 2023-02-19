import QRCode from 'qrcode'

interface QRCodeConfig {
    link: string
    size: number
    padding: number
    darkColor: string
    lightColor: string
    errorLevel: 'L' | 'M' | 'Q' | 'H'
}

export const createQrcode = async (config: QRCodeConfig) => {
    const base64 = await QRCode.toDataURL(config.link, {
        width: config.size,
        margin: config.padding,
        color: {
            dark: config.darkColor,
            light: config.lightColor
        },
        errorCorrectionLevel: config.errorLevel
    })
    return base64
}
