const cekName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let nameWork = ['vincent', 'richard', 'hensam', 'kania']
            let cekData = nameWork.find((item) => {
                return item === name
            })
            if (cekData) {
                resolve(cekData)
            } else {
                reject(new Error('Data Not Found', []))
            }
        }, 2000)
    })
}

cekName('vincent')
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })



const cekGenreGame = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = ['rpg', 'fps', 'adventure', 'open world', 'indie']
            let hasil = data.find((item) => {
                return item === name
            })
            if (hasil) {
                resolve(hasil)
            } else {
                reject(new Error('Data not found', []))
            }
        }, 100)
    })

}

cekGenreGame('rpg')
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })