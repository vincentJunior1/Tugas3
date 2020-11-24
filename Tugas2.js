const getMonth = (callback) =>{
    setTimeout(()=>{
        let error = false;
        let month = ['January','February', 'March', 'April', 'June', 'July', 'August',
        'September', 'October','November','Desember']
        if(!error){
            callback(null,month)
        }else{
            callback(new Error('Sorry Data Not Found', []))
        }
    })
}

const showMonth = (message,data) =>{
    let error = message
    if(error === null){
        data.map(x => console.log(x))
    }else{
        console.log(error)
    }
}


getMonth(showMonth)