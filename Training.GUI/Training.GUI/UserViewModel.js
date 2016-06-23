var User = function (name) {
    this.name = ko.observable(name);
};

function UserViewModel() {
    var u1 = new User('Ania');
    var u2 = new User('Kasia');
    var usersArray = ko.observableArray([u1, u2]);
    var addingUserName = ko.observable();
    var appStatus = ko.observable();
    function add() {
        var user = new User(addingUserName());
        usersArray.push(user);
    }
    function save() {
        $.ajax({
            type: "POST",
            url: "/User/Save",
            dataType: "json",
            success: function (msg) {
                appStatus("Saved");
            },
            data: usersArray()
        });
    }
    return {
        users: usersArray,
        addNewUser: add,
        addingUserName: addingUserName,
        saveUsers: save,
        appStatus: appStatus
    };

}