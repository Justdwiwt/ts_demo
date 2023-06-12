type F = (...p: any[]) => any

const debounce = (fn: F, t: number): F => {
    let timeout: ReturnType<typeof setTimeout>
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => fn(...args), t)
    }
}
