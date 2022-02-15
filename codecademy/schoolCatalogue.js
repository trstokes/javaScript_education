class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents; 
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(value) {
      if(isNaN(value)) {
        console.log('Invalid input: newNumOfStudents must be set to a Number');
      } else {
        this._numberOfStudents = value;
      }
    }
  
    quickFacts () {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} level.`)
    }
  
    static pickSubstituteTeacher (substituteTeachers) {
      let randomIndex = Math.floor(substituteTeachers.length * Math.random())
      return substituteTeachers[randomIndex];
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    } 
  
    get pickupPolicy() {
      return this._pickupPolicy
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberofStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams
    }
  }