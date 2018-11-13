//Author: Cantfirmed

//$(document).on("load, change", function(){
//$(document).ready(function(){
//    $(document).change(function(){  //Ändern wenn Seite lädt?   

$(document).on("load change", function(){
    if($("#firstName").val()==""){
        $("#firstNameMandatory").show(); 
    }else{ 
        $("#firstNameMandatory").hide();   
    }

    if($("#lastName").val()==""){
        $("#lastNameMandatory").show(); 
    }else{ 
        $("#lastNameMandatory").hide();     
    }
    
    if($("#newsletter").prop('checked')&&$("#email").val()==""){
        $("#emailMandatory").show();
    }else{
        $("#emailMandatory").hide();
    }

    if($("#mediaChannelSelect option:selected").text()=="Other"){
        $("#otherMediaChannel").show();
    }else{
        $("#otherMediaChannel").hide();
    }            
});

       
        
    

