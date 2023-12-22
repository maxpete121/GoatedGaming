export class Post {
  constructor(data) {
    this.postedBy = data.postedBy
    this.title = data.title
    this.bodyUrl = data.bodyUrl
    this.description = data.description
    this.like = data.like

  }

  // postedBy: {type: Schema.Types.ObjectId, ref:'account'},
  //   title: {type: String, maxLength: 60, required: true},
  //   bodyUrl: {type: String, maxLength: 300, required: true},
  //   description: {type: String, maxLength: 100},
  //   like: {type: Number},
  get PostTemplate() {
    return `
    <div>
      <h1>PoOST HI</h1>
    </div>
    `
  }
}