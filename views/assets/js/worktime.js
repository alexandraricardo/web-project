$(document).ready(function(){
    let url = "http://localhost:5000/worktimes";
    $.ajax({
        url: url,
        dataType: "json",
        type: "GET",
    })
    .done(function(data) {
        $.map(data, function (obj, index) {
            $('#content').append('<tr id="'+obj.id+'"> <td>' + obj.week_worktime + '</td> <td><button type="button" class="btn btn-info " data-toggle="modal" data-target="#modifyModal'+obj.id+'" id=modifier'+obj.id+'>Modifier</button></td> <td><button type="button" class="btn btn-info "  id=supprimer'+obj.id+'>Supprimer</button></td></tr>',
            ' <div class="modal fade" id="modifyModal'+obj.id+'" role="dialog"><div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Modifier un champ:</h4></div><div class="modal-body"><form id="changeDB'+obj.id+'" method="PATCH"><div><label for="week_worktime">Temps de travail</label><input type="text" id="week_worktime" name="week_worktime" value='+obj.week_worktime+'></div><div><button id="envoiModif'+obj.id+'">Envoyer les modifications</button></div></form></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>'
            );
            $('#envoiModif'+obj.id+'').click(function(){
                let week_worktime_id = obj.id
                $.ajax({
                    url: "http://localhost:5000/worktimes/"+week_worktime_id,
                    dataType: "json",
                    method:"PATCH",
                    data: $("#changeDB"+obj.id).serialize()
                })
            })

            $("#supprimer"+ obj.id +"" ).click(function () {
                $.ajax({
                    url: "http://localhost:5000/worktimes/" + obj.id,
                    dataType: "json",
                    method: "DELETE",
                    success: function(){$("tr#"+obj.id+"").hide()}
                })

            });

        });



    });



});

$(document).ready(function() {
    $("#envoi").click(function(event) {
        $.post( "http://localhost:5000/worktimes",
            $('#newworktime').serialize(),
            function(data){alert ("Data loaded:"+data)},
            "json",
        )
    })

});

