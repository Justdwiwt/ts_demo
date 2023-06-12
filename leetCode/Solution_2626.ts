function reduce(nums: number[], fn: Fn, init: number, i: number = 0): number {
    return i === nums.length ? init : reduce(nums, fn, fn(init, nums[i]), i + 1);
}
