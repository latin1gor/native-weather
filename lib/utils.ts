

export function debounce(func: Function, waitTime: number) {
    let timeout: NodeJS.Timeout | number;
    console.log(arguments)
    return (...args: any[]) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), waitTime)
    }
}