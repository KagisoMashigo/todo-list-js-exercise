function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed\n`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");

task1.logState(); // Clean Cat Litter has not been completed
console.log("Cat returns looking furious\n")
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

task2.logState(); // Do Laundry Litter has not been completed
console.log("Partner returns looking furious\n")
task2.markCompleted();
task2.logState(); // Do Laundry Litter has been completed



