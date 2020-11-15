$(document).ready(function () {


    $(document).on('click', '.register', function (e) {

        var name = $('#name').val();
        var password = $('#password').val();
        var surname = $('#surname').val();
        var username = $('#username').val();
        $.ajax({

            url: 'https://amashingamusic.co.za/sub/api/v1/user',
            type: 'POST',
            data: {
                name: name,
                password: password,
                surname: surname,
                username: username
            },

            success: function (data) {
               window.location = 'login.html';
                },
                error: function (data) {
            $('.alert').append(`<div class="alert alert-danger alert-dismissible fade show" role="alert" >
                <strong>Please fill in all the details</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>`);
                },
        });
    });

    $(document).on('click', '.login', function (e) {
        var password = $('#password').val();
        var username = $('#username').val();
        $.ajax({

            url: 'https://amashingamusic.co.za/sub/api/v1/user/login',
            type: 'POST',
            data: {
                password: password,
                username: username
            },
            dataType: 'json',
              success: function (data) {
                      window.location = './newAdmin/index.html';
                  },
                  error: function (data) {
                      $('.alert').append(`<div class="alert alert-danger alert-dismissible fade show" role="alert" >
                <strong>Please fill in all the details</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>`);
                  },

        });
    });

    $(document).on('click', '.add-artist', function (e) {

        $.ajax({

            url: 'https://amashingamusic.co.za/sub/api/v1/artist',
            type: 'POST',
            data: {
                   active: "1",
                      apple_music: $('#apple_music').val(),
                      deezer: $('#deezer').val(),
                      name: $('#name').val(),
                      spotify: $('#spotify').val(),
                      stage_name: $('#stage_name').val(),
                      surname: $('#surname').val(),
                      youtube: $('#youtube').val(),
                      youtube_music: $('#youtube_music').val(),

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

 $.ajax({
     type: 'GET',
     url: "https://amashingamusic.co.za/sub/api/v1/artists",
     dataType: 'json',
     success: function (res) {
      console.log(res);
         res.forEach(elem => {
             $('.Allartists').append(`

								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="profile-widget">
										<div class="doc-img">
											<a href="doctor-profile.html">
												<img class="img-fluid" alt="User Image" src="assets/img/artist2.jpg">
											</a>

										</div>
										<div class="pro-content">
												<br>
											<h3 class="title" >
												<a class="stage_name " value="${elem.stage_name}">${elem.stage_name}</a>
												<i class="fa fa-check-circle verified"></i>
											</h3>
											<p class="speciality">${elem.name} ${elem.surname}</p>


											<div class="row row-sm">
												<div class="col-6">
                                                    <a  class="btn view-btn" style="color:#940404"disabled>Edit Info</a>
                                                </div>
                                                <div class="col-6">
                                                    <a  href="#Add_Specialities_details" data-toggle="modal"
                                                    name = "${elem.name}"
                                                    surname = "${elem.surname}"
                                                    stage_name = "${elem.stage_name}"
                                                    apple_music = "${elem.apple_music}"
                                                    deezer = "${elem.deezer}"
                                                        youtube_music = "${elem.youtube_music}"
                                                    class="btn book-btn addArtistModal" >View Artist</a>
												</div>

											</div>
										</div>
									</div>
								</div>
								`);
         });
     },
     error: function error() {
         notify('Failed to fetch questions, please reload the page.', 'error');
     }
 });
      $(document).on('click', '.view-artist', function (e) {


            $.ajax({
      type: 'GET',
      url: "https://amashingamusic.co.za/sub/api/v1/artist/12",
      dataType: 'json',
      success: function (res) {
          console.log(res);
          res.forEach(elem => {
              $('.Allartists1123').append(`

								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="profile-widget">
										<div class="doc-img">
											<a href="doctor-profile.html">
												<img class="img-fluid" alt="User Image" src="assets/img/thami.jpg">
											</a>

										</div>
										<div class="pro-content">
												<br>
											<h3 class="title">
												<a href="doctor-profile.html">${elem.stage_name}</a>
												<i class="fa fa-check-circle verified"></i>
											</h3>
											<p class="speciality">${elem.name} ${elem.surname}</p>


											<div class="row row-sm">
												<div class="col-6">
													<a href="doctor-profile.html" class="btn view-btn">Edit Info</a>
												</div>
												<div class="col-6">
													<a href="booking.html" class="btn book-btn">View Links </a>
												</div>
											</div>
										</div>
									</div>
								</div>
								`);
          });
      },
      error: function error() {
          console.log('Failed to fetch questions, please reload the page.', 'error');
      }
  });

});
$(document).on('click', '.addArtistModal', function (e) {

var name = $(this).attr("name");
var surname = $(this).attr("surname");
var stage_name = $(this).attr("stage_name");
var apple_music = $(this).attr("apple_music");
var deezer = $(this).attr("deezer");
var youtube_music = $(this).attr("youtube_music");
var siba = $(this).attr("stage_name");
console.log(siba)
$('.modal-title').text(stage_name)
$('.modal-body').find(".name").text(name + surname)
$('.modal-body').find(".apple_music").append(`<input type="text" class="form-control " value="${apple_music}" readonly> `)
$('.modal-body').find(".deezer").append(`<input type="text" class="form-control " value="${deezer}" readonly> `)
$('.modal-body').find(".youtube_music").append(`<input type="text" class="form-control " value="${youtube_music}" readonly> `)
$('.modal-body').find(".link_url").append(`<input type="text" class="form-control " value="https://amashingamusic.co.za/${stage_name}" readonly> `)

// $
    //   $.ajax({

    //       url: 'https://amashingamusic.co.za/sub/api/v1/artist',
    //       type: 'POST',
    //       data: {
    //           active: "1",
    //           apple_music: $('#apple_music').val(),
    //           deezer: $('#deezer').val(),
    //           name: $('#name').val(),
    //           spotify: $('#spotify').val(),
    //           stage_name: $('#stage_name').val(),
    //           surname: $('#surname').val(),
    //           youtube: $('#youtube').val(),
    //           youtube_music: $('#youtube_music').val(),

    //       },
    //       dataType: 'json',
    //       success: function (data) {
    //           console.log('yOU CAN LOGIN');
    //       },
    //       error: function (data) {
    //           console.log('cHECK PASSWORD');
    //       }
    //   });
  });

});
