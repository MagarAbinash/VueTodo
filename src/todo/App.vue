<template>
  <h1>ToDo App</h1>
  <form @submit.prevent="addTodo">
      <label>What Todo?</label>
      <input type="text" name="newtodo" v-model="newtodo">
      <button>Add ToDo</button>
  </form>
    <button @click="markAllDone">Mark All done</button>
  <ul>
      <li v-for="(todo, index) in todos" :key="todo.id" class="todo">
          <h3 :class="{ done: todo.done }" @click="toggleDone(todo)">{{ todo.content }}</h3>
          <button @click="removeTodo(index)">Remove todo</button>
      </li>
  </ul>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
      const newtodo = ref('');
      const todos = ref([]);
      function addTodo() {
          todos.value.push({
              id: Date.now,
              done: false,
              content: newtodo.value,
          });
          newtodo.value= '';
      }

      function toggleDone(todo) {
          todo.done = !todo.done;
      }
      function removeTodo(index) {
          todos.value.splice(index, 1);
      }
      function markAllDone() {
          todos.value.forEach((todo)=> todo.done = true);
      }
      return {
          addTodo,
          newtodo,
          todos,
          toggleDone,
          removeTodo,
          markAllDone,
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.done{
    text-decoration: line-through;
}
.todo{
    cursor: pointer;
}
</style>
