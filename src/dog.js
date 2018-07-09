class Dog {

  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    this.breed = obj.breed
    this.gender = obj.gender
  }

  render() {
    return `<tr><td>${this.name}</td> <td>${this.breed}</td> <td>${this.gender}</td> <td><button data-id="${this.id}">Edit</button></td></tr>`
  }

}
