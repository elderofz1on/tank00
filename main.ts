namespace SpriteKind {
    export const PC_projectile = SpriteKind.create()
}
let direction = -100
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . 4 4 . 5 5 5 . 4 4 . . . 
    . . . . d e b 5 5 5 3 e d . . . 
    . . . . 4 e b b b b 3 e 4 . . . 
    . . . . d e b b b 4 3 e d . . . 
    . . . . 4 e b b 4 4 3 e 4 . . . 
    . . . . d e b 4 4 4 3 e d . . . 
    . . . . 4 e 3 3 3 3 3 e 4 . . . 
    . . . . d e 2 2 2 2 2 e d . . . 
    . . . . 4 e . . . . . e 4 . . . 
    . . . . d d . . . . . d d . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
forever(function () {
	
})
