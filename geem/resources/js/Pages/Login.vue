<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h2 class="text-center">Login</h2>
                    </div>
                    <div class="card-body">
                        <form action="" method="post">
                            <div class="form-group">
                                <label for="email">Correo eletronico</label>
                                <input type="email" name="email" id="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" name="password" id="password" class="form-control">
                            </div>
                            <input type="submit" value="Ingresar" class="btn btn-success">
                        </form>
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
