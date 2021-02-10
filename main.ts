scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite.destroy()
})
let mySprite: Sprite = null
game.showLongText("Vous êtes Rémi, rat parisien qui vient au secours des démunis", DialogLayout.Center)
game.showLongText("Trouvez tous les légumes avant la fin du temps imparti, puis parvenez à sortir des égouts !", DialogLayout.Center)
mySprite = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ......ff............
    ......ff....ff......
    ......ff....ff......
    .....fdf...fdf......
    .....fdfffffdf......
    .....fdddddddff.....
    ..f..fddddddddff....
    ...fffddfdfdddff....
    ....fddddddddff.....
    ..fffdddddddddfff...
    ...fdddddddddff.....
    ...fffddddddfff.....
    ..f..ffffffff..ff...
    .f.....1..1..f......
    ..............f.....
    `, SpriteKind.Player)
let tomate = sprites.create(img`
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . 2 7 2 7 2 7 2 7 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let aubergine = sprites.create(img`
    . . . . . . . . . 7 . . . . . . 
    . . . . . . . . 7 7 7 . . . . . 
    . . . . . . . 7 c c c 7 . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . . . c c c . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let courgette = sprites.create(img`
    . . . . . . . . 6 . . . . . . . 
    . . . . . . . 6 6 6 . . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . . 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let oignon = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let myEnemy = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
info.setScore(0)
info.setLife(3)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`niveau2`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
tiles.placeOnRandomTile(oignon, sprites.dungeon.floorLight0)
tiles.placeOnRandomTile(tomate, sprites.dungeon.floorLight0)
info.startCountdown(100)
