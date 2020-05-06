<template>
  <div class="navbar">
    <nav class="nav-extended grey darken-2">
      <div class="nav-content">
        <router-link to="/">
          <span class="nav-title">Job Dashboard</span>
        </router-link>

        <a class="btn-floating btn-large halfway-fab deep-orange darken-1">
          <router-link to="/addnew">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<style>
.navbar nav {
  padding: 0 200px;
}
</style>
