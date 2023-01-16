//组件类名的命名空间
type ClassName = string | undefined | null
type Classes = (ClassName | [any, ClassName, ClassName?])[]
export function createNamespace(name: string) {
    const namespace = `kl-${name}`

    //命名规范 suffix词尾 后缀
    const createBEM = (suffix?: string): string => {
        //如果没传那就是组件的名字 比如传个button进来 button是直接调用的createNamespace，所以这个方法就没传参，就直接返回namespace
        if (!suffix) return namespace
        return suffix.startsWith('--') ? `${namespace}${suffix}` : `${namespace}__${suffix}`
    }

    const classes = (...classes: Classes): any[] => {
        return classes.map(className => {
            if (Array.isArray(className)) {
                const [condition, truthy, falsy = null] = className
                return condition ? truthy : falsy
            }

            return className
        })
    }

    return {
        n: createBEM,
        classes
    }
}

// type:其作用就是给类型起一个新名字，可以作用于原始值（基本类型），联合类型，元组以及其它任何你需要手写的类型
// 所谓BEM，其实是三个单词的缩写：Block（模块）、Element（元素）、Modifier（修饰符）。
