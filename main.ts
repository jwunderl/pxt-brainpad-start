namespace storyboard {
    function runBrainpadBoot() {
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
    export const brainpadBootSequence = new BootSequence(runBrainpadBoot, 0x737373);
}