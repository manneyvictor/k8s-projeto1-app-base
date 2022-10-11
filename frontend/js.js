$("#button-blue").on("click", function () {

    var txt_nome = $("#name").val();
    var txt_email = $("#email").val();
    var txt_comentario = $("#comment").val();

    $.ajax({
        url: "${IP_LOCAL}:30006 ou ${IP_LOADBALANCER}",

        type: "post",
        data: { nome: txt_nome, comentario: txt_comentario, email: txt_email },
        beforeSend: function () {

            console.log("Tentando enviar os dados....");

        }
    }).done(function (e) {
        alert("Dados Salvos");
    })

});