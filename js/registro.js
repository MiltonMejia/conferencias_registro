var Registro = (function(){

    var _folio;
    var _nombre;
    var _apellidoPaterno;
    var _apellidoMaterno;
    var _estado;
    var _correo;
    var _telefono;
    var _facebook;
    var _tipoAsistente;

    function ordenarDatos(datosAsistente)
    {
        _folio = datosAsistente.folio;
        _nombre = datosAsistente.nombre;
        _apellidoPaterno = datosAsistente.apellidoPaterno;
        _apellidoMaterno = datosAsistente.apellidoMaterno;
        _estado = datosAsistente.estado;
        _correo = datosAsistente.correo;
        _telefono = datosAsistente.telefono;
        _facebook = datosAsistente.facebook;
        _tipoAsistente = datosAsistente.tipoAsistente;
    }

    this.registrarAsistente = async function(datosAsistente)
    {
        
        await ordenarDatos(datosAsistente);

        const param = 'folio:"'+_folio+'",nombre:"'+_nombre+'",apellidoPaterno:"'+_apellidoPaterno+'",apellidoMaterno:"'+_apellidoMaterno+'",estado:'+_estado+',correo:"'+_correo+'",telefono:"'+_telefono+'",facebook:"'+_facebook+'",tipoAsistente:'+_tipoAsistente;
        const query = "mutation{crearAsistente("+param+"){ id }}";

        util.peticionAPI(query).then((response) =>
        {
            response.json().then((data) =>
            {
                if(response.headers.has("Token")){
                    let token = response.headers.get("Token");
                    Swal.fire({
                        html:
                        '<h6 class="bb">Da click en la imagen para guardar tu codigo de acceso</h6>'+
                        '<section id="mostrar"></section>',
                        footer: '<h5>El registro ha sido Exitoso!</h5>',
                        allowOutsideClick: false,
                        showConfirmButton: false,
                        onBeforeOpen: () => {
                        util.createQR(token);
                        },
                        showCancelButton: true,
                        cancelButtonText: 'Aceptar',
                        cancelButtonColor: '#A2BA28'
                    })
                }
                else
                {
                    util.mostrarMensajeError(data.errors[0].message);
                }
            });
            
        });
        
    }

    this.obtenerEstados = async function()
    {
        const query = `
            query {
                totalEstados{
                    id
                    nombre
                }
            }
        `;

        util.peticionAPI(query).then(data => data.json()).then(function(data){
            let estados = data.data.totalEstados;
            estados.map(function(estado){
                let opcion = document.createElement("option");
                opcion.value = estado.id;
                opcion.text = estado.nombre;
                document.getElementById("txtEstados").appendChild(opcion);
            });
        }) .catch(function(){
            util.mostrarMensajeError("Error al conectar con el servidor, intentelo más tarde");
        });
    }
})


var registro;
registro = new Registro();

$("#cnt").click(function () {

  let datosAsistente = {
    folio: $('#txtFolio').val().toUpperCase(),
    nombre: $('#txtNombre').val().toUpperCase(),
    apellidoPaterno: $('#txtApellidoPaterno').val().toUpperCase(),
    apellidoMaterno: $('#txtApellidoMaterno').val().toUpperCase(),
    estado: $('#txtEstados').val().toUpperCase(),
    correo: $('#txtCorreo').val().toUpperCase(),
    telefono: $('#txtTelefono').val().toUpperCase(),
    facebook: $('#txtFacebook').val().toUpperCase(),
    tipoAsistente: $('input[name="group"]:checked').val()
  }

  let vacio = util.verificarCampos(datosAsistente);
  if (vacio != false) {
    Swal.fire({
      title: '¿Seguro que desea continuar?',
      text: "Este proceso no podra ser cambiado!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#142652',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false
    }).then((result) => {
      if (result.value) {
          let registro = new Registro();
          registro.registrarAsistente(datosAsistente);
      }
    })
  }

});


window.addEventListener("load", async function (e) {
  data = await registro.obtenerEstados();
});
