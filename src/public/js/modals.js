// Show modal edit
$('#editAuthorModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget);
    var id = button.data('id');
    var firstName = button.data('first_name');
    var familyName = button.data('family_name');
    var birthDay = button.data('date_of_birth');
    var deathDay = button.data('date_of_death');
    var name = button.data('name');
    var avatar = button.data('url');
    var action = '/author/update/' + id + '?_method=PUT'; // Đường dẫn cần thiết lập cho form
    var modal = $(this);
    modal.find('.modal-body input#editFirstName').val(firstName);
    modal.find('.modal-body input#editFamilyName').val(familyName);
    modal.find('.modal-body input#editBirthDay').val(birthDay);
    modal.find('.modal-body input#editDeathDay').val(deathDay);
    modal.find('.modal-body input#editName').val(name);
    modal.find('.modal-body input#editAvatar').val(avatar);
    // Thiết lập action của form
    modal.find('#editAuthorForm').attr('action', action);
});

// Show modal detail
$('#detailAuthorModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget);
    var id = button.data('id');
    var firstName = button.data('first_name');
    var familyName = button.data('family_name');
    var birthDay = button.data('date_of_birth');
    var deathDay = button.data('date_of_death');
    var name = button.data('name');
    var avatar = button.data('url');
    var modal = $(this);
    modal.find('.modal-body input#detailFirstName').val(firstName);
    modal.find('.modal-body input#detailFamilyName').val(familyName);
    modal.find('.modal-body input#detailBirthDay').val(birthDay);
    modal.find('.modal-body input#detailDeathDay').val(deathDay);
    modal.find('.modal-body input#detailName').val(name);
    modal.find('.modal-body input#detailAvatar').val(avatar);
});
