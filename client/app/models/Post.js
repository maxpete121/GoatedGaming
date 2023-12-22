export class Post {
  constructor(data) {
    this.postedBy = data.postedBy || 'Scrum Daddy Bless Me'
    this.title = data.title || 'Scrum Daddy Bless Me'
    this.bodyUrl = data.bodyUrl || 'Scrum Daddy Bless Me'
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
      <div class="card border-light bg-transparent text-center m-2" style="width: 30rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body bg-">
          <h5 class="card-title">${this.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${this.description}</h6>
          <p class="card-text">${this.bodyUrl}</p>
        </div>
      </div>
    </section>
    `
  }
}