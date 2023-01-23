// //导航的中英

// import navLocale from '../i18n/pages/nav.json'

// const getNav = () => {
//     //将nav.json里配置的json对象中的所有可枚举属性生成一个键值对数组，然后进行map遍历
//     //[lang,locales]将map的第一个参数item解构成了 lang 和 locales,lang是当前循环的键值对数组的键，locales是值
//     return Object.entries(navLocale).map(([lang, locales]) => {
//         //Object.values(locales)返回了locales对象中所有可枚举的值组成的数组
//         //这个数组再给map遍历，根据我们nav.json里所写的json对象结构，这个时候已经循环到最里层了,这个被遍历的数组是
//         // [
//         //     {
//         //         "text": "Guide",
//         //         "link": "/guide/what-is-kunlun-design",
//         //         "activeMatch": "/guide/"
//         //     },
//         //     {
//         //         "text": "Component",
//         //         "link": "/component/button",
//         //         "activeMatch": "/component/"
//         //     }
//         // ]
//         //理解上这个之后那就是map里的操作，在map中首先将当前遍历的对象解构赋值，然后link需要进行修改，在解构赋值之后进行相应的修改
//         //然后再把map的结果赋值给item,我们对item编写了接口，设定了里面有三个属性，两个必须，一个可有可无，都是string类型然后数组存放
//         const item: {
//             link: string
//             text: string
//             activeMatch?: string
//         }[] = Object.values(locales).map(item => ({
//             ...item,
//             link: `${lang}${item.link}`
//         }))
//         //最终返回一个数组，这个数组由一开始遍历navLocale的item解构得到的lang作为第一个元素，最后声明的item最为第二个元素
//         return [lang, item]
//     })[0][1]
//     /*
//         最后这里如果不加[0][1]的话,是这样的     (只是效果展示，内容并不是本代码的输出结果)
//         [ [ 'en', [ [Object], [Object] ] ] ]
//         然后加一个[0]是这样的
//         [
//             'zh',
//             [
//                 { text: '指南', link: 'zh/guide/design', activeMatch: '/guide/' },
//                 {
//                     text: '组件',
//                     link: 'zh/component/button',
//                     activeMatch: '/component/'
//                 }
//             ]
//         ]
//         然后再加一个[1]
//         [
//             { text: '指南', link: 'zh/guide/design', activeMatch: '/guide/' },
//             {
//                 text: '组件',
//                 link: 'zh/component/button',
//                 activeMatch: '/component/'
//             }
//         ]
//         因为我们要的就是生成一个这样的数组，所以我们只拿我们需要的结果，把这个放到config.ts当中
//     */
// }

// export const nav = getNav()

// /*
//     Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组
//     比如
//     const obj = {name:'anixuil',age:'21'}
//     const res = Object.entries(obj)
//     console.log(res)    //[['name','anixuil'],['age','21']]

//     array.map((value,index,arr)=>{
//         return
//     })

//     Object.values()方法返回一个包含对象自身的所有可枚举属性值的数组
//     比如
//     const obj = {name:'anixuil',age:'21'}
//     console.log(Object.values(obj)) //['anixuil','21']
// */
