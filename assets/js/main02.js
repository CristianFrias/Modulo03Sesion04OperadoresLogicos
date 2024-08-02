$(document).ready(function() {

    var deportistas = []
    $("#formulario-40").submit(function(even) {
        even.preventDefault();
        $("#msg-run, #msg-edad, #msg-estatura, #msg-peso").html("")

        var run = $("#txt-run").val();
        var edad = $("#txt-edad").val();
        var estatura = $("#txt-estatura").val();
        var peso = $("#txt-peso").val();

        if(run == "") {
            return $("#msg-run").html("Ingresar el RUN")
        }

        if(edad == "") {
            return $("#msg-edad").html("Ingresar la edad")
        }

        if(estatura == "") {
            return $("#msg-estatura").html("Ingresar la estatura")
        }

        if(peso == "") {
            return $("#msg-peso").html("Ingresar el peso")
        }

        var deportista = {
            run: run,
            edad: edad,
            estatura: estatura,
            peso: peso,
            admitido: (edad <= 18 && estatura >= 180 && peso <= 80)
        }

        deportistas.push(deportista)
        $("#txt-run, #txt-edad, #txt-estatura, #txt-peso").val("")
        listarDeportistas(deportistas)
    })

    function listarDeportistas(deportistas) {
        $("#listado-deportistas tbody").html("");
        for (const deportista of deportistas) {
            $("#listado-deportistas tbody").append(`
                <tr>
                    <td>${deportista.run}</td>
                    <td>${deportista.edad}</td>
                    <td>${deportista.estatura}</td>
                    <td>${deportista.peso}</td>
                    <td class="${deportista.admitido ? "bg-success-subtle" : "bg-danger-subtle"}">
                        ${deportista.admitido ? "Admitido" : "No Admitido"}
                    </td>
                </tr>
            `)
        }
    }
})