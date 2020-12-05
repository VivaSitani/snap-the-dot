def on_button_pressed_a():
    global livesRemaining
    if sprite.get(LedSpriteProperty.X) == 2:
        game.add_score(1)
    elif sprite.get(LedSpriteProperty.X) != 2:
        livesRemaining = livesRemaining - 1
    elif livesRemaining == 0:
        game.game_over()
input.on_button_pressed(Button.A, on_button_pressed_a)

livesRemaining = 0
sprite: game.LedSprite = None
sprite = game.create_sprite(2, 2)
livesRemaining = 3
sprite2 = game.create_sprite(5, 0)
sprite3 = game.create_sprite(3, 0)
sprite4 = game.create_sprite(2, 0)

def on_forever():
    sprite.move(1)
    sprite.if_on_edge_bounce()
    basic.pause(100)
    if livesRemaining == 0:
        game.game_over()
        sprite2.delete()
    elif livesRemaining == 2:
        sprite4.delete()
    elif livesRemaining == 1:
        sprite3.delete()
basic.forever(on_forever)
