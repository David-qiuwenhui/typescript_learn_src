type PromiseValueOld<T> = T extends Promise<infer V>
    ? V extends Promise<infer N>
        ? N
        : V
    : T;

// 递归来处理任意嵌套深度来提取类型
type PromiseValue<T> = T extends Promise<infer V> ? PromiseValue<V> : T;

type PromiseValueResult1 = PromiseValue<Promise<number>>; // number
type PromiseValueResult2 = PromiseValue<number>; // number，但并没有发生提取

type PromiseValueResult3 = PromiseValue<Promise<Promise<boolean>>>; // Promise<boolean>，只提取了一层
