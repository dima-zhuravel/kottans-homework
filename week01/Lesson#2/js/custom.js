//Upload button
$('input[name="uploadfile"]').change(function(){
    var fileName = $(this).val();
    if(fileName == ""){
        $('.file-upload span').text('Upload a new file');
    }else{
        $('.file-upload span').text(fileName);
    }
    
});

//Pass Meter
$('#pswd').keyup(function() {
    var pswd = $('#pswd').val().length;
    var value = $("#checkPswd").attr("value", pswd);
});