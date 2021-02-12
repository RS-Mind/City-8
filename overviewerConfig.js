var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "early_medieval - overworld",
        "high_medieval - overworld",
        "renaissance - overworld"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1613083466",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Early Medieval",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "early_medieval",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "early_medieval - overworld",
            "last_rendertime": 1608504051,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                30,
                80,
                22
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "High Medieval",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "high_medieval",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "high_medieval - overworld",
            "last_rendertime": 1596419654,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                30,
                80,
                22
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Renaissance",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "renaissance",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "renaissance - overworld",
            "last_rendertime": 1613081875,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                1000000,
                96,
                1000000
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};