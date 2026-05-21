const countries = ["japan", "sri lanka"]


for (let index in countries) {
    console.log(index)
}
// 0
// 1


for (let e of countries) {
    console.log(e)
}

// japan
// sri lanka