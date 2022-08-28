const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// 为什么参数要声明成 value 的形式？形参声明而已，主要关注的是 readonly ，之所以这样做是为了防止形参被改变
// declare function PromiseAll<T extends unknown[]>(value: readonly [...T]): Promise<{[K in keyof T]: T[K] extends Promise<infer R> ? R : T[K]}>;

declare function PromiseAll<T extends unknown[]>(value: readonly [...T]): T
// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)


