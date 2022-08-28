type Arr1 = ['a', 'b', 'c', 'd']
type Arr2 = [3, 2, 1]
type Arr3 = []


// 对数组做类型操作时，要对空数组做特殊操作
type Pop<T extends unknown[]> = T extends [] ? [] : T extends [...infer R, unknown] ? R : never;

type Shift<T extends unknown[]> = T extends [] ? [] : T extends [unknown, ...infer R] ? R : never;
type Push<T extends unknown[], K> = [...T, K]
type Unshift<T extends unknown[], K> = [K, ...T];

type re1 = Pop<Arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<Arr2> // expected to be [3, 2]
type re3 = Pop<Arr3>

type shiftRe1 = Shift<Arr3>

type PushRe1 = Push<Arr3, 3>

type UnshiftRe1 = Unshift<Arr1, 3>

