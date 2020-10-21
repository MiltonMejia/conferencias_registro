<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <?php require_once('modules/head.php');?>
</head>

<body class="bg-gn">
    <section class="bg-white sh container my-mid np w-ad">
        <article class="mx-4 py-4 border-bottom">
            <a class="font-weight-bold bt">BIENVENIDO!</a>
            <a class="font-weight-bold red-c">Coloca correctamente los datos</a>
        </article>
        <form>
            <section class="mt-4 pb-8">
                <article class="row mx-3">
                    <article class="col-lg-8">
                        <label class="matter-radio mr-3">
                            <input type="radio" name="group" value="1" checked>
                            <span>Alumno</span>
                        </label>
                        <label class="matter-radio">
                            <input type="radio" name="group" value="2">
                            <span>Invitado</span>
                        </label>
                    </article>
                    <article class="col-lg-4">
                        <label id="normal" class="matter-textfield-filled num w-100">
                            <input id="txtFolio" id="data" placeholder=" " required/>
                            <span>Numero de folio o boleto</span>
                        </label>
                    </article>
                </article>
                <article class="row mx-3 mt-4">
                    <article class="col-lg-9">
                        <label id="normal" class="matter-textfield-filled w-inpn">
                            <input id="txtNombre" placeholder=" " required/>
                            <span>Nombre</span>
                        </label>
                        <label id="normal" class="matter-textfield-filled w-inpn">
                            <input id="txtApellidoPaterno" placeholder=" " required/>
                            <span>Apellido paterno</span>
                        </label>
                        <label id="normal" class="matter-textfield-filled w-inpn">
                            <input id="txtApellidoMaterno" placeholder=" " required/>
                            <span>Apellido materno</span>
                        </label>
                    </article>
                    <article class="col-lg-3">
                        <label id="normal" class="matter-textfield-filled w-usu float-right">
                            <input id="txtFacebook" placeholder=" " required/>
                            <span>Usuario de Facebook</span>
                        </label>
                    </article>
                </article>
                <article class="row mx-3 mt-4">
                    <article class="col-lg-6">
                        <label id="normal" class="matter-textfield-filled w-100">
                            <input id="txtCorreo" type="email"  placeholder=" " required/>
                            <span>Correo electronico</span>
                        </label>
                    </article>
                    <article class="col-lg-6">
                    <label id="normal" class="matter-textfield-filled w-100">
                            <input id="txtCorreoVerificacion" type="email" placeholder=" " required/>
                            <span>Confirmar correo electronico</span>
                        </label>
                    </article>
                </article>
                <article class="row mx-3 mt-4">
                    <article class="col-lg-6">
                    <label id="normal" class="matter-textfield-filled w-100">
                            <input id="txtTelefono" placeholder=" " type="tel" required/>
                            <span>Numero telefonico</span>
                        </label>
                    </article>
                    <article class="col-lg-6">
                        <select id="txtEstados" name="estado" class="stl w-100">
                            <option selected>Seleccionar estado</option>
                        </select>
                    </article>
                </article>
                <article>
                </article>
            </section>
            <section class="bg-g">
                <button type="button" id="cnt" class="btn py-4 fbc font-weight-bold text-white born w-100">CONTINUAR</button>
            </section>
        </form>
    </section>
</body>
<?php require_once('modules/footer-tags.php'); ?>
</html>