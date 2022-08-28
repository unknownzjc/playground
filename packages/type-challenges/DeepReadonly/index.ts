type X = {
    x: {
        a: () => 1,
        b: 'hi'
    }
    y: 'hey'
}

type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
    }
    readonly y: 'hey'
}

// 为什么需要对 Funtion 做特殊处理?
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends Object ? DeepReadonly<T[K]> : T[K]
}
type Todo = DeepReadonly<X> // should be same as `Expected`

let todo: Todo = {
    x: {
        a: 1,
        b: 'hi'
    },
    y: 'hey'
}

todo.x.a = 2

type A = {
    a: () => 1
}

let a: Readonly<A> = {
    a: () => 1
}