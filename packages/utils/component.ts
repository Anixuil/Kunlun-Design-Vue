//组件类名的命名空间
type ClassName = string | undefined | null
type Classes = (ClassName | [any, ClassName, ClassName?])[]
export function createNamespace(name: string) {
    const namespace = `kl-${name}`

    const createBEM = (suffix?: string): string => {
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
