export function measureRunningTime(func, ...args) {
    const varToString = varObj => Object.keys(varObj)[0]
    const displayName = func.name || varToString({ func })
    console.time(displayName)
    func(...args)
    console.timeEnd(displayName)
}