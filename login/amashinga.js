$(document).ready(function () {


$(document).on('click', '.register', function (e) {
 
    var name = $('#name').val();
    var password = $('#password').val();
    var surname = $('#surname').val();
    var username = $('#username').val();
    $.ajax({

        url: 'https://cors-anywhere.herokuapp.com/https://amashingamusic.co.za/sub/api/v1/user',
        type: 'POST',
        data: {
            name: name,
            password: password,
            surname: surname,
            username: username
        },
        dataType: 'json',
        success: function (data) {
            console.log('Data: ' + data.message);
        },
        error: function (request, error) {
        console.log('Data: ' + data.message);
        }
    });
});



$(document).on('click', '.add-artist', function (e) {
    var password = $('#password').val();
    var username = $('#username').val();
    $.ajax({

        url: 'https://cors-anywhere.herokuapp.com/https://amashingamusic.co.za/sub/api/v1/artist',
        type: 'POST',
        data: {

            // password: password,

            // username: username
        },
        dataType: 'json',
        success: function (data) {
            console.log('yOU CAN LOGIN');
        },
        error: function (data) {
            console.log('cHECK PASSWORD');
        }
    });
});


  
});