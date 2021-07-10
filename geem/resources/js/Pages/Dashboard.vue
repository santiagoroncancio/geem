<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Bienvenido {{people.name}}</div>
                    <div class="card-body">
                        {{people.status}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                people: {}
            }
        },
        methods: {
            async listar() {
                const ent = await axios.post('/api/user');
                this.people = ent.data;
            }
        },
        created() {
            this.listar();
        }
    }
</script>
