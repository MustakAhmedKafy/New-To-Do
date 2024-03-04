<template>
  
 <div>
  <!-- <h4 class=""></h4> -->
   <div class="d-flex bg-light justify-content-between align-items-center rounded p-2">
    <div class="ps-3">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label ms-2" for="flexCheckIndeterminate">
        {{ task }}
      </label>
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
          <li><a class="dropdown-item" href="#">Start</a></li>
          <li><a class="dropdown-item" href="#">Edit</a></li>
          <li><a class="dropdown-item" href="#">Delete</a></li>
        </ul>
      </div>
    </div>
  </div>
 </div>
</template>

<script setup>
props: {
  task: String
}
</script>

<style scoped>
.dropdown-toggle::after {
  display: none;
}
.dropdown-toggle{
  padding-bottom: 8px;
}

.dropdown-menu li {
  margin: 0px 4px;
  border-radius: 5px;
}
.dropdown-menu .dropdown-item{
  border-radius: 5px;
}
</style>
