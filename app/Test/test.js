var chakram = require('chakram'),
    expect = chakram.expect;


const spotifyEndpoint       = "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF";
const spotifyRandomEndpoint = "https://api.spotify.com/v1/search?q=random&type=artist";

const mockSpotifyEndoint    = "http://localhost:3000/artistMock";



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

describe("Check if API's have same schema", function () {
    it("should check that the returned JSON object satisifies a JSON schema", function () {
        var response = chakram.get(spotifyEndpoint);
        expect(response).to.have.schema('external_urls', {"required": ["spotify"]});
        return chakram.wait();
    });
});

describe("Check if API has the correct schema", function () {
    it("should return href, id, name and popularity for all found artists", function () {
        var response = chakram.get(spotifyRandomEndpoint);
        return expect(response).to.have.schema('artists.items', {
            type: "array",
            items: {
                type: "object",
                properties: {
                    href: {type: "string"},
                    id: {type: "string"},
                    name: {type: "string"},
                    popularity: {type: "integer"}
                },
                required: ["href", "id", "name", "popularity"]
            }
        })
    });
});


