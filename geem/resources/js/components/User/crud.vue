<template>
    <div class="container">
        <h2 class="text-center">{{title}}</h2>
        <form action="">

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="document">Documento</label>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tipo</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">CC</a>
                                <a class="dropdown-item" href="#">CE</a>
                            </div>
                        </div>
                        <input type="text" class="form-control" aria-label="Text input with dropdown button">
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="email">Correo eletronico</label>
                    <input type="email" name="email" id="email" class="form-control">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" id="password" class="form-control">
                </div>
                <div class="form-group col-md-6">
                    <label for="password-confirm">Confirmar contraseña</label>
                    <input type="password" name="password-confirm" id="password-confirm" class="form-control">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="name">Nombre</label>
                    <input type="text" name="name" id="name" class="form-control">
                </div>
                <div class="form-group col-md-6">
                    <label for="lastname">Apellido</label>
                    <input type="text" name="lastname" id="lastname" class="form-control">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="phone">Celular</label>
                    <input type="text" name="phone" id="phone" class="form-control">
                </div>
                <div class="form-group col-md-6">
                    <label for="city">Ciudad</label>
                    <select name="city" id="city" class="form-control">
                        <option value="1">Bogota</option>
                        <option value="2">Medellin</option>
                        <option value="3">Villavicencio</option>
                    </select>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Crear usuario',
            }
        }
    }

</script>

'type_document',
'document',
'email',
'password',
