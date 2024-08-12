

export function debounce(func: Function, waitTime: number) {
    let timeout: NodeJS.Timeout | number;
    return (...args: any[]) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), waitTime)
    }
}