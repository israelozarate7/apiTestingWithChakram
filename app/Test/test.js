var chakram = require('chakram'),
    expect = chakram.expect;


const spotifyEndpoint    = "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF";
const mockSpotifyEndoint = "http://localhost:3000/artistMock";


describe("Check if API's are running", function() {
    it("Check if Spotify Mock API is UP", function () {
        var response = chakram.get(mockSpotifyEndoint);
        return expect(response).to.have.status(200);
    });

    it("Check if Spotify API is UP", function () {
        var response = chakram.get(spotifyEndpoint);
        return expect(response).to.have.status(200);
    });
});

describe("Check if API's have same data", function () {
    it("Both APIs have same 'type', 'popularity' and 'name'", function () {
        return chakram.get(mockSpotifyEndoint)
            .then(function (searchResponse) {
                return chakram.get(spotifyEndpoint)
                    .then(function (realResponse) {
                        expect(realResponse).to.have.json('type', searchResponse.body.type);
                        expect(realResponse).to.have.json('popularity', searchResponse.body.popularity);
                        expect(realResponse).to.have.json('name', searchResponse.body.name);
                    })
            });
    });
});