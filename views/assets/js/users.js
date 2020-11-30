$(document).ready(function(){
    let url = "http://localhost:5000/users";
    $.ajax({
        url: url,
        dataType: "json",
        type: "GET",
    })
    .done(function(data) {
        $.map(data, function (obj, index) {
            $('#content').append('<tr id="'+obj.id+'">'+
            '<td>' + obj.user_name + '</td>'+
            '<td>'+obj.firstname+'</td>'+
            '<td>'+obj.birthday+'</td>'+
            '<td>'+obj.users_email+'</td>'+
            '<td>'+obj.user_phone+'</td>'+
            '<td>'+obj.users_address+'</td>'+
            '<td>'+obj.password+'</td>'+
            '<td>'+obj.id_user_types+'</td>'+
            '<td> <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modifModal'+obj.id+'" id=modifier'+obj.id+'>Modifier</button></td>'+
            '<td><button type="button" class="btn btn-info"  id=supprimer'+obj.id+'>Supprimer</button></td></tr>',
            ' <div class="modal fade" id="modifModal'+obj.id+'" role="dialog">'+
                '<div class="modal-dialog"> '+
                '<div class="modal-content"> '+
                        '<div class="modal-header"> '+
                                '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                                '<h4 class="modal-title">Modifier un champ:</h4>'+
                        '</div>'+
                        '<div class="modal-body">'+
                            '<form id="changeDB'+obj.id+'" method="PATCH">'+
                                '<div>'+
                                    '<label for="name">Name</label>'+
                                    '<input class="form-control" type="text" id="name" name="name" value='+obj.user_name+'>'+
                                '</div>'+
                                '<div>'+
                                '<label for="fname">Firstname</label>'+
                                '<input class="form-control" type="text" id="fname" name="fname" value='+obj.firstname+'>'+
                                '</div>'+
                                '<div>'+
                                    '<label for="birthday">Birthday</label>'+
                                    '<input class="form-control" type="text" id="birthday" name="birthday" value="'+obj.birthday+'">'+
                                '</div>'+
                                '<div>'+
                                    '<label for="email">Email</label>'+
                                    '<input class="form-control" type="email" id="email" name="enmai:" value='+obj.users_email+'>'+
                                '</div>'+
                                '<div>'+
                                    '<label for="phone">Phone</label>'+
                                    '<input class="form-control" type="tel" id="phone" name="phone" value='+obj.user_phone+'>'+
                                '</div>'+
                                '<div>'+
                                    '<label for="adress">Adress</label>'+
                                    '<input class="form-control" type="text" id="address" name="address" value="'+obj.users_address+'">'+
                                '</div>'+
                                '<div>'+
                                    '<label for="password">Password</label>'+
                                    '<input class="form-control" type="text" id="password" name="password" value='+obj.password+'>'+
                                '</div>'+
                                '<div>'+
                                    '<label for="type">Type</label>'+
                                    '<select class="form-control typemodif"  id="type" name="type"></select>'+
                                '</div>'+
                                '<div>'+
                                '<button id="envoiModif'+obj.id+'">Envoyer les modifications</button>'+
                                '</div>'+
                            '</form>'+
                        '</div>'+
                        '<div class="modal-footer">'+
                            '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>');
            $('#envoiModif'+obj.id+'').click(function(){
                $.ajax({
                    url: "http://localhost:5000/users/"+obj.id,
                    dataType: "json",
                    method:"PATCH",
                    data: $("#changeDB"+obj.id).serialize()
                })
            })

            $("#supprimer"+ obj.id +"" ).click(function () {
                $.ajax({
                    url: "http://localhost:5000/users/" + obj.id,
                    dataType: "json",
                    method: "DELETE",
                    success: function(){$("tr#"+obj.id+"").hide()}
                })
            
            });

        });   

    });

    $.ajax({
    url: "http://localhost:5000/usertypes",
    dataType: "json",
    method: "GET",
    })
    .done(function (data){
        $.map(data,(function (obj, index){
            $('#typenew').append('<option value="'+obj.id+'">'+obj.role+'</option>')
            $('.typemodif').append('<option value="'+obj.id+'">'+obj.role+'</option>')

        }))
    });
   
});



    
$(document).ready(function() {
    $("#envoi").click(function(event) {
        $.post( "http://localhost:5000/users", 
            $('#newUSER').serialize(),
            function(data){alert ("Data loaded:"+data)},
            "json",                         
        )  
    })
 
});