$(document).ready(function(){
    let url = "http://localhost:5000/companies";
    $.ajax({
        url: url,
        dataType: "json",
        type: "GET",
    })
        .done(function(data) {
            $.map(data, function (obj, index) {
            $('#content').append('<tr id="'+obj.id+'"> <td>' + obj.name + '</td> <td>'+obj.description_company+'</td> <td>'+obj.activity+'</td><td>'+obj.address+'</td> <td>'+obj.city+'</td> <td>'+obj.email+'</td> <td>'+obj.phone+'</t> <td>'+obj.website+'</td> <td><button type="button" class="btn btn-info" data-toggle="modal" data-target="#modifyModal'+obj.id+'" id=modifier'+obj.id+'>Modifier</button></td> <td><button type="button" class="btn btn-info"  id=supprimer'+obj.id+'>Supprimer</button></td></tr>',
            '<div class="modal fade" id="modifyModal'+obj.id+'" role="dialog">' +
                '<div class="modal-dialog"> <div class="modal-content"> ' +
                    '<div class="modal-header"> ' +
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                        '<h4 class="modal-title">Modifier un champ:</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                        '<form id="changeDB'+obj.id+'" method="PATCH">' +
                            '<div>' +
                                '<label for="name">Name</label>' +
                                '<input type="name" id="name" name="name" value="'+obj.name+'" class="form-control">' +
                            '</div>' +
                            '<div>' +
                                '<label for="description">Description</label>' +
                                '<input type="text" id="description" name="description" class="form-control" value="'+obj.description_company+'">' +
                            '</div>' +
                            '<div>' +
                                '<label for="address">Address</label>' +
                                '<input type="text" id="address" name="address" class="form-control" value="'+obj.address+'">' +
                            '</div>' +
                            '<div>' +
                                '<label for="phone">Phone</label>' +
                                '<input type="text" id="phone" name="phone" class="form-control" value='+obj.phone+'>' +
                            '</div>' +
                            '<div>' +
                                '<label for="email">Email</label>' +
                                '<input type="text" id="email" name="email" class="form-control" value='+obj.email+'>' +
                            '</div>' +
                            '<div>' +
                                '<label for="website">Website</label>' +
                                '<input type="text" id="website" name="website" class="form-control" value="'+obj.website+'">' +
                            '</div>' +
                            '<div>' +
                                '<label for="activity">Activity</label>' +
                                '<input type="text" id="activity" name="activity" class="form-control" value="'+obj.activity+'">' +
                            '</div>' +
                            '<div>' +
                                '<label for="modifSelect">Ville</label>' +
                                '<select class="mdb-select md-form modifSelect" name="city">' +
                                '</select> ' +
                            '</div>' +
                            '<div>' +
                                '<button id="envoiModif'+obj.id+'">Envoyer les modifications</button>' +
                            '</div>' +
                        '</form>' +
                    '</div>' +
                    '<div class="modal-footer">' +
                        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
                    '</div>' +
                '</div>' +
                '</div>' +
                '</div>');

            $('#envoiModif'+obj.id+'').click(function(){
                let company_id = obj.id
                $.ajax({
                    url: "http://localhost:5000/companies/"+company_id,
                    dataType: "json",
                    method:"PATCH",
                    data: $("#changeDB"+obj.id).serialize()
                })
            })

            $("#supprimer"+ obj.id +"" ).click(function () {
                $.ajax({
                    url: "http://localhost:5000/companies/" + obj.id,
                    dataType: "json",
                    method: "DELETE",
                    success: function(){$("tr#"+obj.id+"").hide()}
                })
            
            });
        });

    });
    $.ajax({
        url: "http://localhost:5000/cities",
        dataType: "json",
        method: "GET",
    })
        .done(function (data){
            $.map(data,(function (obj, index){
                $('#selectcity').append('<option value="'+obj.id+'">'+obj.city+'</option>')
                $('.modifSelect').append('<option value="'+obj.id+'">'+obj.city+'</option>')

            }))
        })

});
    
$(document).ready(function() {
    $("#envoi").click(function(event) {
        $.post( "http://localhost:5000/companies",
            $('#newcompany').serialize(),
            function(data){alert ("Data loaded:"+data)},
            "json",                         
        )  
    })
 
});