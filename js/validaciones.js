$(document).ready(function(){
    //FOrmulario INICIO SESIÓN
    $("#iniciar").submit(function(e){
        e.preventDefault();
    })

    // FORMULARIO RECUPERAR CONTRASEÑA
    $("#formRecupClave").submit(function(e){
        e.preventDefault();
        var correo1 = $("#correo1").val();
        var correo2 = $("#correo2").val();

        let msj = "";
        let entrar = false;

        if(correo1!=correo2){
            msj+="Los correos ingresados deben ser iguales <br>";
            entrar = true;
        }

        if(entrar){
            $("#mensajes").html(msj);
        }
        else{
            $("#mensajes").css({'color':'blue'});
            $("#mensajes").html("Correo de recuperación enviado");
            $("#formRecupClave")[0].reset();
        }
    })

    // FORMULARIO CAMBIAR CONTRASEÑA
    $("#cambiarClave").submit(function(e){
        e.preventDefault();
        var clave = $("#claveActual").val();
        var claveNu1 = $("#claveNueva1").val();
        var claveNu2 = $("#claveNueva2").val();

        let msj = "";
        let entrar = false;

        if(claveNu1.trim().length < 6){
            msj+="La contraseña nueva de tener al menos 6 caracteres <br>";
            entrar = true;
        }
        if(claveNu1==clave){
            msj+="Las contraseñas nuevas deben ser distinta a la contraseña antigua <br>"
            entrar = true;
        }
        if(claveNu1!=claveNu2){
            msj+="Las contraseñas nuevas deben ser iguales <br>"
            entrar = true;
        }


        if(entrar){
            $("#mensajes").html(msj);
        }
        else{
            $("#mensajes").css({'color':'blue'});
            $("#mensajes").html("Contraseña cambiada exitósamente");
            $("#cambiarClave")[0].reset();
        }
    })

    // FORMNULARIO CONTÁCTANOS
    $("#formContanto").submit(function(e){
        e.preventDefault();

        var nom = $("#nombre").val();

        let msj = "";
        let entrar = false;

        if(nom.trim().length < 4){
            msj+="EL nombre de tener al menos 4 caracteres <br>";
            entrar = true;
        }

        if(entrar){
            $("#mensajes1").html(msj);
        }
        else{
            $("#mensajes1").html("");
            $("#mensajes2").css({'color':'blue'});
            $("#mensajes2").html("Mensaje enviado exitosamente");
            $("#formContanto")[0].reset();
        }
    })

    // FORMULARIO REGISTRO DE CUENTA
    $("#formRegistro").submit(function(e){
        e.preventDefault();

        var nom = $("#nomCompleto").val();
        var email = $("#correoRegistro").val();
        var direcc = $("#direccion").val();
        var region = $("#region").val();
        var comuna = $("#comuna").val();
        var numTel = $("#telefono").val();
        var clave1 = $("#clave1").val();
        var clave2 = $("#clave2").val();

        let entrar = false;
        let msjClaves = "";

        $("#msjNom").html("");
        $("#msjDireccion").html("");
        $("#msjRegion").html("");
        $("#msjComuna").html("");
        $("#msjTel").html("");
        $("#msjClave").html("");

        if(nom.trim().length < 4){
            $("#msjNom").html("EL nombre debe tener al menos 4 caracteres");
            entrar = true;
        }

        if(direcc.trim().length < 4){
            $("#msjDireccion").html("La dirección debe tener al menos 4 caracteres");
            entrar = true;
        }

        if(region=="Escoge tu Región"){
            $("#msjRegion").html("Seleccionar región")
            entrar = true;
        }

        if(numTel.trim().length != 9){
            $("#msjTel").html("Numero de telefono de 9 dígitos");
            entrar = true;
        }

        if(comuna=="Escoge tu Comuna"){
            $("#msjComuna").html("Seleccionar comuna")
            entrar = true;
        }

        if(clave1.trim().length < 6){
            msjClaves+="La contraseña de tener al menos 6 caracteres <br>";
            entrar = true;
        }

        if(clave1!=clave2){
            msjClaves+="Las contraseñas deben ser iguales";
            entrar = true;
        }

        if(entrar){
            $("#msjClave").html(msjClaves);
        }
        else{
            $("#msj").css({'color':'blue'});
            $("#msj").html("Cuenta creada exitosamente");
            $("#formRegistro")[0].reset();
        }
        
        
    })

    // FORMULARIO EDITAR PRODUCTO
    $("#agregarP").submit(function(e){
        e.preventDefault();

        var nombre = $("#nombreProducto").val();
        var precio = $("#precioP").val();
        var desCorta = $("#descripcionCorta").val();
        var desLarga = $("#descripcionDetallada").val();
        var cantidad = $("#cantidad").val();
        var categoria = $("#categoria").val();

        $("#msjNombre").html("");
        $("#msjPrecio").html("");
        $("#msjCorta").html("");
        $("#msjDetallada").html("");
        $("#msjCantidad").html("");
        $("#msjCategoria").html("");

        let entrar = false;

        if(nombre.trim().length < 4 || nombre.trim().length > 15){
            $("#msjNombre").html("EL nombre de producto no tiene la longitud válida");
            entrar = true;
        }

        if(precio == 0){
            $("#msjPrecio").html("Precio debe ser mayor a 0")
            entrar = true;
        }

        if(desCorta.trim().length < 4|| desCorta.trim().length >20){
            $("#msjCorta").html("La descripción no tiene la longitud válida");
            entrar = true;
        }

        if(desLarga.trim().length < 10|| desLarga.trim().length >200){
            $("#msjDetallada").html("La descripción no tiene la longitud válida");
            entrar = true;
        }

        if(cantidad == 0){
            $("#msjCantidad").html("Cantidad debe ser mayor a 0")
            entrar = true;
        }

        if(categoria=="Escoge La Categoría"){
            $("#msjCategoria").html("Seleccionar una categoría")
            entrar = true;
        }

        if(entrar){     
        }
        else{
            $("#msj").css({'color':'blue'});
            $("#msj").html("Producto Agregado");
            $("#agregarP")[0].reset();
        }



    })

    // FORMULARIO MENSAJES ADMIN
    $("#formMensaje").submit(function(e){
        e.preventDefault();
        $("#mensajes").css({'color':'blue'});
        $("#mensajes").html("Mensaje Enviado Satisfactoriamente")
    })









})