// 除了数组，infer 结构也可以是接口：
// 提取对象的属性类型
type PropType<T, K extends keyof T> = T extends { [Key in K]: infer R }
    ? R
    : never;

type PropTypeResult1 = PropType<{ name: string }, 'name'>; // string
type PropTypeResult2 = PropType<{ name: string; age: number }, 'name' | 'age'>; // string | number

// 反转键名与键值
type ReverseKeyValue<T extends Record<string, unknown>> = T extends Record<
    infer K,
    infer V
>
    ? Record<V & string, K>
    : never;

type ReverseKeyValueResult1 = ReverseKeyValue<{ key: 'value' }>; // { "value": "key" }

// 类型“V”不满足约束“string | number | symbol”。
type ReverseKeyValueNew<T extends Record<string, string>> = T extends Record<
    infer K,
    infer V
>
    ? Record<V & string, K>
    : never;
