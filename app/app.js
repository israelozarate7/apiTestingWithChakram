const express = require('express')
const app = express()
const port = 3000

app.set('port', port)

app.get('/', (req, res) => {
    res.send('Hola Mundo!')
});

app.get("/artistMock", function(req, res) {
    var artistMock = {
        "artists": {
            "href": "https://api.spotify.com/v1/search?query=random&offset=0&limit=20&type=artist",
            "items": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2FIKDET7MkO9hQgSyIW9ia"
                    },
                    "followers": {
                        "href": null,
                        "total": 7802
                    },
                    "genres": [
                        "compositional ambient",
                        "instrumental post rock"
                    ],
                    "href": "https://api.spotify.com/v1/artists/2FIKDET7MkO9hQgSyIW9ia",
                    "id": "2FIKDET7MkO9hQgSyIW9ia",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/b91264242848189e1d24f5f70321f8683e414a2e",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/a2efa89d843fe80529c397531e13fa794a5e091f",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/d6ee85c290d37d247eab6ec70cda6190e8d8d51c",
                            "width": 64
                        }
                    ],
                    "name": "Random Forest",
                    "popularity": 56,
                    "type": "artist",
                    "uri": "spotify:artist:2FIKDET7MkO9hQgSyIW9ia"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/23Mk68F0po0fPFDUXLY0wX"
                    },
                    "followers": {
                        "href": null,
                        "total": 12126
                    },
                    "genres": [],
                    "href": "https://api.spotify.com/v1/artists/23Mk68F0po0fPFDUXLY0wX",
                    "id": "23Mk68F0po0fPFDUXLY0wX",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/745be7b4dce31e4889a7a9783439bd91c275989a",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/f4080797c00dbca6a09dec9f37e6c261267b07cf",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/2050e4235395416df377b8127bd8dc4f4a6b2700",
                            "width": 64
                        }
                    ],
                    "name": "Random Encounters",
                    "popularity": 50,
                    "type": "artist",
                    "uri": "spotify:artist:23Mk68F0po0fPFDUXLY0wX"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4w8MWlPCLi8uZRkCMyrtCO"
                    },
                    "followers": {
                        "href": null,
                        "total": 17773
                    },
                    "genres": [
                        "glitch hop",
                        "world fusion"
                    ],
                    "href": "https://api.spotify.com/v1/artists/4w8MWlPCLi8uZRkCMyrtCO",
                    "id": "4w8MWlPCLi8uZRkCMyrtCO",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/61addd0c214d4cfe68f2735f5f37704097d9eab5",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/cae7ecc328328016d6e15c6dfdcc3ba0aa6a4e79",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/bb424d81643f147697f1bc9af57bbd383928f749",
                            "width": 64
                        }
                    ],
                    "name": "Random Rab",
                    "popularity": 46,
                    "type": "artist",
                    "uri": "spotify:artist:4w8MWlPCLi8uZRkCMyrtCO"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2mCmDragybleJXqTqsOk5I"
                    },
                    "followers": {
                        "href": null,
                        "total": 7638
                    },
                    "genres": [
                        "nerdcore",
                        "scorecore",
                        "video game music"
                    ],
                    "href": "https://api.spotify.com/v1/artists/2mCmDragybleJXqTqsOk5I",
                    "id": "2mCmDragybleJXqTqsOk5I",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/cf7a486ce2f57b9fe3afdfe381a505490abe1eb7",
                            "width": 640
                        },
                        {
                            "height": 320,
                            "url": "https://i.scdn.co/image/3ec22eb6171aca62912e17bf385f39e2cd5d6322",
                            "width": 320
                        },
                        {
                            "height": 160,
                            "url": "https://i.scdn.co/image/d19dcfe0bd1fee13ffbe6ad20fd4ad98d1457a20",
                            "width": 160
                        }
                    ],
                    "name": "Mega Ran",
                    "popularity": 38,
                    "type": "artist",
                    "uri": "spotify:artist:2mCmDragybleJXqTqsOk5I"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4uLdwLCV2WtEIPaIPkZMgQ"
                    },
                    "followers": {
                        "href": null,
                        "total": 2334
                    },
                    "genres": [
                        "nintendocore",
                        "scorecore",
                        "video game music"
                    ],
                    "href": "https://api.spotify.com/v1/artists/4uLdwLCV2WtEIPaIPkZMgQ",
                    "id": "4uLdwLCV2WtEIPaIPkZMgQ",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/909d2548d359540e507f5600aa3d7cd646906c8c",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/9cde8c9a2b00d54870b92ed21361b2a3061dc472",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/33f5051ad664b70b11c0126c0c57462bd52f9c24",
                            "width": 64
                        }
                    ],
                    "name": "Random Encounter",
                    "popularity": 28,
                    "type": "artist",
                    "uri": "spotify:artist:4uLdwLCV2WtEIPaIPkZMgQ"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0FOuR45KED7o5G3bugebGA"
                    },
                    "followers": {
                        "href": null,
                        "total": 1493
                    },
                    "genres": [
                        "christian rock"
                    ],
                    "href": "https://api.spotify.com/v1/artists/0FOuR45KED7o5G3bugebGA",
                    "id": "0FOuR45KED7o5G3bugebGA",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/1ecd16fae16ca38f1caa2b8ec3db4f888709b280",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab32da7ed951ec01e47f9d39f5cea0355e0cb8cf",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/aa4ed3cf636721d7faf4b64ffc6c44eea0bf4f71",
                            "width": 64
                        }
                    ],
                    "name": "Random Hero",
                    "popularity": 23,
                    "type": "artist",
                    "uri": "spotify:artist:0FOuR45KED7o5G3bugebGA"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0qyNkAVhhlJ4DvfYypl1Bb"
                    },
                    "followers": {
                        "href": null,
                        "total": 3329
                    },
                    "genres": [
                        "ska",
                        "ska punk"
                    ],
                    "href": "https://api.spotify.com/v1/artists/0qyNkAVhhlJ4DvfYypl1Bb",
                    "id": "0qyNkAVhhlJ4DvfYypl1Bb",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/5bd3538adaf65d2b27572fcf344660a838954a75",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/9d633b5e795da3d3250a823f774aab02fd4f5cd1",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/493f98b28a1780cf039cb141f3d1b40d9da2ea31",
                            "width": 64
                        }
                    ],
                    "name": "Random Hand",
                    "popularity": 28,
                    "type": "artist",
                    "uri": "spotify:artist:0qyNkAVhhlJ4DvfYypl1Bb"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7qQ7CInf5wCUojxvfhflfW"
                    },
                    "followers": {
                        "href": null,
                        "total": 2881
                    },
                    "genres": [
                        "drum and bass",
                        "drumfunk",
                        "jungle",
                        "liquid funk",
                        "neurofunk"
                    ],
                    "href": "https://api.spotify.com/v1/artists/7qQ7CInf5wCUojxvfhflfW",
                    "id": "7qQ7CInf5wCUojxvfhflfW",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/d22cfa20d9bc8a77ff4b5fc9afc2761c392cd6db",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/c83ee1d0264c8d264937eb11d6c60fe033e10581",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/076f3c3bde3590b96d1a2e21f942e20a36a4bc3d",
                            "width": 64
                        }
                    ],
                    "name": "Random Movement",
                    "popularity": 28,
                    "type": "artist",
                    "uri": "spotify:artist:7qQ7CInf5wCUojxvfhflfW"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4gJZVrrNtPr8xXwyRYRAql"
                    },
                    "followers": {
                        "href": null,
                        "total": 20
                    },
                    "genres": [],
                    "href": "https://api.spotify.com/v1/artists/4gJZVrrNtPr8xXwyRYRAql",
                    "id": "4gJZVrrNtPr8xXwyRYRAql",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/870f1b7fa6fe6766f1c5775a56fb672135014af8",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/383e6097c57c0371d3f1cc6509b53cf2c0898c87",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/e1a544b1b85b8c310ed9447ddfd33dc70d60a869",
                            "width": 64
                        }
                    ],
                    "name": "So Random",
                    "popularity": 21,
                    "type": "artist",
                    "uri": "spotify:artist:4gJZVrrNtPr8xXwyRYRAql"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3pBKouKb8w9CJN8rJV5PJI"
                    },
                    "followers": {
                        "href": null,
                        "total": 1916
                    },
                    "genres": [
                        "alternative hip hop"
                    ],
                    "href": "https://api.spotify.com/v1/artists/3pBKouKb8w9CJN8rJV5PJI",
                    "id": "3pBKouKb8w9CJN8rJV5PJI",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/2be30df0db7879df18004b8e176aea0b8a563efd",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/0b8008146fbf9847f060de30eea39add9c3df233",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ddb33c0e93133cde80abe6456f42d39803620373",
                            "width": 64
                        }
                    ],
                    "name": "Random Axe",
                    "popularity": 20,
                    "type": "artist",
                    "uri": "spotify:artist:3pBKouKb8w9CJN8rJV5PJI"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2ozkfz21r6iJKQK2hZQNc0"
                    },
                    "followers": {
                        "href": null,
                        "total": 2
                    },
                    "genres": [],
                    "href": "https://api.spotify.com/v1/artists/2ozkfz21r6iJKQK2hZQNc0",
                    "id": "2ozkfz21r6iJKQK2hZQNc0",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/660efd6593f6056f0778287cebfc3ff19186aab0",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/4606ab9c3aabc52fdd3dd8e7205f4ee4b84de798",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/9e6c41608f2ada8b325b41f15f8e684ce027d825",
                            "width": 64
                        }
                    ],
                    "name": "Random!",
                    "popularity": 21,
                    "type": "artist",
                    "uri": "spotify:artist:2ozkfz21r6iJKQK2hZQNc0"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/15aJDRh0p0R52KxrDlwsw9"
                    },
                    "followers": {
                        "href": null,
                        "total": 1638
                    },
                    "genres": [],
                    "href": "https://api.spotify.com/v1/artists/15aJDRh0p0R52KxrDlwsw9",
                    "id": "15aJDRh0p0R52KxrDlwsw9",
                    "images": [
                        {
                            "height": 563,
                            "url": "https://i.scdn.co/image/aa925a0789106e19c3e160ee031d775fd3749a78",
                            "width": 1000
                        },
                        {
                            "height": 360,
                            "url": "https://i.scdn.co/image/6ce6c175d39ae98dad3525b4960d43dcc1144916",
                            "width": 640
                        },
                        {
                            "height": 113,
                            "url": "https://i.scdn.co/image/70dd5d8aba336e63851cf607c6231bb88670ac2b",
                            "width": 200
                        },
                        {
                            "height": 36,
                            "url": "https://i.scdn.co/image/c6fdacf0b8e09ef37b98ec24ed84dd3b0e5b9a8e",
                            "width": 64
                        }
                    ],
                    "name": "Random Recipe",
                    "popularity": 26,
                    "type": "artist",
                    "uri": "spotify:artist:15aJDRh0p0R52KxrDlwsw9"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2khtP0vUSvq7LlIcXHhMAI"
                    },
                    "followers": {
                        "href": null,
                        "total": 262
                    },
                    "genres": [
                        "video game music"
                    ],
                    "href": "https://api.spotify.com/v1/artists/2khtP0vUSvq7LlIcXHhMAI",
                    "id": "2khtP0vUSvq7LlIcXHhMAI",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/a7f49a405764946b59e82f2a658b76eca6a19300",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/988e74c482939da57796d6328fa84dd95405fcd8",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ead04e926312d477c01f2bc1eada8047c84b64be",
                            "width": 64
                        }
                    ],
                    "name": "Random Battles",
                    "popularity": 16,
                    "type": "artist",
                    "uri": "spotify:artist:2khtP0vUSvq7LlIcXHhMAI"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/44B6XaIQxrnH3j1gwuILQo"
                    },
                    "followers": {
                        "href": null,
                        "total": 2178
                    },
                    "genres": [],
                    "href": "https://api.spotify.com/v1/artists/44B6XaIQxrnH3j1gwuILQo",
                    "id": "44B6XaIQxrnH3j1gwuILQo",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/a6942a706210eb6be1def2238565d92eb6a2d3a7",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/6f7b5ce0c07b6b8521ff632ec076ae9efa210ea0",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/9f838c10e9afa8ea496c9292c82338089c074564",
                            "width": 64
                        }
                    ],
                    "name": "Random",
                    "popularity": 4,
                    "type": "artist",
                    "uri": "spotify:artist:44B6XaIQxrnH3j1gwuILQo"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1jb0V2In6UoIQ3weHQq0GY"
                    },
                    "followers": {
                        "href": null,
                        "total": 1
                    },
                    "genres": [],
                    "href": "https://api.spotify.com/v1/artists/1jb0V2In6UoIQ3weHQq0GY",
                    "id": "1jb0V2In6UoIQ3weHQq0GY",
                    "images": [
                        {
                            "height": 633,
                            "url": "https://i.scdn.co/image/adbf5e5a54cc0bb5ced4e46292b31a3537688ea8",
                            "width": 640
                        },
                        {
                            "height": 297,
                            "url": "https://i.scdn.co/image/2050acc75c797645d6aa75eb799ca5a797b7ca39",
                            "width": 300
                        },
                        {
                            "height": 63,
                            "url": "https://i.scdn.co/image/e2919582b1dce2aad26ee240249f308e99e3cfee",
                            "width": 64
                        }
                    ],
                    "name": "Random",
                    "popularity": 0,
                    "type": "artist",
                    "uri": "spotify:artist:1jb0V2In6UoIQ3weHQq0GY"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3DS3BGswlrn8USqD1mqs8n"
                    },
                    "followers": {
                        "href": null,
                        "total": 3
                    },
                    "genres": [],
                    "href": "https://api.spotify.com/v1/artists/3DS3BGswlrn8USqD1mqs8n",
                    "id": "3DS3BGswlrn8USqD1mqs8n",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/be0b1b1111a10c6d5bbc20302c72b77eba05062b",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/aa6e46894ee7d66b9cef91f64472e951b0ed4c46",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/9721d852e2799b5aaef43e45d978d0d5050ac1ec",
                            "width": 64
                        }
                    ],
                    "name": "Random",
                    "popularity": 7,
                    "type": "artist",
                    "uri": "spotify:artist:3DS3BGswlrn8USqD1mqs8n"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0KPx005DC1w8jcVMAWlTnp"
                    },
                    "followers": {
                        "href": null,
                        "total": 17
                    },
                    "genres": [],
                    "href": "https://api.spotify.com/v1/artists/0KPx005DC1w8jcVMAWlTnp",
                    "id": "0KPx005DC1w8jcVMAWlTnp",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/1c158fa6f6999802881484a4f6f8bf1780a68ff6",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/f7fe5db30b46acc2edc800dfb9d7810bdfd92cde",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/1beca41f233649bed23486a9b28a73888935fe99",
                            "width": 64
                        }
                    ],
                    "name": "Random",
                    "popularity": 3,
                    "type": "artist",
                    "uri": "spotify:artist:0KPx005DC1w8jcVMAWlTnp"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6AdajqPKGaU8XxFVeUVKza"
                    },
                    "followers": {
                        "href": null,
                        "total": 143
                    },
                    "genres": [],
                    "href": "https://api.spotify.com/v1/artists/6AdajqPKGaU8XxFVeUVKza",
                    "id": "6AdajqPKGaU8XxFVeUVKza",
                    "images": [],
                    "name": "Random",
                    "popularity": 4,
                    "type": "artist",
                    "uri": "spotify:artist:6AdajqPKGaU8XxFVeUVKza"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/20JaTdfk3frqSwaYIf0ko8"
                    },
                    "followers": {
                        "href": null,
                        "total": 8
                    },
                    "genres": [],
                    "href": "https://api.spotify.com/v1/artists/20JaTdfk3frqSwaYIf0ko8",
                    "id": "20JaTdfk3frqSwaYIf0ko8",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/81ac29172b3eedb3730f7d1411dcc6d2cf8c4bae",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/94cd46f82d5872b4505c636e41f9a30c41d7fd60",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/1db8a970db46d64449dd6e83a2f984d246e46c64",
                            "width": 64
                        }
                    ],
                    "name": "Random",
                    "popularity": 0,
                    "type": "artist",
                    "uri": "spotify:artist:20JaTdfk3frqSwaYIf0ko8"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3psngNBOHis7WWStCM7jou"
                    },
                    "followers": {
                        "href": null,
                        "total": 25
                    },
                    "genres": [],
                    "href": "https://api.spotify.com/v1/artists/3psngNBOHis7WWStCM7jou",
                    "id": "3psngNBOHis7WWStCM7jou",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/569eaf2f82e9c30bfada6a07ce53e893711f379b",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/52dbb2c3fe8ee56c37b8de877a478d5609358d3e",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/94b0ceb34c5cfa2b03a51283f792f9b95163ebbd",
                            "width": 64
                        }
                    ],
                    "name": "Random",
                    "popularity": 1,
                    "type": "artist",
                    "uri": "spotify:artist:3psngNBOHis7WWStCM7jou"
                }
            ],
            "limit": 20,
            "next": "https://api.spotify.com/v1/search?query=random&offset=20&limit=20&type=artist",
            "offset": 0,
            "previous": null,
            "total": 369
        }
    }
    return res.send(artistMock);
});

app.listen(app.get('port'), (err) => {
    console.log(`Server running on port ${app.get('port')}`)
});