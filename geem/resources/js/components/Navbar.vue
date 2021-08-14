<template>
    <div class="navbar-nav">
        <router-link :to="{name: 'support'}" class="nav-link">Ayuda</router-link>
        <router-link :to="{name: 'login'}" class="nav-link">Iniciar sesión</router-link>
        <router-link :to="{ name:'home'}" class="nav-link" >Home</router-link>
        <router-link :to="{ name:'user'}" class="nav-link">User</router-link>
        <router-link :to="{ name:'dashboard'}" class="nav-link">Dashboard</router-link>
    </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>