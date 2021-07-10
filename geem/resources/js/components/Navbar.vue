<template>
    <nav class="navBar">
        <ul class="navBar__link">
            <li><router-link :to="{ name:'home'}">Home</router-link></li>
            <li><router-link :to="{ name:'user'}">User</router-link></li>
            <li><router-link :to="{ name:'dashboard'}">Dashboard</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'navbar'
}
</script>