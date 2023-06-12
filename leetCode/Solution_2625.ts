type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    if (n === 0) return arr.slice();

    const res = [];

    for (let i = 0, x = arr.length; i < x; i++)
        Array.isArray(arr[i])
            ? res.push(...flat(arr[i] as MultiDimensionalArray, n - 1))
            : res.push(arr[i]);

    return res;
};
