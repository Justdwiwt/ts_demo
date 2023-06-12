class TimeLimitedCache {
    private map: Map<number, {
        value: number,
        timer: NodeJS.Timeout
    }>

    constructor() {
        this.map = new Map()
    }

    set(key: number, value: number, duration: number): boolean {
        const ans = this.map.has(key)
        if (ans) { // @ts-ignore
            clearTimeout(this.map.get(key).timer)
        }
        this.map.set(key, {
            value,
            timer: setTimeout(() => {
                this.map.delete(key)
            }, duration)
        })
        return ans
    }

    get(key: number): number {
        // @ts-ignore
        return this.map.has(key) ? this.map.get(key).value : -1
    }

    count(): number {
        return this.map.size
    }
}
