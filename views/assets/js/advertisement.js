$(document).ready(function(){
    let url = "http://localhost:5000/advertisements";
    $.ajax({
        url: url,
        dataType: "json",
        type: "GET",
    })

        .done(function(data) {
            $.map(data, function (obj, index) {
            $('#content').append('<tr id="'+obj.id+'"> ' +
                '<td>' + obj.title + '</td>' +
                '<td>'+obj.description+'</td> ' +
                '<td>'+obj.salary+'</td>' +
                '<td>'+obj.name+'</td>' +
                '<td>'+obj.type_contract+'</td>' +
                '<td>'+obj.city+'</td> ' +
                '<td>'+obj.experience+'</td> ' +
                '<td>'+obj.worktime+'</td> ' +
                '<td>'+obj.job_type+'</td> ' +
                '<td><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#modifyModal'+obj.id+'" id=modifier'+obj.id+'>Modifier</button></td> ' +
                '<td><button type="button" class="btn btn-info btn-lg"  id=supprimer'+obj.id+'>Supprimer</button></td>' +
                '</tr>',

            '<div class="modal fade" id="modifyModal'+obj.id+'" role="dialog">' +
                '<div class="modal-dialog"> <div class="modal-content"> ' +
                    '<div class="modal-header"> ' +
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                        '<h4 class="modal-title">Modifier un champ:</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                        '<form id="changeDB'+obj.id+'" method="PATCH">' +
                            '<div>'+
                            '<label for="title">title</label>'+
                            '<input type="text" id="title" name="title" value="'+obj.title+'">'+
                        '</div>'+
                        '<div>'+
                            '<label for="description">description</label>'+
                            '<textarea name="description" id="description" cols="30" rows="10">'+obj.description+'</textarea>'+
                        '</div>'+
                        '<div>'+
                            '<label for="salary">salary</label>'+
                            '<input type="text" id="salary" name="salary" value="'+obj.salary+'">'+
                        '</div>'+
                        '<div>'+
                            '<label for="company" id="company">company</label>'+
                            '<select name="company" class="modifSelectCompany" id="company">'+

                            '</select>'+
                        '</div>'+
                        '<div>'+
                            '<label for="contract_types" id="contract_types">contract_types</label>'+
                            '<select name="contract_types" class="modifSelectContractType" id="contract_types">'+

                            '</select>'+
                        '</div>'+
                        '<div>'+
                            '<label for="cities" id="cities">cities</label>'+
                            '<select name="cities" id="cities" class="modifSelectCity">'+

                           ' </select>'+
                        '</div>'+
                        '<div>'+
                            '<label for="experiences" id="experiences">experiences</label>'+
                            '<input name="experiences" id="experiences" value="'+obj.experience+'">'+
                        '</div>'+
                        '<div>'+
                            '<label for="worktime" id="worktime">worktime</label>'+
                            '<input name="worktime" id="worktime" value="'+obj.worktime+'">'+
                        '</div>'+
                        '<div>'+
                            '<label for="job" id="job">job</label>'+
                            '<select name="job" class="modifSelectJob" id="job">'+

                            '</select>'+
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
                let ad_id = obj.id
                $.ajax({
                    url: "http://localhost:5000/advertisements/"+ad_id,
                    dataType: "json",
                    method:"PATCH",
                    data: $("#changeDB"+obj.id).serialize()
                })
            })

            $("#supprimer"+ obj.id +"" ).click(function () {
                $.ajax({
                    url: "http://localhost:5000/advertisements/" + obj.id,
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
                $('.modifSelectCity').append('<option value="'+obj.id+'">'+obj.city+'</option>')

            }))
        })
    $.ajax({
        url: "http://localhost:5000/companies",
        dataType: "json",
        method: "GET",
    })
        .done(function (data){
            $.map(data,(function (obj, index){
                $('#selectcompany').append('<option value="'+obj.id+'">'+obj.name+'</option>')
                $('.modifSelectCompany').append('<option value="'+obj.id+'">'+obj.name+'</option>')
            }))
        })
    $.ajax({
        url: "http://localhost:5000/contracts",
        dataType: "json",
        method: "GET",
    })
        .done(function (data){
            $.map(data,(function (obj, index){
                $('#selectcontract_types').append('<option value="'+obj.id+'">'+obj.type_contract+'</option>')
                $('.modifSelectContractType').append('<option value="'+obj.id+'">'+obj.type_contract+'</option>')

            }))
        })
    $.ajax({
        url: "http://localhost:5000/jobs",
        dataType: "json",
        method: "GET",
    })
        .done(function (data){
            $.map(data,(function (obj, index){
                $('#selectjob').append('<option value="'+obj.id+'">'+obj.job_type+'</option>')
                $('.modifSelectJob').append('<option value="'+obj.id+'">'+obj.job_type+'</option>')

            }))
        })
});

$(document).ready(function() {
    $("#envoi").click(function(event) {
        $.post("http://localhost:5000/advertisements",
            $('#newadvertisement').serialize(),
            function(data){alert ("Data loaded:"+data)},
            "json",
        )

    })

});