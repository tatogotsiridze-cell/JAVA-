const students = {
 firstName: "nika", 
    lastName: "gelashvili",
    grades: [ 70, 80, 60],

      getAverage: function() {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
          sum += this.grades[i];
        }
        return sum / this.grades.length;
      },
      isPassing: function() {
        return this.getAverage() >= 50;
      }
};
 
console.log("Average: " + students.getAverage() + ", Passing: " + students.isPassing());
