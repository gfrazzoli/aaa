scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
game.showLongText("Allez c'est parti", DialogLayout.Full)
let mySprite = sprites.create(img`
    f f . f f 
    f . . . f 
    . f . f . 
    . . . . . 
    . f f f . 
    `, SpriteKind.Player)
info.setScore(0)
info.setLife(3)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`niveau2`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
info.startCountdown(10)
