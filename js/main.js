const app = new Vue({
  el: '#app',
  data: {
    todo: '',
    indexTodo: 0,
    todos: [
      {text: 'Fare la spesa'},
      {text: 'Fare il bucato'},
      {text: 'Andare in banca'},
    ],
  },

  methods: {
    addNewTodo() {
      if(this.todo.trim() !== '') {
        this.todos.push({text: this.todo});
        this.todo = '';
      }

    },

    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  }
});
