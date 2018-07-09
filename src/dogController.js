class DogController {

  renderDog(dog){
    const newDog = new Dog(dog)
    const tablebody = document.querySelector('#table-body')
    tablebody.innerHTML += newDog.render()
  }

  renderDogEdit(dogObj){
    const dogForm = document.querySelector('#dog-form')
    dogForm.children[0].value = dogObj.name
    dogForm.children[1].value = dogObj.breed
    dogForm.children[2].value = dogObj.gender
    dogForm.children[3].value = 'Update Dog'
    dogForm.children[3].dataset.id = dogObj.id

  }

}
