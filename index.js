function probandoMap () {
    const arr = [1, 2, 3, 4];
    const result = arr.map(x => x * 2)
    console.log(result)
}
probandoMap()

function probandoIndex () {
    const arr = [1, 2, 3, 4];
    const result = arr.findIndex(x => x = 2)
    console.log(result)
}
probandoIndex()

function probandoEvery () {
    const result = (currentValue) => currentValue > 2
    const arr = [1,2,3,4]
    console.log(arr.every(result));
}
probandoEvery()

function probandoSome () {
    const result = (currentValue) => currentValue > 2
    const arr = [1,2,3,4]
    console.log(arr.every(result));
}
probandoSome()

function probandofilter () {
    const arr = [1, 2, 3, 4];
    const result = arr.filter(arr => arr.length > 2)
    console.log(result)
}
probandofilter()
