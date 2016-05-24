//Upload button
$('input[name="uploadfile"]').change(function(){
    var fileName = $(this).val();
    if(fileName == ""){
        $('.file-upload span').text('Upload a new file');
    }else{
        $('.file-upload span').text(fileName);
    }
    
});