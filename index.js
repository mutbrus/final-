function fetchData() {
    return new Promise ((resolve ,reject)=>{
        setTimeout(()=>{resolve('Data fetched ! Student Name : Mut Brus ')},1000)
    });
}

async function fetchandProcessData() {
    try{

        console.log('Student Name : Mut Brus');
        console.log('Using asyns/await: ')
        const data = await fetchData();
        console.log(data)
        const processed = "Processing data .."
        console.log(processed)

    }catch(err){
        console.error('Error',err)
    }
    
}

fetchandProcessData();
