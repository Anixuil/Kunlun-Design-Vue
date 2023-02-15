import type { requestConfig } from './type'

const handleResponse = (response: any) => {
    return typeof response === 'string' ? JSON.parse(response) : response
}

// 请求方法
export const request = (config: requestConfig) => {
    const { url, name, file, method, data, headers, onSuccess, onError, onProgress } = config
    const xhr = new XMLHttpRequest()
    const formData = new FormData()
    formData.append(name, file)
    // 判断data是否存在
    if (data) {
        Object.entries(data).forEach(item => {
            formData.append(item[0], item[1])
        })
    }

    // 监听上传的progress事件来监听上传过程，显示上传进度
    xhr.upload.addEventListener('progress', event => {
        const percent = (event.loaded / event.total) * 100
        onProgress(percent)
    })
    xhr.open(method, url)
    // 设置请求头
    if (headers) {
        Object.entries(headers).forEach(item => {
            xhr.setRequestHeader(item[0], item[1])
        })
    }
    xhr.send(formData)
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = handleResponse(xhr.response)
            onSuccess(response)
        } else {
            onError(new Error('file upload failure'))
        }
    })

    xhr.addEventListener('error', () => {
        onError(new Error('file upload failure'))
    })
    return xhr
}

// id生成
export const uid = () => {
    let uidStr = ''
    const code = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        '_'
    ]
    for (let i = 0; i < 17; i++) {
        uidStr += code[Math.floor(Math.random() * 63)]
    }
    return uidStr
}
