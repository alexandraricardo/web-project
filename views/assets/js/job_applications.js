$(document).ready(function(){
    let url = "http://localhost:5000/job-applications";
    $.ajax({
        url: url,
        dataType: "json",
        type: "GET",
    })
    .done(function(data) {
        $.map(data, function (obj, index) {
            $('#content').append('<tr id="'+obj.id+'"> <td>' + obj.date + '</td> <td>'+obj.id_advertisements+'</td> <td>'+obj.id_users+'</td> <td>'+obj.name+'</td> <td>'+obj.firstname+'</td> <td>'+obj.email+'</td> <td>'+obj.phone+'</td> <td>'+obj.message+'</td> <td><button type="button" class="btn btn-info" data-toggle="modal" data-target="#modifyModal'+obj.id+'" id=modifier'+obj.id+'>Modifier</button></td> <td><button type="button" class="btn btn-info"  id=supprimer'+obj.id+'>Supprimer</button></td></tr>',
            ' <div class="modal fade" id="modifyModal'+obj.id+'" role="dialog"><div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Modifier un champ:</h4></div><div class="modal-body">'+
            '<form id="changeDB'+obj.id+'" method="PATCH">'+
            '<div><label for="advertisement">Annonce</label>'+
            '<select class="form-control advertisementmodif"  name="advertisement"></select></div>'+
            '<div><label for="id_user">Utilisateur</label>'+
            '<input class="form-control" type="text" id="id_user" name="id_user" value='+obj.id_users+'></div>'+
            '<div><label for="Name">Name</label>'+
            '<input class="form-control" type="text" id="name" name="name" value='+obj.name+'></div>'+
            '<div><label for="fname">Firstname</label>'+
            '<input class="form-control" type="text" id="fname" name="fname" value='+obj.firstname+'></div>'+
            '<div><label for="email">Email</label>'+
            '<input class="form-control" type="email" id="email" name="email" value='+obj.email+'></div>' +
            '<div><label for="phone">Telephone</label>'+
            '<input class="form-control" type="tel" id="phone" name="phone" value='+obj.phone+'></div>'+
            '<div><label for="message">Message</label>'+
            '<input class="form-control" type="textarea" id="message" name="message" value='+obj.message+'></div>'+
            '<div><button id="envoiModif'+obj.id+'">Envoyer les modifications</button></div></form></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>'
            );
            $('#envoiModif'+obj.id+'').click(function(){
                $.ajax({
                    url: "http://localhost:5000/job-applications/"+obj.id,
                    dataType: "json",
                    method:"PATCH",
                    data: $("#changeDB"+obj.id).serialize()
                })
            })

            $("#supprimer"+ obj.id +"" ).click(function () {
                $.ajax({
                    url: "http://localhost:5000/job-applications/" + obj.id,
                    dataType: "json",
                    method: "DELETE",
                    success: function(){$("tr#"+obj.id+"").hide()}
                })
            
            });

        });   

    });

    $.ajax({
        url: "http://localhost:5000/advertisements",
        dataType: "json",
        method: "GET",
    })
        .done(function (data){
            $.map(data,(function (obj, index){
                $('.advertisementmodif').append('<option value="'+obj.id+'">'+obj.title+'</option>')
    
            }))
        });

   

});