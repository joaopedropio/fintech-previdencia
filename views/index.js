$('#calculate').click(function(e) {
    var fail = 0;
    var e = $('#e').val();
    if(e == null || e == "") {
        $('#e').css("border-color", "red");
        fail++;
    } else {
        $('#e').css("border-color", "#FFF");
    }
    var ir = $('#ir').val();
    if(ir == null || ir == "") {
        $('#ir').css("border-color", "#F00");
        fail++;
    } else {
        $('#ir').css("border-color", "#FFF");
    }
    var id = $('#id').val();
    if(id == null || id == "") {
        $('#id').css("border-color", "#F00");
        fail++;
    } else {
        $('#id').css("border-color", "#FFF");
    }
    var ia = $('#ia').val();
    if(ia == null || ia == "") {
        $('#ia').css("border-color", "#F00");
        fail++;
    } else {
        $('#ia').css("border-color", "#FFF");
    }
    var i = $('#i').val();
    if(i == null || i == "") {
        $('#i').css("border-color", "#F00");
        fail++;
    } else {
        $('#i').css("border-color", "#FFF");
    }
    if(fail > 0){
        $('#aviso').text("Não pode haver campos em branco");
        return;
    } else if(id >= ia) {
        $('#aviso').text("Idades inconsistentes");
        return;
    } else if(id <= 0 || i <= 0 || ia <= 0 || ir <= 0 || e <= 0){
        $('#aviso').text("Dados inconsistentes");
        return;
    } else {
        $('#aviso').text("");
    }
    $.ajax({
	    method: "POST",
	    url: "./api/previdencia",
	    contentType: "application/json",
	    data: JSON.stringify({
            name: name,
            e: e,
            ir: ir,
            id: id,
            ia: ia,
            i : i
        })
	})
    .done(function(data) {
        $('#response').html(data);
        $('#nameInput').hide();
    });
});