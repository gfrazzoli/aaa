// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000001010101000000000000000000000000000001010100000000000000000000000101000001010000000000000000000001000000000101010000000000000000010000000001010100000000000000000100000001010001010000000000000001000001000100000100000000000000010000010101010100000000000000000001010101010000000000000000000000010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . 2 . . . . . . . . 2 . . . 
. . . . 2 2 2 2 2 2 2 2 2 . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
