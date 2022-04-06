arrFunction(8)



function arrFunction(dlugoscTablicy){
    const arr = new Array(dlugoscTablicy)

    console.log(arr)

    for (let i=0; i < arr.length; i++){
        let pytanieJakaLiczba = parseInt(prompt('Podaj jakąś liczbę'))
        arr[i] = pytanieJakaLiczba
    }
    console.log(arr)
}