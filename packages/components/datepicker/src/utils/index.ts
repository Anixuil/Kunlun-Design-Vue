import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import solarLunar from 'solarlunar-es'
import type Solar2lunar from 'solarlunar-es'

dayjs.extend(customParseFormat)

/**
 * 防抖
 * @param fn
 * @param delay
 * @returns
 */
export const debounce = (fn: Function, delay: number) => {
    let timer: ReturnType<typeof setTimeout>
    const newFunc = (...args: any[]) => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
    return newFunc
}

/**
 * 判断是否是闰年
 * @param year
 * @returns
 */
export const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

/**
 * 计算某年某月的天数
 * @param year
 * @param month
 * @returns
 */
export const calcDaysByMonth = (year: number, month: number) => {
    let days = 31
    if ([4, 6, 9, 11].includes(month)) {
        days = 30
    } else if (month === 2) {
        // 闰年29，非闰年28
        if (isLeapYear(year)) {
            days = 29
        } else {
            days = 28
        }
    }
    return days
}

/**
 * 按指定格式解析时间字符串
 * @param value
 * @param formatStr
 * @returns
 */
export const parseTime = (value: string, formatStr: string) => {
    const timeObj = dayjs(value, formatStr, true)
    if (!timeObj.isValid()) return false
    const year = timeObj.year()
    const month = timeObj.month() + 1
    const date = timeObj.date()
    const hour = timeObj.hour()
    const minute = timeObj.minute()
    const second = timeObj.second()

    return {
        year,
        month,
        date,
        hour,
        minute,
        second
    }
}

/**
 * 按指定格式格式化时间
 * @param timeType
 * @param time
 * @param formatStr
 * @returns
 */
type ITimeType = 'y' | 'y-m' | 'y-m-d' | 'y-m-d-hms'
interface ITime {
    year?: number
    month?: number
    date?: number
    hour?: number
    minute?: number
    second?: number
}
export const formatTime = (timeType: ITimeType, time: ITime, formatStr: string) => {
    switch (timeType) {
        case 'y':
            return dayjs(String(time.year)).format(formatStr)
        case 'y-m':
            return dayjs(time.year + '-' + time.month).format(formatStr)
        case 'y-m-d':
            return dayjs(time.year + '-' + time.month + '-' + time.date).format(formatStr)
        case 'y-m-d-hms':
            return dayjs(
                time.year +
                    '-' +
                    time.month +
                    '-' +
                    time.date +
                    '  ' +
                    time.hour +
                    ':' +
                    time.minute +
                    ':' +
                    time.second
            ).format(formatStr)
    }
}

/**
 * 获取时间对象
 * @param type
 * @returns
 */
export const getNowTime = (type: 'datetime' | 'date' | 'month' | 'year') => {
    const timeObj = new Date()
    const year = timeObj.getFullYear()
    const month = timeObj.getMonth() + 1
    const date = timeObj.getDate()
    const hour = timeObj.getHours()
    const minute = timeObj.getMinutes()
    const second = timeObj.getSeconds()

    switch (type) {
        case 'datetime':
            return { year, month, date, hour, minute, second }
        case 'date':
            return { year, month, date }
        case 'month':
            return { year, month }
        case 'year':
            return { year }
    }
}

/**
 * 月份+-1计算
 * @param year
 * @param month
 * @param action
 * @returns
 */
export const monthCalc = (year: number, month: number, action: 'add' | 'sub') => {
    let y, m
    switch (action) {
        case 'add':
            m = month + 1
            y = year
            if (m === 13) {
                m = 1
                y = year + 1
            }
            break
        case 'sub':
            m = month - 1
            y = year
            if (m === 0) {
                m = 12
                y = year - 1
            }
            break
    }
    return [y, m]
}

/**
 * 计算两个日期之间的所有的天数
 * @param startDate
 * @param endDate
 * @returns
 */
interface ITimeDate {
    year: number
    month: number
    date: number
}
export const calcRangeDate = (startDate: ITimeDate, endDate: ITimeDate) => {
    const sdStr = startDate.year + '-' + startDate.month + '-' + startDate.date
    const edStr = endDate.year + '-' + endDate.month + '-' + endDate.date
    const sdTimeStamp = new Date(sdStr).getTime()
    const edTimeStamp = new Date(edStr).getTime()
    const unit = 1000 * 60 * 60 * 24
    const timestampArr = []
    for (let i = sdTimeStamp + unit; i < edTimeStamp; i += unit) {
        timestampArr.push(i)
    }
    const res = timestampArr.map(item => {
        const timeObj = new Date(item)
        const year = timeObj.getFullYear()
        const month = timeObj.getMonth() + 1
        const date = timeObj.getDate()
        return { year, month, date }
    })
    return res
}

/**
 * 计算两个日期之间的所有月份
 * @param startMonth
 * @param endMonth
 * @returns
 */
interface ITimeMonth {
    year: number
    month: number
}
export const calcRangeMonth = (startMonth: ITimeMonth, endMonth: ITimeMonth) => {
    const { year: sy, month: sm } = startMonth
    const { year: ey, month: em } = endMonth
    const res = []
    for (let i = sy; i <= ey; i++) {
        if (sy === ey) {
            for (let j = sm + 1; j <= em - 1; j++) {
                res.push({ year: i, month: j })
            }
        } else if (i === sy) {
            for (let j = sm + 1; j <= 12; j++) {
                res.push({ year: i, month: j })
            }
        } else if (i === ey) {
            for (let j = 1; j <= em - 1; j++) {
                res.push({ year: i, month: j })
            }
        } else {
            for (let j = 1; j <= 12; j++) {
                res.push({ year: i, month: j })
            }
        }
    }
    return res
}

/**
 * 计算两个日期中间的所有年份
 * @param startYear
 * @param endYear
 * @returns
 */
export const calcRangeYear = (startYear: number, endYear: number) => {
    const res = []
    for (let i = startYear + 1; i < endYear; i++) {
        res.push(i)
    }
    return res
}

/**
 * 阳历转阴历
 * @param year
 * @param month
 * @param date
 * @returns
 */
interface Solar2lunar {
    lYear: number
    lMonth: number
    lDay: number
    animal: string
    monthCn: string
    dayCn: string
    cYear: number
    cMonth: number
    cDay: number
    gzYear: string
    gzMonth: string
    gzDay: string
    isToday: boolean
    isLeap: boolean
    nWeek: number
    ncWeek: string
    isTerm: boolean
    term: string
    lunarFestival: string
    festival: string
}
export const solarToLunar = (year: number, month: number, date: number): Solar2lunar => {
    return solarLunar.solar2lunar(year, month, date) as Solar2lunar
}

/**
 * 汉英词典
 * @param chSTr
 * @returns
 */
const weekMap = {
    一: 'Mon',
    二: 'Tue',
    三: 'Wed',
    四: 'Thu',
    五: 'Fri',
    六: 'Sat',
    日: 'Sun'
}
const monthMap = {
    '1月': 'Jan',
    '2月': 'Feb',
    '3月': 'Mar',
    '4月': 'Apr',
    '5月': 'May',
    '6月': 'Jun',
    '7月': 'Jul',
    '8月': 'Aug',
    '9月': 'Sep',
    '10月': 'Oct',
    '11月': 'Nov',
    '12月': 'Dec'
}
export const ch2en = (chStr: string) => {
    let enStr = '词库未收录'
    switch (chStr) {
        case '请选择日期':
            enStr = 'select a date'
            break
        case '请选择月份':
            enStr = 'select a month'
            break
        case '请选择年份':
            enStr = 'select a year'
            break
        case '今天':
            enStr = 'today'
            break
        case '确定':
            enStr = 'confire'
            break
        case '此刻':
            enStr = 'now'
            break
        case '年':
            enStr = ''
            break
        case '开始日期':
            enStr = 'start date'
            break
        case '结束日期':
            enStr = 'end date'
            break
        case '开始月份':
            enStr = 'start month'
            break
        case '结束月份':
            enStr = 'end month'
            break
        case '开始年份':
            enStr = 'start year'
            break
        case '结束年份':
            enStr = 'end year'
            break
        case '一':
        case '二':
        case '三':
        case '四':
        case '五':
        case '六':
        case '日':
            enStr = weekMap[chStr]
            break
        case '1月':
        case '2月':
        case '3月':
        case '4月':
        case '5月':
        case '6月':
        case '7月':
        case '8月':
        case '9月':
        case '10月':
        case '11月':
        case '12月':
            enStr = monthMap[chStr]
            break
    }
    return enStr
}
