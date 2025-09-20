enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const countdown = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (countdown_started == false) {
        game.reset()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (countdown_started == false) {
        if (landed == true) {
            countdown_started = true
            mySprite.sayText("3")
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            pause(1000)
            mySprite.sayText("2")
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            pause(1000)
            mySprite.sayText("1")
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            pause(1000)
            mySprite.sayText("liftoff!!")
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
            pause(1000)
            mySprite.sayText("")
            liftoffgo = true
            scene.setBackgroundImage(assets.image`background2`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            mySprite.setScale(2, ScaleAnchor.Top)
            mySprite = sprites.create(assets.image`wockeshipburn`, SpriteKind.Player)
            mySprite.setScale(2, ScaleAnchor.Bottom)
            mySprite.setPosition(78, 80)
            while (liftoffgo == true) {
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                if (mySprite.y == 10) {
                    liftoffgo = false
                    effects.clearParticles(mySprite)
                    scene.setBackgroundImage(assets.image`background0`)
                    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
                    mySprite = sprites.create(assets.image`wockeship`, SpriteKind.Player)
                    mySprite.setScale(2, ScaleAnchor.Bottom)
                    mySprite.setPosition(78, 80)
                } else {
                    mySprite.y += -2
                    pause(100)
                }
            }
            countdown_started = false
            pause(1000)
            landed = false
        } else {
            countdown_started = true
            mySprite.sayText("3")
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            pause(1000)
            mySprite.sayText("2")
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            pause(1000)
            mySprite.sayText("1")
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            pause(1000)
            mySprite.sayText("back to earth!!")
            music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
            pause(1000)
            mySprite.sayText("")
            liftoffgo = true
            scene.setBackgroundImage(assets.image`background3`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            mySprite.setScale(2, ScaleAnchor.Top)
            mySprite = sprites.create(assets.image`wockeshipburn`, SpriteKind.Player)
            mySprite.setScale(2, ScaleAnchor.Top)
            mySprite.setPosition(78, 80)
            while (liftoffgo == true) {
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                if (mySprite.y == 10) {
                    scene.setBackgroundImage(assets.image`background2`)
                    while (liftoffgo == true) {
                        if (mySprite.y < 80) {
                            mySprite.y += 2
                            pause(100)
                        } else {
                            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
                            mySprite = sprites.create(assets.image`wockeship`, SpriteKind.Player)
                            mySprite.setScale(2, ScaleAnchor.Top)
                            mySprite.setPosition(78, 80)
                            mySprite.sayText("landed!!")
                            liftoffgo = false
                        }
                    }
                } else {
                    mySprite.y += -2
                    pause(100)
                }
            }
            countdown_started = false
            pause(1000)
            landed = true
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let liftoffgo = false
let countdown_started = false
let landed = false
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`background2`)
mySprite = sprites.create(assets.image`wockeship`, SpriteKind.Player)
mySprite.setScale(2, ScaleAnchor.Bottom)
mySprite.setPosition(78, 80)
landed = true
