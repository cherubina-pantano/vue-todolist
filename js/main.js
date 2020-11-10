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
    // show: false,

  },

  methods: {
    addNewTodo() {
      this.todos.push({text: this.todo});
    },

    deleteTodo(index) {
      this.todos.splice(index, 1);
    },

    // empityList() {
    //   if (this.todos.leght == 0) {
    //     this.show = true;
    //     console.log('Lista vuota');
    //   }
    //   else {
    //     this.show = false;
    //     console.log('todos' + todos);
    //   }
    // }
  }

});
