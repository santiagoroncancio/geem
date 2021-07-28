<template>
    <div class="container">
        <h2 class="text-center">Usuarios</h2>
        <paginate name="people" :list="people" :per="10">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Documento</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="person of paginated('people')" :key="person.id">
                        <th scope="row">{{ person.id }}</th>
                        <td>{{ person.document }}</td>
                        <td>{{ person.name }}</td>
                        <td>{{ person.lastname }}</td>
                    </tr>
                </tbody>
            </table>
        </paginate>
        <paginate-links for="people" :classes="{'ul': ['pagination', 'justify-content-center'], 'li': 'page-item', 'a': 'page-link'}"></paginate-links>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VuePaginate from 'vue-paginate';
    Vue.use(VuePaginate);

    export default {
        data() {
            return {
                people: [],
                paginate: ['people']
            }
        },
        methods: {
            async listar() {
                const ent = await axios.get('/api/user');
                this.people = ent.data;
            }
        },
        created() {
            this.listar();
        }
    }

</script>
