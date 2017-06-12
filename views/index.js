//Submit data when enter key is pressed
//$('#user_name').keydown(function(e) {
$('#calculate').click(function(e) {
	//var name = $('#user_name').val();
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
        return;
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
        //getNames();
    });
});

/*
//Retreive all the visitors from the database
function getNames(){
  $.get("./api/previdencia")
      .done(function(data) {
          if(data.length > 0) {
            $('#databaseNames').html("Database contents: " + JSON.stringify(data));
          }
      });
  }

  //Call getNames on page load.
  getNames();
*/