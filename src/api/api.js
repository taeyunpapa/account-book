import axios from 'axios'

async function getUserName(payload) {
    let result = ''
    await axios.get('http://localhost:8080/home', payload)
            .then(function(response) {
            console.log("response!!");
            console.log(response);
            console.log(response.data);
            result = response
            })
            .catch(function(error) {
            console.log(error);
            });
    return result;
}

export {getUserName}