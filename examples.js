$(document).ready(function () {

    //Find checked checkboxes in a table and get his name attribute.
    $('#btn').click(function(){
        var cbNames[];
        $('#table td').find('input:checkbox:checked').each(function (i) {
          cbNames[i] = ($(this).attr('name'));
        });
    });

    //Send an array to Controller in ASP.NET MVC
    $.ajaxSettings.traditional = true; // <-- Important
    $('#btn').click(function () {
        var array = [];
        var url = '/Controller/Action';
        $.post(url, { array : array });
        });
    });
    
    //Get element by name
    $("button[name=someName]").click(function () {
        alert($(this).attr('name'));        
    });

//test
});
