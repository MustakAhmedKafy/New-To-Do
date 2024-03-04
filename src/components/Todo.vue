<template>
  <div>
    <div class="todo d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Add Task
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <input class="form-control" type="text" v-model="newTask" />
                    <button type="button" class="btn btn-primary mt-2" @click="addTask">
                      Add Task
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <TodoItem v-for="(task, index) in tasks" :key="index" :task="task" />
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TodoItem from "./TodoItem.vue";

const tasks = ref([
  "Task 1",
  "Task 2",
  "Task 3",
  "Task 4"
]);
const newTask = ref('');

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
}
</script>

<style>
.todo {
  height: 100vh;
}
</style>
