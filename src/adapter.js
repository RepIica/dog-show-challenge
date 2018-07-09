class Adapter {

  getDogs(){
    const baseURL = 'http://localhost:3000/dogs'
    return fetch(baseURL)
      .then(r => r.json())
  }

  getDog(id){
    const baseURL = `http://localhost:3000/dogs/${id}`
    return fetch(baseURL)
      .then(r => r.json())
  }

  editDog(dog) {
    const baseURL = `http://localhost:3000/dogs/${dog.id}`
    const options = {
      method: 'PATCH',
      body: JSON.stringify(dog), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }
    return fetch(baseURL,options)
      .then(r => r.json())
  }

}
