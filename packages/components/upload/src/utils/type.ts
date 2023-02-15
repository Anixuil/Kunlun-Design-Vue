export interface FileItem {
    id: string
    name: string
    percent: number
    rawFile: File
    size: number
    status: 'ready' | 'uploading' | 'success' | 'failure'
    type: string
}

export interface requestConfig {
    url: string
    name: string
    file: Blob
    method: string
    headers: Record<string, string> | undefined
    data: Record<string, any> | undefined
    onSuccess: (response: any) => void
    onError: (error: Error) => void
    onProgress: (percent: number) => void
}
