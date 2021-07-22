<template>
  <div>
    <BaseInputText v-model="newTodoText" placeholder="New todo" @keydown.enter="addTodo"/>
    <ul v-if="todos.length">
      <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo" @do="changeTodo"/>
    </ul>
    <p v-else>
      Nothing left in the list. Add a new todo in the input above.
    </p>
  </div>
</template>

<script>
import BaseInputText from "./BaseInputText";
import TodoListItem from "./TodoListItem";

let nextTodoId=1;

export default {
  components : {
    BaseInputText, TodoListItem
  },
  data() {
    return {
      newTodoText : '',
      todos : [],
    }
  },
  methods : {
    addTodo() {
      const trimmedText = this.newTodoText.trim()
      if(trimmedText) {
        this.todos.push({
          id : nextTodoId++,
          text : trimmedText,
          do : '안 함',
          check : false,

        });
        this.newTodoText='';
      }

    },
    removeTodo (idToRemove) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== idToRemove;
      });
    },
    changeTodo (todoId) {
      if(this.todos[todoId-1].check === false) {
        this.todos[todoId-1].check = true;
         this.todos[todoId-1].do = '함';
      } else {
        this.todos[todoId-1].check = false;
         this.todos[todoId-1].do= '안 함';
      }

      // todoId;
    }

  }
}
</script>

<style scoped>

</style>