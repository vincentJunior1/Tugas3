const hariKerja = (day) => {
    return new Promise ((resolve,reject)=>{
        setTimeout(() =>{
            const dataDay = ['senin', 'selasa', 'rabu','kamis','jumat']
            let cek = dataDay.find((item) =>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

hariKerja('senin')
.then((result)=>{
    console.log(result)
})
.catch((error) =>{
    console.log(error)
})

async function getData(day){
    try{
        let result = await hariKerja(day)
        await showData(result)
    }catch(error){
        console.log(error)
    }
}


function showData(result){
    console.log(result)
}


getData('senin')