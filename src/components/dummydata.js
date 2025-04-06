class Month {
  title = "";
  budget = 0;
  days = [];
  fields = [];
  constructor(title, budget, monthLength) {
    this.title = title;
    this.budget = budget;
    for (let _ = 0; _ < monthLength; _++) {
      this.days.push(new Day([]));
    }
  }
  addField(fieldName) {
    this.fields.push(fieldName);
    this.days.forEach((day) => {
      day.addField(fieldName);
    });
  }
  addFields(...fieldNames) {
    fieldNames.forEach((fieldName) => {
      this.fields.push(fieldName);
      this.days.forEach((day) => {
        day.addField(fieldName);
      });
    });
  }
  editField(oldName, newName) {
    if (!this.fields.includes(oldName)) {
      throw new Error("Field does not exist");
    }
  }
  total() {
    return (
      this.days.length &&
      this.days
        .map((day) => day.total())
        .reduce((prev, current) => prev + current)
    );
  }
}

class Day {
  entries = new Map();
  constructor(fieldNames) {
    fieldNames.forEach((fieldName) => {
      this.addField(fieldName);
    });
  }
  addFields(...fieldNames) {
    fieldNames.forEach((fieldName) => {
      this.addField(fieldName);
    });
  }
  addField(fieldName) {
    if (this.entries.has(fieldName)) {
      throw new Error("Field already exists");
    }
    this.entries.set(fieldName, Math.floor(Math.random() * 700));
  }
  updateField(fieldName, value) {
    if (!this.entries.has(fieldName)) {
      throw new Error("Field does not exists");
    }
    this.entries.set(fieldName, value);
  }
  total() {
    let sum = 0;
    this.entries.forEach((value) => {
      sum += value;
    });
    return sum;
  }
}

const dummyMonth = new Month("Avisekh", 6000, 31);
dummyMonth.addFields("Food", "Grocery", "Gym");
export { dummyMonth };

// class Month {
//   title = "";
//   budget = 0;
//   day = [];
//   field = [];
//   constructor(title, budget, numberOfDays) {
//     this.title = title;
//     this.budget = budget;
//     for (let _ = 0; _ < numberOfDays; _++) {
//       this.day.push(new Day(this.field));
//     }
//   }
//   addfields(...fieldNames){
//     fieldNames.forEach((fieldName)=>{
//       this.field.push(fieldName)
//       this.day.addfield()
//     })

//   }
// }

// class Day {
//   entries = new Map();
//   constructor(fieldArray) {
//     fieldArray.forEach((element) => {});
//   }
// }
