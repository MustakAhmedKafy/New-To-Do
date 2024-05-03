<script setup>
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";

const tasks = ref(["Task 1", "Task 2", "Task 3", "Task 4"]);
const newTask = ref("");

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  // Implement delete logic here
  tasks.value.splice(index, 1);
};
const updateTask = ({ index, task }) => {
  tasks.value[index] = task;
};
</script>

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
                    <input class="form-control" type="text" v-model="newTask" @keydown.enter.prevent="addTask" />
                    <button
                      type="button"
                      class="btn btn-warning border-0 mt-2"
                      @click="addTask"
                    >
                      Add Task
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h3 class="my-3">Task Name</h3>
            <!-- item -->
            <TodoItem
              v-for="(task, index) in tasks"
              :key="index"
              :task="task"
              :index="index"
              @delete-task="deleteTask"
              @update-task="updateTask"
            />
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.todo {
  height: 100vh;
}
.btn-warning {
  background-color: #ffcd33 !important;
  color: #000000 !important;
}
.btn-warning:hover {
  background-color: #fcc51f !important;
}
.accordion-button:focus {
  box-shadow: none !important;
}
.accordion-button:not(.collapsed) {
  background-color: #fdde81 !important;
  color: #000000 !important;
}

.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23577537'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style>
