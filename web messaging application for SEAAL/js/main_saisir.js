$(document).ready(function(){
    $flag=1;
    $("#dateA").focusout(function(){
        if($(this).val()==''){
            $(this).css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_name").text("* You have to enter your first name!");
        }
        else
        {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled',false);
            $("#error_name").text("");

        }
    });
    $("#exp").focusout(function(){
        if($(this).val()==''){
            $(this).css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_lastname").text("* You have to enter your Last name!");
        }
        else
        {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled',false);
            $("#error_lastname").text("");
        }
    });
    $("#dateA").focusout(function(){
        if($(this).val()==''){
            $(this).css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_dob").text("* You have to enter your Date of Birth!");
        }
        else
        {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled',false);
            $("#error_dob").text("");
        }
    });
    $("#typo").focusout(function(){
        $(this).css("border-color", "#2eb82e");

    });
    $("#age").focusout(function(){
        if($(this).val()==''){
            $(this).css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_age").text("* You have to enter your Age!");
        }
        else
        {
            $(this).css({"border-color":"#2eb82e"});
            $('#submit').attr('disabled',false);
            $("#error_age").text("");

        }
    });
    $("#phone").focusout(function(){
        $pho =$("#phone").val();
        if($(this).val()==''){
            $(this).css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_phone").text("* You have to enter your Phone Number!");
        }
        else if ($pho.length!=10)
        {
            $(this).css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_phone").text("* Lenght of Phone Number Should Be Ten");
        }
        else if(!$.isNumeric($pho))
        {
            $(this).css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_phone").text("* Phone Number Should Be Numeric");
        }
        else{
            $(this).css({"border-color":"#2eb82e"});
            $('#submit').attr('disabled',false);
            $("#error_phone").text("");
        }

    });

    $( "#submit" ).click(function() {
        if($("#myName" ).val()=='')
        {
            $("#myName").css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_name").text("* You have to enter your first name!");
        }
        if($("#lastname" ).val()=='')
        {
            $("#lastname").css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_lastname").text("* You have to enter your Last name!");
        }
        if($("#dob" ).val()=='')
        {
            $("#dob").css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_dob").text("* You have to enter your Date of Birth!");
        }
        if($("#age" ).val()=='')
        {
            $("#age").css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_age").text("* You have to enter your Age!");
        }
        if($("#phone" ).val()=='')
        {
            $("#phone").css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_phone").text("* You have to enter your Phone Number!");
        }
    });



});