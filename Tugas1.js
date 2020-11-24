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
