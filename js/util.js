var util = {

    mostrarMensajeError: function(mensaje){
        Swal.fire({
            text: mensaje,
            allowOutsideClick: false,
            showConfirmButton: false,
            icon: 'error',
            timer: 2000
        })
    },

    mostrarMensajeAdvertencia: function(mensaje){
        Swal.fire({
            text: mensaje,
            allowOutsideClick: false,
            showConfirmButton: false,
            icon: 'warning',
            timer: 1500
        })
    },

    verificarCampos: function(datosRegistro){
        for(let clave in datosRegistro){
            
            let campo = datosRegistro[clave];

            if(campo == ""){
                this.mostrarMensajeAdvertencia("Ingrese los datos en los campos faltantes");
                return false;
            }

            switch(clave){
                case 'estado':
                {
                    
                    if(!Number.isInteger(parseInt(campo))){
                        this.mostrarMensajeAdvertencia("Seleccione el Estado de donde proviene");
                        return false;
                    }
                    break;
                }
                case 'correo':
                {
                    let correo = $('#txtCorreoVerificacion').val().toUpperCase();
                    if(campo != correo){
                        this.mostrarMensajeAdvertencia("Verifique que el correo electrónico sea el mismo");
                        return false;
                    }
                    else if(this.verificarEmail(campo) != true || this.verificarEmail(correo) != true){
                        this.mostrarMensajeAdvertencia("Verifique que el correo electrónico tenga el siguiente formato: correo@provedor.com");
                        return false;
                    }
                    break;
                }
            }


        }
    },

    peticionAPI: async function(query){

        const url = "";

        const opts = {
            method: "POST",
            origin: "",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            credentials: "same-origin",
            body: JSON.stringify({ query })
        };

        return await fetch(url,opts)
    },

    downloadiM: function() {
        var url = document.getElementById("qrimg").src;
        download(url);
        $("#btn-ok").removeAttr("disabled");
    },
      
    createQR: function(token) {
        var cdata = encodeURIComponent(token);
        document.getElementById("mostrar").innerHTML =
        "<button class='bc' onclick='util.downloadiM()'><img id='qrimg' src='https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" + cdata + "'/></button>";
        var btn = document.getElementsByClassName("swal2-cancel");
        $(btn).attr("id","btn-ok");
        $("#btn-ok").attr("disabled","");
    },

    verificarEmail: function(correo) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(correo);

    }


}