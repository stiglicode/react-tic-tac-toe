const randomize = (...numsArgs) => {
    const [start, target] = numsArgs;
    return Math.floor((Math.random() * target) + start);
}
export {randomize};