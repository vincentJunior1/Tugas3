const cekName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let nameWork = ['vincent', 'richard', 'hensam', 'kania']
            let cekData = nameWork.find((item) => {
                return item === name.toLowerCase()
            })
            if (cekData) {
                resolve(cekData)
            } else {
                reject(new Error('Data Not Found'), [])
            }
        }, 200)
    })
}

cekName('vincent')
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error,[])
    })


async function getName(name){
    try{
        let getSpecName = await cekName(name)
        console.log(getSpecName)
    }catch(error){
        console.log(error)
    }
}

const cekGenreGame = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = ['rpg', 'fps', 'adventure', 'open world', 'indie']
            let hasil = data.find((item) => {
                return item === name.toLowerCase()
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

async function getGenre(genre){
    try{
        let newGenre = await cekGenreGame(genre)
        console.log(newGenre)
    }catch(error){
        console.log(error)
    }
}   


getGenre('rpg')
getName('vincent')