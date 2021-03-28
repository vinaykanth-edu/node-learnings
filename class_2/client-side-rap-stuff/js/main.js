document.querySelector('button').addEventListener('click', getRapName)

async function getRapName() {
    // console.log('btn clicked')
    const rapName = document.querySelector('input').value
    try{
        const res = await fetch(`http://localhost:8000/api/rappers/${rapName}`)
        const data = await res.json()
        console.log(data)
        document.querySelector('h2').innerText = data.birthname    
    }
    catch(err){
        console.log(err)
    }
    
}