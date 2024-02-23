<script setup>
import TodoItem from "./TodoItem.vue";


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
                    <input class="form-control" type="text" />
                    <button type="button" class="btn btn-primary mt-2">
                      Add Task
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <TodoItem />
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
</style>
