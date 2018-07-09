document.addEventListener('DOMContentLoaded', () => {
  const adapter = new Adapter()
  const dogController = new DogController()

  adapter.getDogs()
    .then(dogs => {
      dogs.forEach(dog => {dogController.renderDog(dog)} )
    })

  document.querySelector('#table-body').addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      console.log(e.target);
      adapter.getDog(e.target.dataset.id)
        .then(dogObj => {
          dogController.renderDogEdit(dogObj)
        })
    }
  })

  document.addEventListener('submit', e => {
    if (e.target.id === 'dog-form') {
      e.preventDefault()
      const dogForm = document.querySelector('#dog-form')
      const name = dogForm.children[0].value
      const breed = dogForm.children[1].value
      const gender = dogForm.children[2].value
      const id = dogForm.children[3].dataset.id
      newDog = {id, name, breed, gender}
      adapter.editDog(newDog)
        .then(dogNotUsed => {
          adapter.getDogs()
            .then(dogs => {
              const tablebody = document.querySelector('#table-body')
              tablebody.innerHTML = ''
              dogs.forEach(dog => {dogController.renderDog(dog)} )
            })
        })
    }
  })

})
