<template>
  <div>
    <h4 class="">{{ taskName }}</h4>
    <div
      class="d-flex bg-light justify-content-between align-items-center rounded p-2 task-area"
      :style="{ backgroundColor: taskStarted ? '#ffd966 !important' : '' }"
    >
      <div class="ps-3" @dblclick="editTask">
        <template v-if="!editing">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            @change="toggleCheckbox"
          />
          <label
            class="form-check-label ms-2"
            :class="{ 'text-decoration-line-through': isChecked }"
            for="flexCheckIndeterminate"
          >
            {{ task }}
          </label>
        </template>
        <template v-else>
          <input
            class="form-control"
            type="text"
            v-model="editTaskName"
            @keyup.enter="saveEdit"
            @blur="saveEdit"
          />
        </template>
      </div>
      <div>
        <div class="dropdown">
          <a
            class="btn dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </a>

          <ul class="dropdown-menu">
            <li>
              <a @click="startTask" class="dropdown-item" href="#">Start</a>
            </li>
            <li>
              <a class="dropdown-item" @click="editTask" href="#">Edit</a>
            </li>
            <li>
              <a @click="deleteTaskCallback" class="dropdown-item" href="#">Delete</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {  defineEmits, ref } from "vue";

const props = defineProps({
  task: String,
  index: Number,
});

const isChecked = ref(false);
const taskStarted = ref(false);
const editing = ref(false);
const editTaskName = ref(props.task);

const emit = defineEmits(["deleteTask", "updateTask"]);

const deleteTaskCallback = () => {
  emit("deleteTask", props.index);
};

const toggleCheckbox = () => {
  isChecked.value = !isChecked.value;
};

const startTask = () => {
  taskStarted.value = true;
};

const editTask = () => {
  editing.value = true;
};

const saveEdit = () => {
  if (editTaskName.value.trim() !== "") {
    emit("updateTask", { index: props.index, task: editTaskName.value });
    editing.value = false;
  } else {
    editTaskName.value = props.task; // Revert to original value if empty
    editing.value = false;
  }
};
</script>


<style scoped>
.dropdown-toggle::after {
  display: none;
}
.dropdown-toggle {
  padding-bottom: 8px;
}

.dropdown-menu li {
  margin: 0px 4px;
  border-radius: 5px;
}
.dropdown-menu .dropdown-item {
  border-radius: 5px;
}
.dropdown-item:active{
  background-color: #fdde81;
  color: #000;
}

.form-check-input:checked {
    background-color: rgb(255, 140, 75);
    border-color: rgb(255, 140, 75);
}
.form-check-input:focus {
    border-color: rgb(255, 140, 75);
    outline: 0;
    box-shadow:none;
}
</style>
