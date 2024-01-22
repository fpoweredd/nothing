const array = [["hello"], ["world"]]

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    for (let j = 0; j < array[i].length; j++) {
        for(let k = 0; k < array[i][j].length; k++)
        if (k === 0) {
            console.log(array[i][j][k].toUpperCase())
        } else {
            console.log(array[i][j][k])
        }
    }
}
