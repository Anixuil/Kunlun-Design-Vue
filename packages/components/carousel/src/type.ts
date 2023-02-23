//存col的props
import { ExtractPropTypes } from 'vue'

export const carouselProps = {
    width: {
        type: Number,
        default: 600
    },
    height: {
        type: Number,
        default: 300
    },
    initialIndex: {
        type: Number,
        default: 1
    },
    trigger: {
        //指示器触发方式
        type: String,
        default: 'click',
        value: ['hover', 'click']
    },
    autoplay: {
        type: Boolean,
        default: true
    },
    interval: {
        //自动切换的时间间隔
        type: Number,
        default: 3000
    },
    indicatorPosition: {
        //指示器的位置
        type: String,
        default: '',
        value: ['outside', 'none']
    },
    arrow: {
        type: String,
        default: 'hover',
        value: ['hover', 'never', 'always']
    }
}

export type carouselProps = ExtractPropTypes<typeof carouselProps>
