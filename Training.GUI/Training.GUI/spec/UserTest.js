describe('userViewModelTest', function () {
    it('Add user to list', function () {
        //even
        var sut = UserViewModel();
        //when
        sut.addingUserName("Test user");
        
        //then
        expect(userViewModel.users().length).toBe(3);
    });
    it('New Instance should have 2 items on the list', function () {
        var userViewModel = UserViewModel();
        expect(userViewModel.users().length).toBe(2);
    });
    it('Save Users', function () {
        spyOn($, "ajax").and.callFake(function (options) { });
        var userViewModel = UserViewModel();
        userViewModel.saveUsers();
        expect($.ajax).toHaveBeenCalled();
        //.toThrowError("Some error message");
        //expect(function call).toHaveBeenCalledWith(value);
        // expect(function ).toBeFalsy();
    });
   
});
