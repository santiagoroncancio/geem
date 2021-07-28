<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h2 class="text-center">Login</h2>
                    </div>
                    <div class="card-body">
                        <div class="form">
                            <div class="form-group">
                                <label for="email">Correo eletronico</label>
                                <input type="email" name="email" id="email" class="form-control" v-model="user.email">
                            </div>
                            <div class="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" name="pass" id="password" class="form-control" v-model="user.password">
                            </div>
                            <input type="submit" value="Ingresar" class="btn btn-success btn-lg" @click="onLogin()">
                        </div> 
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
                user: { email:'randommail@mail.com', password: 'strongkey123', rememberMe: false}
            }
        },
        methods: {
            onLogin(){
                console.log('Bienvenido');
                const send = axios.post('/api/login', this.user);
                console.log("user "+ this.user.email);
            }
        },
        created() {
        
        }
    }

</script>
                            