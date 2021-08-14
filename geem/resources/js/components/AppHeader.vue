<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <Navbar></Navbar>
      </div>
    </div>
  </nav>
</template>
<script>
import Navbar from './Navbar.vue'

export default {
  name: 'app-header',
  components: { Navbar }
}
</script>