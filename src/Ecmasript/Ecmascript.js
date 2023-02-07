
export let findLongestWord = (mots) => {
    mots = mots.map(item => {
        return { mot: item, longeur: item.length }
    })
    let max = mots[0];
    mots.reduce((previousValue, currentValue) => {
        if (previousValue != undefined)
            max = currentValue
        if (max.longeur < currentValue.longeur)
            max = currentValue
    })
    return max
}

export let nbrOccurence = (input) => {
    let obj = {}
    let flatArray = input.flat()
    flatArray.reduce((previousValue, currentValue) => {
        if (obj[currentValue] === undefined) {
            obj[currentValue] = 1
        }
        else {
            obj[currentValue]++
        }
    })
    return obj
}

export let sommeNotes = (tab) => {
    let mappedTab = tab.map(item => {
        if (item.marks < 50)
            item.marks += 15
        return item
    })
    let filtredArray = mappedTab.filter(item => item.marks > 50)

    let somme = 0
    filtredArray.reduce((previousValue, currentValue) => {
        if (previousValue != undefined)
            somme += previousValue.marks
        somme += currentValue.marks
    })
    return somme
}

export let createTable = () => {
    let tab = []
    let id = 1
    tab.push(
        { name: 'John', marks: 98 },
        { name: 'Baba', marks: 23 }
    )
    tab = tab.map(item => {
        item.ID = id
        id++
        return item
    })
    return tab
}

export default findLongestWord;

