const express = require('express')
const app = express()
const port = 3000

app.set('port', port)

app.get('/', (req, res) => {
    res.send('Hello word!')
});

app.get("/artistMock", function(req, res) {
    var artistMock = {
        "external_urls" : { "spotify" : "https://open.spotify.com/artist/0OdUWJ0sBjDrqHygGUXeCF" }, "followers" : { "href" : null, "total" : 523605 }, "genres" : [ "chamber pop", "folk-pop", "indie folk", "indie pop", "indie rock", "indietronica", "neo mellow", "stomp and holler" ], "href" : "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF", "id" : "0OdUWJ0sBjDrqHygGUXeCF", "images" : [ { "height" : 640, "url" : "https://i.scdn.co/image/0f9a5013134de288af7d49a962417f4200539b47", "width" : 640 }, { "height" : 320, "url" : "https://i.scdn.co/image/8ae35be1043f330173de198c35a49161337e829c", "width" : 320 }, { "height" : 160, "url" : "https://i.scdn.co/image/602dd7b3a2ee3f3fd86c6c4f50ab9b5a82e23c59", "width" : 160 } ], "name" : "Band of Horses", "popularity" : 70, "type" : "artist", "uri" : "spotify:artist:0OdUWJ0sBjDrqHygGUXeCF"
    }
    return res.send(artistMock);
});

app.listen(app.get('port'), (err) => {
    console.log(`Server running on port ${app.get('port')}`)
});
