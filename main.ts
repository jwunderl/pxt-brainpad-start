namespace storyboard {
    function runBrainPadBoot() {
        scene.setBackgroundColor(2)
        const logoLeft = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f .
            . . . . . . . . . . . . . . . . . . . . . f f f f f f f 3 3 3 f
            . . . . . . . . . . . . . . . . . . . . f f 3 3 f f f f 3 3 3 f
            . . . . . . . . . . . . . . . . . . f f f 3 3 3 3 3 3 f f f f f
            . . . . . . . . . . . . . . . . f f f f f 3 3 3 3 3 3 3 f f 3 3
            . . . . . . . . . . . . . . . f f f 3 3 f f f 3 3 3 3 f 3 3 3 3
            . . . . . . . . . . . . . f f f 3 3 3 3 3 3 f 3 3 f f f 3 3 3 3
            . . . . . . . . . . . . f f f f 3 3 3 3 3 3 3 f f f 3 3 f f 3 3
            . . . . . . . . . . . f f 3 3 3 3 3 3 3 3 3 3 f 3 3 3 3 3 f f 3
            . . . . . . . . . . . f f f 3 3 3 3 3 3 3 3 f f f 3 3 3 3 3 3 f
            . . . . . . . . . f f f f 3 3 3 3 3 3 f f 3 3 3 3 f f 3 3 3 3 3
            . . . . . . . . f f 3 3 3 3 3 3 3 3 f f 3 3 3 3 3 3 f f 3 3 3 3
            . . . . . . . f f 3 f f f f f 3 3 3 3 3 3 3 3 3 3 3 3 f f 3 3 3
            . . . . . . . f f 3 f f f f f f f 3 3 f 3 3 3 3 3 3 3 3 f 3 3 3
            . . . . . . . f f 3 f f f f f f f 3 3 f 3 3 3 3 3 3 3 3 f 3 3 3
            . . . . . . . f f 3 f f 3 3 f f f f 3 f 3 3 3 3 3 3 3 3 f 3 3 3
            . . . . . . . f 3 3 f f 3 3 f f f f 3 f f f 3 3 3 3 3 3 f 3 3 3
            . . . . . . f f 3 3 f f f f f f f 3 3 3 f f f f 3 f f f f 3 3 f
            . . . . . f f 3 3 3 f f f f f f f f 3 3 3 f f f f f f f f 3 3 f
            . . . . f f 3 3 3 3 f f f f f f f f f 3 3 f f f f 3 f f f 3 3 3
            . . . f f 3 3 3 3 3 f f f 3 3 f f f f 3 3 f f f 3 3 3 3 3 3 3 f
            . . . f f 3 3 3 3 3 3 f f 3 3 f f f f 3 3 f f f 3 3 3 3 3 3 3 f
            . . . f 3 3 3 3 3 3 3 f f f f f f f f f f f f f 3 3 f f 3 3 3 f
            . . . f 3 3 3 3 3 3 3 f f f f f f 3 3 3 f f f f 3 3 f f 3 3 3 f
            . . . f 3 3 3 3 3 3 3 f f f f f 3 3 3 3 3 3 f f 3 3 3 f 3 3 3 3
            . . . . f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 3 3 3 f f 3 3 3
            . . . . f f 3 3 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f f f 3 3
            . . . . . f f 3 3 f f 3 3 3 3 3 3 3 f f 3 3 3 3 3 f 3 3 3 3 3 3
            . . . . . . f f f f f f 3 3 3 3 3 f f 3 3 3 3 3 3 3 3 3 3 3 3 f
            . . . . . . . . . . . f f f f f f f f 3 3 3 3 3 3 f f f f f f f
            . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . .
        `, SpriteKind.Player)
        const logoRight = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
            f 3 3 3 3 3 f f f f f f f f . . . . . . . . . . . . . . . . . .
            f f f f f 3 3 f f 3 3 3 3 f f f . . . . . . . . . . . . . . . .
            3 3 3 3 f f f f 3 3 3 3 3 3 3 f f . . . . . . . . . . . . . . .
            3 3 3 3 3 3 f f 3 3 3 3 3 3 3 3 f . . . . . . . . . . . . . . .
            3 3 3 3 3 3 3 f f 3 3 3 3 3 3 3 f . . . . . . . . . . . . . . .
            3 3 3 3 3 3 3 f f f 3 3 3 3 f f f f . . . . . . . . . . . . . .
            3 3 3 3 3 3 f f f f 3 3 3 f f 3 3 f f f f f . . . . . . . . . .
            3 3 3 3 f f f f f f f f 3 3 3 3 3 3 3 f 3 3 f . . . . . . . . .
            3 3 f f f 3 3 3 3 3 3 f f 3 3 3 3 3 3 3 f 3 f . . . . . . . . .
            3 f f 3 3 3 3 3 3 3 3 3 3 f f 3 3 3 3 3 f 3 3 f . . . . . . . .
            f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 3 3 f . . . . . . . .
            f 3 3 3 3 3 3 3 3 3 f f 3 3 3 3 3 3 3 3 3 3 3 f . . . . . . . .
            3 3 3 3 3 3 f 3 3 f f f f 3 3 3 3 3 3 f f f 3 f . . . . . . . .
            3 3 3 3 3 3 3 f 3 f f f f 3 3 3 3 f f f 3 f f f . . . . . . . .
            3 3 3 3 3 3 3 f 3 3 f f 3 3 3 3 3 3 3 3 3 3 3 f f . . . . . . .
            3 f f f f 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f . . . . . . .
            f f f f f f f 3 3 f f f f 3 3 3 f f 3 f f f 3 3 f f . . . . . .
            f f 3 3 f f f f 3 f f f f 3 3 3 f f f f f f f 3 3 f f . . . . .
            3 3 3 3 f f f f 3 3 f f f 3 3 3 f f f f f f f 3 3 3 3 f . . . .
            f f f f f f f f 3 3 f f f 3 3 3 f f f 3 3 f f 3 3 3 3 f f . . .
            f 3 3 3 f f f f 3 3 f f f 3 3 3 f f f 3 3 f f 3 3 3 3 3 f . . .
            f 3 3 3 f f f f 3 3 f f f 3 3 3 f f f 3 3 f f 3 3 3 3 3 f . . .
            f f f f f f f f 3 3 f f f f f f f f f 3 3 f f 3 3 3 3 3 f . . .
            f f f 3 3 f f 3 3 3 f f 3 3 3 3 3 3 f 3 3 3 3 3 3 3 3 f f . . .
            3 3 3 3 3 3 3 3 3 f 3 3 3 3 3 3 3 3 3 f 3 3 3 3 3 3 f f . . . .
            3 3 3 3 3 3 3 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f . . . . .
            f f 3 3 3 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 f f f f f f . . . . . .
            f 3 3 3 3 f f 3 3 3 3 3 3 3 3 3 3 3 3 f f . . . . . . . . . . .
            f 3 3 3 f f f f 3 3 3 3 f f f f f f f f . . . . . . . . . . . .
            . f f f . . . f f f f f f . . . . . . . . . . . . . . . . . . .
        `, SpriteKind.Player)
        const logoBottom = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            f f f f f f f . . . . . . . . . . . . . . . . . . f f f f f . .
            f 1 1 1 1 1 1 f . . . . . . . . . . . . . . . . . f 1 1 1 f . .
            f 1 1 1 1 1 1 1 f . . . . . . . . . . . . . . . . f 1 1 1 f . .
            f 1 1 f f f 1 1 1 f . . . . . . . . . . . . . . . f 1 1 1 f . .
            f 1 1 f f f 1 1 1 f . f f f f f f f . . . . . . . f 1 1 1 f . .
            f 1 1 f f f 1 1 1 f f f 1 1 1 1 1 f f . . f f f f f 1 1 1 f . .
            f 1 1 1 1 1 1 1 1 f f 1 1 1 f 1 1 1 f f f f 1 1 1 1 1 1 1 f . .
            f 1 1 1 1 1 1 f f f f 1 1 f f f 1 1 1 f f 1 1 1 1 1 1 1 1 f . .
            f 1 1 1 f f f f . . f f f f f f 1 1 1 f 1 1 1 f f f 1 1 1 f . .
            f 1 1 1 f . . . . f f 1 1 1 1 1 1 1 1 f 1 1 1 f f f 1 1 1 f . .
            f 1 1 1 f . . . . f 1 1 1 f f f 1 1 1 f 1 1 1 f f f 1 1 1 f . .
            f 1 1 1 f . . . . f 1 1 1 f f f 1 1 1 f 1 1 1 1 1 1 1 1 1 f . .
            f 1 1 1 f . . . . f f 1 1 1 1 1 1 f 1 f f 1 1 1 1 1 f 1 1 f . .
            f f f f f . . . . . f f f f f f f f f f f f f f f f f f f f . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `, SpriteKind.Player)
        logoLeft.setPosition(49, 61)
        logoRight.setPosition(81, 61)
        logoBottom.setPosition(112, 61)
        pause(1000)
        sprites.allOfKind(SpriteKind.Player).forEach(s => s.destroy(effects.spray, 500));
        pause(750)
    }

    /**
     * Brainpad boot sequence
     */
    //% block="BrainPad" fixedInstance whenUsed
    export const brainPadBootSequence = new BootSequence(runBrainPadBoot, 0x737373);


    /**
     * Stops the current scene and restart the previous scene
     */
    //% block="start brainpad boot sequence" blockId=startBrainPadBootSequence
    //% weight=10
    export function runBrainPadStart() {
        game.pushScene()
        brainPadBootSequence.register();
        brainPadBootSequence.start(() => { /**game.popScene()**/ }); // the done param doesn't seem to be being applied properly
        game.popScene()
        game.popScene()
    }
}