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
        console.log(error, [])
    })


async function getName(name) {
    try {
        let getSpecName = await cekName(name)
        console.log(getSpecName)
    } catch (error) {
        console.log(error)
    }
}

const sortData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dataLength = data.length - 1
            let temp
            let newData = []
            for (let i = 0; i < dataLength + 1; i++) {
                for (let a = 0; a < dataLength; a++) {
                    if (data[i] <= data[i + 1]) {
                        temp = data[i + 1]
                        newData[i] = temp
                    }
                }
            }
            if (newData.length != 0) {
                resolve(newData)
            } else {
                reject(new Error('Tidak ada data yang di sort'))
            }

        }, 100)
    })

}

async function noDoubleData(data) {
    try {
        let newData = await sortData(data)
        console.log(newData)
    } catch (error) {
        console.log(error)
    }
}


noDoubleData([1, 1, 2, 3, 5, 3])
getName('vincent')