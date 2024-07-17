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
    var action = '/author/update/' + id + '?_method=PUT';
    var modal = $(this);
    console.log('family name:', familyName);
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

//- Show modal detail book
$('#detailBookModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget);
    var id = button.data('id');
    var title = button.data('title');
    var summary = button.data('summary');
    var isbn = button.data('isbn');
    var url = button.data('url');
    var name = button.data('name_author');
    var modal = $(this);
    modal.find('.modal-body input#Title').val(title);
    modal.find('.modal-body textarea#Summary').val(summary);
    modal.find('.modal-body input#Isbn').val(isbn);
    modal.find('.modal-body input#Url').val(url);
    modal.find('.modal-body input#NameAuthor').val(name);
    modal.find('#detailBookModal').attr('action', '/author/' + id);
});
// Show modal edit book
$('#editBookModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget);
    var id = button.data('id');
    var title = button.data('title');
    var summary = button.data('summary');
    var isbn = button.data('isbn');
    var url = button.data('url');
    var name = button.data('name_author');
    var action = '/book/update/' + id + '?_method=PUT'; // Đường dẫn cần thiết lập cho form
    var modal = $(this);
    modal.find('.modal-body input#editTitle').val(title);
    modal.find('.modal-body textarea#editSummary').val(summary);
    modal.find('.modal-body input#editIsbn').val(isbn);
    modal.find('.modal-body input#editUrl').val(url);
    modal.find('.modal-body #editNameAuthor').val(name);
    // Thiết lập action của form
    modal.find('#editBookForm').attr('action', action);
});
