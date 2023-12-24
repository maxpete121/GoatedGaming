export class Post {
  constructor(data) {
    this.id = data._id
    this.postedBy = data.postedBy 
    this.title = data.title || 'Scrum Daddy Bless Me'
    this.imgUrl = data.imgUrl || 'https://i.redd.it/k3rjuky1xsy21.jpg'
    this.body = data.body || 'Scrum Daddy Bless Me'
    this.description = data.description || 'Scrum Daddy Bless Me'
    this.like = data.like || 'Scrum Daddy Bless Me'

  }

  //   postedBy: {type: Schema.Types.ObjectId, ref:'account'},
  //   title: {type: String, maxLength: 60, required: true},
  //   bodyUrl: {type: String, maxLength: 300, required: true},
  //   description: {type: String, maxLength: 100},
  //   like: {type: Number},
  get PostTemplate() {
    return `
    <section class="d-flex justify-content-center">
      <div onclick="app.PostController.openPost('${this.id}')" role="button" class="card border-light bg-transparent text-center m-2" style="width: 30rem;">
        <img src="${this.imgUrl}" class="card-img-top" alt="its a picture!">
        <div class="card-body bg-">
          <h5 class="card-title">${this.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${this.description}</h6>
          <p class="card-text">${this.body}</p
        </div>
      </div>
    </section>
    `
  }
}