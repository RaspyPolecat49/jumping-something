


scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
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

//cons flipped = mySprite.image.clone()
//.flipX()
//mySprite.setImage(flipped)
mySprite.x = 20
mySprite.ay = 300 // vertical acceleration

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
    
})


sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile,
 function (sprite: Sprite, otherSprite: Sprite) {
   game.over()
})
game.onUpdate(function () {
    if (mySprite.top < 0 || mySprite.bottom > 120)
        game.over()
})




game.onUpdateInterval(1000, function () {
    let projectile = sprites.createProjectileFromSide(img`
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
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
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
    `, -100, 0)
    projectile.y = Math.randomRange(40, 80)
})















