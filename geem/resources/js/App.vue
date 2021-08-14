<template>
    <div class="app">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
    name: 'app',
    components: { AppHeader, AppFooter }
}
</script>