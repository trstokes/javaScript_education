class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
  
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating); 
      return ratingsSum / this.ratings.length;
    }
  
    addRating(value) {
      this.ratings.push(value);
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages){
      super(title);
      this._author = author;
      this._pages = 0;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  const black = new Movie('Black', 'Tehran Stokes',130)
  //console.log(black.runTime)
  black.addRating(5)
  black.toggleCheckOutStatus()
  console.log(black.isCheckedOut)
  