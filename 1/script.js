function addTwoNums(a, b) {
    if (typeof a !== "number") {
        throw new ReferenceError("error first parameter must be a number")
    } else if (typeof b !== "number") {
        throw new ReferenceError("error: second parameter must be a number!")
    } else if (typeof a && b !== "number") {
        throw new ReferenceError("your parameters in addTwoNumbs must be a numbers!\n - Example: addTwoNums(5, 5) // 10")
    } else {
        return a + b
    }
    return a + b
}
try {
    console.log(addTwoNums(4, 6))
    console.log(addTwoNums("sd", "6"))
} catch (error) {
    console.error(error)
}
