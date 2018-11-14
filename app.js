//Author: Cantfirmed
//$(document).on("load, change", function(){
//$(document).ready(function(){
//    $(document).change(function(){  //Ändern wenn Seite lädt?   
var correct;
$("#otherMediaChannel").hide();
$("#emailMandatory").hide();
$("#submit").hide(); //Am Anfang hiden, weil es bei load aus irgendeinem Grund nicht hided ist von Anfang an
$(document).on("ready load change", function () {
    correct = true;
    if ($("#firstName").val() == "") {
        $("#firstNameMandatory").show();
        correct = false;
    }
    else {
        $("#firstNameMandatory").hide();
    }
    if ($("#lastName").val() == "") {
        $("#lastNameMandatory").show();
        correct = false;
    }
    else {
        $("#lastNameMandatory").hide();
    }
    if ($("#newsletter").prop('checked') && $("#email").val() == "") {
        $("#emailMandatory").show();
        correct = false;
    }
    else {
        $("#emailMandatory").hide();
    }
    if ($("#mediaChannelSelect option:selected").text() == "Other") {
        $("#otherMediaChannel").show();
        if ($("#otherMediaChannel").val() == "") {
            correct = false;
        }
    }
    else {
        $("#otherMediaChannel").hide();
    }
    if (correct) {
        $("#submit").show();
    }
    else {
        $("#submit").hide();
    }
});
