require('./bootstrap');

document.getElementById('getAccessToken').addEventListener('click',(event)=>{
    event.preventDefault()

    axios.post('/get-token',{})
    .then((response)=>{
        console.log(response.data);
        document.getElementById('access_token').innerHTML=response.data.access_token;
    })
    .catch((error)=>{
        console.log(error);
    })
})
