var chakram = require('chakram'),
    expect = chakram.expect;

describe("**Data validate** from API's....", function() {
    it("Check if Spotify artistMock is UP", function () {
        var response = chakram.get("http://localhost:3000/");
        return expect(response).to.have.status(200);
    });
});