// 提取首尾两个
type ExtractStartAndEnd<T extends any[]> = T extends [
    infer Start,
    ...any[],
    infer End
]
    ? [Start, End]
    : T;

// 调换首尾两个
type SwapStartAndEnd<T extends any[]> = T extends [
    infer Start,
    ...infer Left,
    infer End
]
    ? [End, ...Left, Start]
    : T;

// 调换开头两个
type SwapFirstTwo<T extends any[]> = T extends [
    infer Start1,
    infer Start2,
    ...infer Left
]
    ? [Start2, Start1, ...Left]
    : T;
