// vertical acceleration
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . 2 2 2 . . . 
. . . . . . . . . . 1 1 1 . . . 
. . . . . . . . . 1 1 4 1 . . . 
. . . . . . . . . 1 1 1 1 1 . . 
. . . . . . 1 1 1 1 1 1 1 5 5 . 
. . . . 1 1 1 1 1 1 1 1 1 . . . 
. . 1 d d 1 1 1 1 1 d 1 . . . . 
. . 1 1 1 d 1 1 1 d d 1 . . . . 
. . . 1 1 1 d d d d 1 1 . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . . . 1 1 1 1 1 5 . . . . . 
. . . . . . 5 . . . 5 5 5 . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
// cons flipped = mySprite.image.clone()
// .flipX()
// mySprite.setImage(flipped)
mySprite.x = 20
// vertical acceleration
mySprite.ay = 300
game.onUpdate(function () {
    if (mySprite.top < 0 || mySprite.bottom > 120) {
        game.over(false)
    }
})
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a 7 a a a a
        a a a a a a a a a 7 7 7 a a a a
        a a a a a a 7 7 6 a 7 7 a a a a
        7 7 a a 6 6 6 6 7 7 7 7 a a a a
        a 7 7 a 7 7 7 7 7 a 6 7 a a a a
        7 7 7 7 7 7 7 6 6 6 7 7 a a a a
        7 7 7 7 7 7 7 7 7 7 a a a a a a
        7 6 7 7 7 7 7 7 a a a a a a a a
        a a 6 7 7 7 a a a a a a a a a a
        a a a 6 7 7 7 a a a a a a a a a
        a a a a 6 6 7 7 7 a a a a a a a
        a a a a a 6 6 7 7 7 a a a a a a
        a a a a a a a 6 7 7 7 a a a a a
        a a a a a a a 7 6 7 7 a a a a a
        a a a a a a a a 6 7 7 a 7 a a a
        a a a a a a a a 7 7 7 7 7 7 a a
        a a a a a a a a a 7 7 6 7 7 7 a
        a a a a a a a a a 7 7 7 7 7 7 7
        a a a a a a a a a a 7 6 7 7 7 7
        a a a a a a a a a a 7 a 7 7 6 7
        a a a a a a a a a a 7 a 7 7 6 a
        a a a a a a a a a a 7 a 7 7 6 7
        a a a a a a a a a a a 6 a 6 7 7
        a a a 7 a a a a a a a 7 6 6 a a
        a a a 7 7 7 7 a a a a 7 6 a a a
        a a a 7 7 7 7 7 a a a 6 6 7 a a
        a a a 7 7 7 a 7 7 a a a 6 a a a
        a a a a 7 7 7 7 7 a a a 7 a a a
        a a a a a 7 a 7 6 a 7 a 7 a a a
        a a a a e 7 7 7 7 a 7 7 7 7 7 a
        a a a a e 7 7 a 7 7 6 a 7 a a a
        a a a a a a a 6 a 7 7 7 7 a a a
        a a a a a a a 6 7 a a e e e e e
        a a a a a a e a a e e a 7 7 a a
        a a a a a e e 7 e e e e e a a a
        a e e e e e 7 7 7 a a a 7 a 7 7
        a a a a e a 7 7 7 a a a a 7 a 7
        a e a e e e 7 6 7 e a a 7 a 6 7
        a e e e a 7 a e e e e e a a 7 7
        e e e e e 7 e e e e e 7 7 7 7 7
        e e e e e 7 7 7 7 a 7 7 7 6 7 7
        e e e a e e 7 6 6 7 e 7 7 7 a a
        e e e a a e 6 e 6 e 7 7 7 a a a
        e a e a e e 6 7 6 7 7 7 e a a e
        e e e a e 6 e 6 7 7 6 e e a e e
        e a e 7 e e 7 7 7 e e a e e e e
        e 6 e a 7 7 7 7 a 7 7 a e e e e
        e a a 7 7 7 7 6 6 7 7 7 a e e e
        e e 7 e 7 7 6 6 6 6 7 7 7 e e e
        e e 7 7 7 e 6 6 6 6 6 7 a e e e
        e a 7 7 7 6 6 e a 6 e e 7 e e e
        7 7 7 e 6 a e e e a e e e e e e
        7 7 e e e e e e e e e e e e e e
        7 7 e e e e a e e e e a e e e e
        e 7 e e e e e e e e e e e e e e
        e 7 e e e e e e e e e e e e e e
        e e 7 e e e e e e e e e e e e e
        e 7 a e e 7 e e e e e e e a e e
        6 7 a e e 7 e e e e a e e e e a
        7 6 6 e e e a e e e e e 6 e e e
        7 7 e 6 6 6 7 a e e e e e 7 e a
        7 6 7 6 e e 6 6 e e a a 6 7 a e
        7 6 6 7 7 6 7 6 6 6 6 7 e 7 7 e
        6 6 6 7 7 e e e 6 6 e 6 6 7 7 e
        7 6 7 7 7 6 6 6 6 6 6 6 7 7 7 7
        7 6 6 6 6 7 7 e 7 7 7 7 7 7 . .
        7 7 7 7 7 6 6 7 7 7 7 7 . . . .
        . . e . 7 . . e . 7 7 7 . . . .
        . . . 7 7 . . e . . 7 . e . . .
        . . e 7 . . . e . . 7 . . . . .
        . . . . . . . . . . 7 . 7 . . .
        . . . . . . . e . . 7 7 7 . . .
        . . . 7 . . . . . . . 7 . . . .
        . . . . . . . 7 . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . 7 7 . 7 . e . . . . . . . . .
        . . 7 7 7 . 7 7 . . . . . e . .
        . . 7 7 7 . . . . 7 . . 7 . 7 .
        . 7 . . 7 . . . . 7 7 . 7 . 7 .
        . . . 7 7 . 7 7 . 7 . 7 7 . . .
        . . . . e 7 7 . . 7 7 7 7 . . .
        7 7 7 7 7 7 7 7 7 . . . 7 7 . .
        7 4 7 9 7 7 7 7 2 7 7 7 7 7 1 .
        7 7 7 3 9 9 7 7 7 1 7 2 7 5 7 7
        7 7 1 7 4 3 2 7 7 2 3 7 7 4 7 7
        7 7 7 7 9 7 2 4 7 3 9 7 7 7 9 7
        7 2 7 1 2 7 2 4 7 7 3 1 2 7 3 1
        7 3 7 7 9 7 9 9 9 9 3 1 5 7 5 7
        e 7 7 4 7 7 7 4 7 5 9 7 4 7 1 7
        e a 7 7 7 7 a e a 2 7 7 2 7 9 7
        e e 7 7 a 7 7 7 e a e a 3 7 7 7
        e e a 7 7 7 7 7 e e e 7 7 7 3 7
        e e e a 7 7 7 7 7 e e e 7 7 a 7
        e e a 7 7 a 7 7 7 e e e 7 a a e
        e e e a a 7 7 a 7 e a a a 7 a e
        e e e e 7 e a 7 a 7 e 7 7 7 e e
        e e e e e e e 7 7 a e 7 7 7 e e
        e e e e e e a 7 e e e 7 7 7 e e
        e e e e e a 7 7 e e e 7 e a e e
        e e e e e 7 7 7 e e e e e a 7 a
        e e e a e 7 7 7 e e e e 7 e a 7
        e e e a e a 7 a e e e e 7 e e e
        e e e 7 a e 7 e e e e e 7 7 e a
        e a 7 7 a e e e e e e e e e e e
        e e a 7 a e e a a a e e e e e a
        e e e e e e e e a e a e a e e a
        e e e 7 a e a e e e a a e e e a
        e e a e e e e e e e e a e e a a
        e a 7 7 e e e e a a a a e e e a
        e a 7 e e e e e e a e e e a a a
        a e a e e e e e e e e a e a a e
        a a a a e e e e e e e e e e e a
        e a a e e a e e a a e e e e a a
        a e e a e e e e e e a e e e a a
        e e e e a e e e e e a e a e e a
        a e e e e e e e a a e e e e e e
        e a a e e e e a e e e e e e e a
        a e e a e e e e a e e e e a e a
        e e e e e e e e e e e a e e a a
        a a a e e e e e e e e a a e e a
        a e e a a e e e e e e e e e e e
        a a a e e e a e e e a e e e e e
        a a e a e e e e e e e e e e a a
        e e e a a a e e e e e a e e a a
        a a a a a a a e e e e e e e a a
        a a a e a a e e e e a e e e a a
        e e e e e e e a e a e a a e a a
        a e e e a e e e e a a a a e e a
        e e a a e e e e e e e e a e e a
        a a a e e e e a e e e a e e e a
        a e a a a a e e e a a e e e a a
        a a a a a a a a e a e a e a e a
        a a a a a a e a e a e a a a a a
        e a e e a a e a a e e a a a a a
        e e a e a a e a a e a a a a a a
        a e a e a e e a a a a a a a a a
        a a a e a a a a e a a a e a a a
        e e a a e a a a a a a a e e a a
        a a a a a a a a a a a e a a a a
        a a a a a a e e a a a e a a a a
        a a a a a e e a a a a a e a a a
        a a a a a a a a a a a a e a a a
        a a a a a a a a a e a a a e a a
        a a a a a a a a a a a a a e a a
        a a a a a a a a a a a a a a e a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
    `, -100, 0)
    projectile.y = Math.randomRange(40, 80)
})
