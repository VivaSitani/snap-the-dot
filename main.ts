input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else if (sprite.get(LedSpriteProperty.X) != 2) {
        livesRemaining = livesRemaining - 1
    } else if (livesRemaining == 0) {
        game.gameOver()
    }
    
})
let livesRemaining = 0
let sprite : game.LedSprite = null
sprite = game.createSprite(2, 2)
livesRemaining = 3
let sprite2 = game.createSprite(5, 0)
let sprite3 = game.createSprite(3, 0)
let sprite4 = game.createSprite(2, 0)
basic.forever(function on_forever() {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(100)
    if (livesRemaining == 0) {
        game.gameOver()
        sprite2.delete()
    } else if (livesRemaining == 2) {
        sprite4.delete()
    } else if (livesRemaining == 1) {
        sprite3.delete()
    }
    
})
