$(document).ready(function(){
    $("#formulario").submit(function(even){
        even.preventDefault();

        $("#msg-n1, #msg-n2").html("")

        var n1 = $("#txt-n1").val();
        var n2 = $("#txt-n2").val();

        if (n1 == "") {
            return $("#msg-n1").html("Ingresar primer número")
        }
        if (n2 == "") {
            return $("#msg-n2").html("Ingresar segundo número")
        }

        // var mostrar
        // if (n1 > 0 || n2 > 0) {
        //     mostrar = "Si"
        // } else {
        //     mostrar = "No"
        // }

        // var mostrar = (n1 > 0 || n2 > 0) ? "Si" : "No"

        var exito = (n1 > 0 || n2 > 0) ? "Si" : "No"

        if (exito == "Si") {
            $("#result").removeClass("alert-danger").addClass("alert-success")
            $("#result").html(`Proceso exitoso los número ingresados fueron ${n1} y ${n2}`)
        } else {
            $("#result").removeClass("alert-success").addClass("alert-danger")
            $("#result").html(`Proceso fallido, ambos número son negativos`)
        }
    })
})