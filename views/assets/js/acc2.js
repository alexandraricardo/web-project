// laisser le js d'affichage des ad et du learnmore et apply
$(document).ready(function(){
    let url = "http://localhost:5000/advertisements";
    $.ajax({
        url: url,
        dataType: "json",
        type: "GET",
    })

        .done(function(data) {
            $.each(data, function (index, obj) {
                //console.log(obj.name)
                $('#content').append('<div class="card" id="'+index+'"></div>');
                $('#'+index+'').append('<div class="card-body" id="card-body'+index+'"></div>');
                $('#card-body'+index+'').append(
                    '<h2 class="card-title">' + obj.title + '</h2>'+
                    '<h4 class="card-subtitle">Le '+obj.date+' l\'entreprise '+ obj.name + ' recrute à '+obj.city+'</h4>'+
                    '<p class="card-content">' + obj.description + '</p>'+
                    '<p class="card-content nonVisible" id="advertisementContent'+index+'">-Poste: '+obj.job_type+'</br> -Salaire: '+obj.salary+'</br> -Type de contrat: '+obj.contract_types+'</br> -Expérience recquise: '+obj.type_experience+'</br> -Temps de travail: '+obj.week_worktime +
                    '<div id="divButton">'+
                    '<button type="button" class="learnMore btn btn-info btn-lg" id="modalButton'+index+'">Learn more</button>'+
                    '<button type="button" class="apply nonVisible btn btn-info btn-lg" data-toggle="modal" data-target="#myModal'+obj.id+'" class="nonVisible" id="applyButton'+index+'">Apply</button>'+
                    '</div>',
// au click sur apply ouvrir modal avec sélection des user => requete ajax users déja prsente
// sur cette modal ajouter bouton ouvrant le formulaire
// récupérer l'id du user selectionné
// faire requete ajax /users/user_id pour récupérer ses infos
// et y mettre le form avec comme value ses infos

// requete ajax me permettant de récupérer


                '<div class="modal fade" id="myModal'+obj.id+'" role="dialog">' +
                    '<div class="modal-dialog"> ' +
                        '<div class="modal-content"> ' +
                            '<div class="modal-header"> ' +
                                '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                                '<h4 class="modal-title">Remplir les champs pour envoyer votre candidature:</h4>' +
                            '</div>' +
                            '<div class="modal-body">' +
                                '<form id="newjobapplication'+obj.id+'" method="POST">' +
                                    '<div>'+
                                        '<label for="title">Titre de l\'annonce:</label>'+
                                        '<input type="text" id="title" name="title" value="'+obj.title+'">'+
                                        '<input type="hidden" value="'+obj.id+'" name="id_advertisement">'+
                                    '</div>'+
                                    '<div>' +
                                        '<label for="name">Nom</label>'+
                                        '<input type="text" id="name" name="name">'+
                                    '</div>'+
                                    '<div>' +
                                        '<label for="firstname">Prénom</label>'+
                                        '<input type="text" id="firstname" name="firstname">'+
                                    '</div>'+
                                    '<div>' +
                                        '<label for="email">Email</label>'+
                                        '<input type="email" id="email" name="email">'+
                                    '</div>'+
                                    '<div>' +
                                        '<label for="phone">Téléphone</label>'+
                                        '<input type="text" id="phone" name="phone">'+
                                    '</div>'+
                                    '<div>' +
                                        '<label for="message">Message</label>'+
                                        '<textarea name="message" id="message" cols="30" rows="5"></textarea>'+
                                    '</div>'+
                                    '<div>' +
                                        '<button id="envoi'+obj.id+'">Envoyer la candidature</button>' +
                                    '</div>' +
                                '</form>' +
                            '</div>' +
                            '<div class="modal-footer">' +
                                '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>');
                $('#modalButton'+index+'').click(function(){
                    $('#advertisementContent'+index+'').toggleClass("visible");
                    $('#applyButton'+index+'').toggleClass("visible");
                    $('#'+index+'').toggleClass("cardBodyVisible");
                })
                $('#envoi'+obj.id+'').click(function (){
                    $.post("http://localhost:5000/job-applications",
                        $('#newjobapplication'+obj.id+'').serialize(),
                        function (data){alert("Data loaded"+data)},
                        "json",
                    )
            });

    })
        });
    $.ajax({
        url: "http://localhost:5000/users",
        dataType: "json",
        method: "GET",
    })
        .done(function(data){
            $.map(data,function (obj, index){
                $(".selectUser").append('<option value='+obj.id+'>'+obj.firstname+' '+obj.name+'</option>')
            })
        })



});