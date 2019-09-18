namespace SpriteKind {
    export const Letter = SpriteKind.create()
    export const selection = SpriteKind.create()
}
function splashScreen() {
    scene.setBackgroundColor(2)
    logoA = sprites.create(img`
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
    logoB = sprites.create(img`
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
    logoC = sprites.create(img`
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
    logoA.setPosition(49, 61)
    logoB.setPosition(81, 61)
    logoC.setPosition(112, 61)
    pause(2000)
    logoA.destroy(effects.spray, 500)
    logoB.destroy(effects.spray, 500)
    logoC.destroy(effects.spray, 500)
    pause(1000)
}
function generateRandomLetter() {
    generateRandomNumber()
    generateUniqueAnswers()
    generateRandomAnswers()
    currentLetter.setImage(alphabet[indexNumber])
}
function generateCorrectAnswerPosition() {
    correctAnswerPosition = Math.randomRange(1, 5)
}
function generateUniqueAnswers() {
    position1RandomNumber = Math.randomRange(1, 25)
    if (position1RandomNumber == indexNumber) {
        position1RandomNumber = Math.randomRange(1, 25)
    }
    position2RandomNumber = Math.randomRange(1, 25)
    if (position2RandomNumber == indexNumber || position1RandomNumber == position2RandomNumber) {
        position2RandomNumber = Math.randomRange(1, 25)
    }
    position3RandomNumber = Math.randomRange(1, 25)
    if (position3RandomNumber == indexNumber || position2RandomNumber == position3RandomNumber) {
        position3RandomNumber = Math.randomRange(1, 25)
    }
    position4RandomNumber = Math.randomRange(1, 25)
    if (position4RandomNumber == indexNumber || position3RandomNumber == position4RandomNumber) {
        position4RandomNumber = Math.randomRange(1, 25)
    }
    position5RandomNumber = Math.randomRange(1, 25)
    if (position5RandomNumber == indexNumber || position4RandomNumber == position5RandomNumber) {
        position5RandomNumber = Math.randomRange(1, 25)
    }
}
function generateRandomNumber() {
    indexNumber = Math.randomRange(0, 25)
}
function generateRandomAnswers() {
    selectionOne.setImage(img`
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
    `)
    selectionOne.setImage(answers[position1RandomNumber])
    selectionOne.setPosition(10, 20)
    selectionTwo.setImage(img`
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
    `)
    selectionTwo.setImage(answers[position2RandomNumber])
    selectionTwo.setPosition(10, 40)
    selectionThree.setImage(img`
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
    `)
    selectionThree.setImage(answers[position3RandomNumber])
    selectionThree.setPosition(10, 60)
    selectionFour.setImage(img`
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
    `)
    selectionFour.setImage(answers[position4RandomNumber])
    selectionFour.setPosition(10, 80)
    selectionFive.setImage(img`
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
    `)
    selectionFive.setImage(answers[position5RandomNumber])
    selectionFive.setPosition(10, 100)
    generateCorrectAnswerPosition()
    if (correctAnswerPosition == 1) {
        selectionOne.setImage(answers[indexNumber])
    } else if (correctAnswerPosition == 2) {
        selectionTwo.setImage(answers[indexNumber])
    } else if (correctAnswerPosition == 3) {
        selectionThree.setImage(answers[indexNumber])
    } else if (correctAnswerPosition == 4) {
        selectionFour.setImage(answers[indexNumber])
    } else if (correctAnswerPosition == 5) {
        selectionFive.setImage(answers[indexNumber])
    } else {

    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectionIcon.y == 20) {
        selectionIcon.setPosition(10, 100)
    } else {
        selectionIcon.y += -20
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectionIcon.y == 100) {
        selectionIcon.setPosition(10, 20)
    } else {
        selectionIcon.y += 20
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectionIcon.y == 20 && correctAnswerPosition == 1) {
        generateRandomLetter()
        info.changeScoreBy(1)
        music.playTone(587, music.beat(BeatFraction.Half))
    } else if (selectionIcon.y == 40 && correctAnswerPosition == 2) {
        generateRandomLetter()
        info.changeScoreBy(1)
        music.playTone(587, music.beat(BeatFraction.Half))
    } else if (selectionIcon.y == 60 && correctAnswerPosition == 3) {
        generateRandomLetter()
        info.changeScoreBy(1)
        music.playTone(587, music.beat(BeatFraction.Half))
    } else if (selectionIcon.y == 80 && correctAnswerPosition == 4) {
        generateRandomLetter()
        info.changeScoreBy(1)
        music.playTone(587, music.beat(BeatFraction.Half))
    } else if (selectionIcon.y == 100 && correctAnswerPosition == 5) {
        generateRandomLetter()
        info.changeScoreBy(1)
        music.playTone(587, music.beat(BeatFraction.Half))
    } else {
        info.changeLifeBy(-1)
        music.playTone(147, music.beat(BeatFraction.Half))
    }
})
let logoC: Sprite = null
let logoB: Sprite = null
let logoA: Sprite = null
let currentLetter: Sprite = null
let alphabet: Image[] = []
let answers: Image[] = []
let selectionFive: Sprite = null
let selectionFour: Sprite = null
let selectionThree: Sprite = null
let selectionTwo: Sprite = null
let selectionOne: Sprite = null
let selectionIcon: Sprite = null
let indexNumber = 0
let correctAnswerPosition = 0
let position5RandomNumber = 0
let position4RandomNumber = 0
let position3RandomNumber = 0
let position2RandomNumber = 0
let position1RandomNumber = 0
storyboard.runBrainPadStart()
info.setScore(0)
info.setLife(3)
position1RandomNumber = 0
position2RandomNumber = 0
position3RandomNumber = 0
position4RandomNumber = 0
position5RandomNumber = 0
correctAnswerPosition = 0
indexNumber = 0
selectionIcon = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 . . . . . . . . . . . . 5 5
    5 5 . . . . . . . . . . . . 5 5
    5 5 . . . . . . . . . . . . 5 5
    5 5 . . . . . . . . . . . . 5 5
    5 5 . . . . . . . . . . . . 5 5
    5 5 . . . . . . . . . . . . 5 5
    5 5 . . . . . . . . . . . . 5 5
    5 5 . . . . . . . . . . . . 5 5
    5 5 . . . . . . . . . . . . 5 5
    5 5 . . . . . . . . . . . . 5 5
    5 5 . . . . . . . . . . . . 5 5
    5 5 . . . . . . . . . . . . 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
`, SpriteKind.Player)
selectionOne = sprites.create(img`
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
`, SpriteKind.selection)
selectionTwo = sprites.create(img`
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
`, SpriteKind.selection)
selectionThree = sprites.create(img`
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
`, SpriteKind.selection)
selectionFour = sprites.create(img`
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
`, SpriteKind.selection)
selectionFive = sprites.create(img`
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
`, SpriteKind.selection)
selectionIcon.setPosition(10, 20)
scene.setBackgroundColor(9)
answers = [img`
    . . f f f . . .
    . f . . . f . .
    . f . . . f . .
    . f f f f f . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . . . . . . . .
`, img`
    . f f f f . . .
    . f . . . f . .
    . f . . . f . .
    . f f f f . . .
    . f . . . f . .
    . f . . . f . .
    . f f f f . . .
    . . . . . . . .
`, img`
    . . f f f f . .
    . f . . . . . .
    . f . . . . . .
    . f . . . . . .
    . f . . . . . .
    . f . . . . . .
    . . f f f f . .
    . . . . . . . .
`, img`
    . f f f f . . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . f f f f . . .
    . . . . . . . .
`, img`
    . f f f f f . .
    . f . . . . . .
    . f . . . . . .
    . f f f f . . .
    . f . . . . . .
    . f . . . . . .
    . f f f f f . .
    . . . . . . . .
`, img`
    . f f f f f . .
    . f . . . . . .
    . f . . . . . .
    . f f f f . . .
    . f . . . . . .
    . f . . . . . .
    . f . . . . . .
    . . . . . . . .
`, img`
    . . f f f f . .
    . f . . . . . .
    . f . . . . . .
    . f . f f f . .
    . f . . . f . .
    . f . . . f . .
    . . f f f . . .
    . . . . . . . .
`, img`
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . f f f f f . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . . . . . . . .
`, img`
    . f f f f f . .
    . . . f . . . .
    . . . f . . . .
    . . . f . . . .
    . . . f . . . .
    . . . f . . . .
    . f f f f f . .
    . . . . . . . .
`, img`
    . . . . f . . .
    . . . . f . . .
    . . . . f . . .
    . . . . f . . .
    . f . . f . . .
    . f . . f . . .
    . . f f . . . .
    . . . . . . . .
`, img`
    . f . . . f . .
    . f . . f . . .
    . f . f . . . .
    . f f . . . . .
    . f . f . . . .
    . f . . f . . .
    . f . . . f . .
    . . . . . . . .
`, img`
    . f . . . . . .
    . f . . . . . .
    . f . . . . . .
    . f . . . . . .
    . f . . . . . .
    . f . . . . . .
    . f f f f f . .
    . . . . . . . .
`, img`
    . f . . . f . .
    . f f . f f . .
    . f . f . f . .
    . f . f . f . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . . . . . . . .
`, img`
    . f . . . f . .
    . f . . . f . .
    . f f . . f . .
    . f . f . f . .
    . f . . f f . .
    . f . . . f . .
    . f . . . f . .
    . . . . . . . .
`, img`
    . . f f f . . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . . f f f . . .
    . . . . . . . .
`, img`
    . f f f f . . .
    . f . . . f . .
    . f . . . f . .
    . f f f f . . .
    . f . . . . . .
    . f . . . . . .
    . f . . . . . .
    . . . . . . . .
`, img`
    . . f f f . . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . f . f . f . .
    . f . . f f . .
    . . f f f f . .
    . . . . . . . .
`, img`
    . f f f f . . .
    . f . . . f . .
    . f . . . f . .
    . f f f f . . .
    . f . f . . . .
    . f . . f . . .
    . f . . . f . .
    . . . . . . . .
`, img`
    . . f f f f . .
    . f . . . . . .
    . f . . . . . .
    . f f f f . . .
    . . . . . f . .
    . . . . . f . .
    . f f f f . . .
    . . . . . . . .
`, img`
    . f f f f f . .
    . . . f . . . .
    . . . f . . . .
    . . . f . . . .
    . . . f . . . .
    . . . f . . . .
    . . . f . . . .
    . . . . . . . .
`, img`
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . . f f f . . .
    . . . . . . . .
`, img`
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . . f . f . . .
    . . . f . . . .
    . . . . . . . .
`, img`
    . f . . . f . .
    . f . . . f . .
    . f . . . f . .
    . f . f . f . .
    . f . f . f . .
    . f f . f f . .
    . f . . . f . .
    . . . . . . . .
`, img`
    . f . . . f . .
    . f . . . f . .
    . . f . f . . .
    . . . f . . . .
    . . f . f . . .
    . f . . . f . .
    . f . . . f . .
    . . . . . . . .
`, img`
    . f . . . f . .
    . f . . . f . .
    . . f . f . . .
    . . . f . . . .
    . . . f . . . .
    . . . f . . . .
    . . . f . . . .
    . . . . . . . .
`, img`
    . f f f f f . .
    . . . . . f . .
    . . . . f . . .
    . . . f . . . .
    . . f . . . . .
    . f . . . . . .
    . f f f f f . .
    . . . . . . . .
`]
alphabet = [img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d f d f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d f d f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d f d f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . f f f d d d d d f d f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f . f f f f f f f f f d d d d d d f d f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d f f f f f f f f f f f f f d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d d d d d d d f f f f d d d d d f f d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d d d d d d d d f f f d d d d d d f f d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f d d d d d d d d d d d f f d d d d d d d f d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f d d d d d d d d d d d f d d d d d d d d f d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d f d d d d d d d d d d d f d d d d d d d d f d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d f d d d d d d d d d d f f d d d d d d d d f d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f f f f f f d d d d d d d d d f d d d d d d d d d d f d d d d d d d d d f d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d f f d d d d d d d d d f d d d d d d d d d d f d d d d d d d d d d f d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d d f d d d d d d d d d d f d d d d d d d d d d f d d d d d d d f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d f d d d d d d d d f d d d d d d d d d d f d d d d d d d d d d f d d d d d d d f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d f d d d d d d d d f d d d d d d d d d f d d d d d d d d d d d f f f d d d d d f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d f d d d d d d d f d d d d d d d d d f d d d d d d d d d d f d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f d d d d d d d d d f d d d d d d d f d d d d d d d d d f d d d d d d d d d f d d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d f d d d d d d d d d f d d d d d d d f d d d d d d d d d f f d d d d d d d d f d d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d f f d d d d d d f d d d d d d d d d f f f f f d d d d d f d d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d f d d d d d d d d f f d d d d d d f d d d d d d d d f f d d d d d d d d d f d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f f f f d d d d d d d d f f d d d d f f f d d f f f f d d f f d d d d d d d d d f d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d f f f d d d d d f f d f d d d f f f f d d d d d d d d f f f f f d d d d d d f d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d f d d d d d d d d f d d d d d d f d d d d d d d d f f f f f f d d d d f f d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d f d d d d d d d f d d d d d d f d d d d d d d d f f d d f f d d d d f d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d f f f d d d d d d f d d d d d d f d d d d d d d d f f d d d d f d d f d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f f f f f f f f d d d d d f f f d d d d d f f d f f f f d d f f d d d d f d d f d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d f f d d d f f f f f f f f f f f f f d d f f d f f d d d f f f f f d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d f d d f f d f f f f f f f f f f d d d d f f f f f f f f f f f f f d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d f f f d d f f d d d d f f f f d d d d f f f f f f f f f f f f f d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d f f d f f f d d d d d d f f f d d f f f f d d d d d d d d d d f d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d d f f f f f d d d d d d f f f f f f f f f d d d d d d d d d d f f d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f d d d d f f f f f f f d d d d d d d d d d d d d f f d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f f f f f f f d d d d d d d d d d d d d d d d d d f f d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f f f f d d d d d d d d d d d d d d d d d d d d f f d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f f f f d d d d d f f f f f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f f d f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d f f f f f f d d f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d f f f f f f f f f d d d d d f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f d d f f f f d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d f f f f d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d f d d d d d d d d d f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d f d d d d d d d d d f f d d d d d f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d d f f d d d d d d f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d d f d d d d d d d d f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d d d d d f d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d d d d d f d d d d d d d d d f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d d d d d f d d d d d d d d d f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d d d d d f d d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d d d d d f d d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f d d d d d d d d f d d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f f f f f f f f f f d d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f f d d d d d d f f d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d f f d d d d d d d d f f d d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d f f d d d d d d d d d f d d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d f f f f f d d f f f d d d d d d d d d d f d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d f f d d d d d f f d d d d d d d d d d f f f f f f f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d f f d d d d d d f f d d d d d d d d d f f d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d f f d d d d d d d f d d d d d d d d d f d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d d d d f d d d d d d d d d f d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d d d d f d d d d d d d d d f d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d d d d f d d d d d d d d d f d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d d d d f d d d d d d d d d f d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d f f f f f f f f f f f d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d f f f f f f f f f f f d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d f d d d d d d d d d f d d f f d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d f d d d d d d d d d f f f f f f f f f f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f d d d d d d d d d f f f d d d d d d d f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f f f d d d d d d f d d d d d d d d d f f d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d f d d d d d d d d d d f d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d f d d d d d d d d d d f d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d f d d d d d d d d d d f d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d f d d d d d d d d d d f d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d f d d d d d d d d d f f d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f d d d d d d d d f d d d d d d d d d f f d d d d d d d d d d d f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f d d d d d d d d f d d d d d d d d d f f f d d d d d d d d d d f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d d d d d d d f d d d d d d f f f f f f d d d d d d d d d d f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f d d d d d d d d f f f f f f f f f f f f f f d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f d d d d d d d f f d d d d d d d d d f f f f f d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f d f f f d d d d f d d d d d d d d d d f d d d f f f d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d f f d d d f d d d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d f f d d d d d f f f f f f f f d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d f f d d d d f f f f f f f f f f f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f f f f d d f f f d d d d d d d f f f f d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f d d f f f f d d d d d d d d d f f 1 f f d d d d d d d d d d d d d d f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d f f f f d d d d d d d d d d d d d d d f d f f f f f d d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f d d d d d d d d d d d d d d d f d f f f f f f d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d f d d d d d d d d d d d d d d d d f f d d d d f f d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f f f f f f d d d f d d d d d d d d d d d d d d f f d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d f f f f f d d d d d d f f f f f f d d d d d d d d d d d d d d d f f d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d f f f d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d f f d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d f f d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d f f d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f f d d f f f d d d d d d d d d d d d d f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f f d d d d f f d d d d d d d d d d d d f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f f f d d d d f f d d d d d d f f d d d d d d d d d d d f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f f f f d d d d f f d d d d d d d f f d d d d d d d d d d f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f f f f d d d d d f f d d d d d d d d d f d d d d d d d d d d f f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f f f d d d d d d f d d d d d d d d d d d f d d d d d d d d d f f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f f f f d d d d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d f f f f f f d d d d f f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f d d f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f d d d f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f d d f f f f f d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d d d d f f f f d d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f f f f d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f f f f d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f d d f d d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f f f f f f f f f d d d d d d f d d d f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d f f f f f d d d d d d f f f f d d d d f f f f f d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f f d f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d d d d f d d d d d d f f f f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d d d d d f d d d d d d f f f f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d f f f d d d d f f f f f f d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d f f f f f f f f f f f f f f f d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d f d d d f f f . f . . . . f f f f f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d f f f f f d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d f d d d d d d d d d d f f f f f d d f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d f f d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f f d f d d d d d d d d d d d f f d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d f d d d d d d d d d d d f f f d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d f f f f d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d f f f d d d d f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f d d d d f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f f d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f f d d f f . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f f d d d f f . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f d d d d f f f . . . . . . . . . . . . . . . . . f f f d d d d d d f f f . . . .
    . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d f f f f f f f f d d d d d d f f f f . . . . . . . . . . . . . f f f d d d d d d d d d d d f f . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f f f d d d d d d d d f f f f . . . . . . . . . . . . f f d d d d d d d d d d d d d d f . . .
    . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d d d d d f d d d d d d d d d f f f f . . . . . . . . . f f f f d d d d d d d d d d d d d d f . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f d d d d d d d d d d f f . . . . . . . f f f f f d d d d d d d d d d d d d d f . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f d d d d d d d d d d f f f . . . . f f f f d d d d d d d d d d d d d d d f f f . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f d d d d d d d d d d d f f f f f f f f f d d d d d d d d d d d d d d d f f f f . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f d d d d d f d d d d d d f f f f f f d d d d d d d d d d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f f d f f f f d d d d d d d f f f d d d d d d d d d f d d d d d d d d f f . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f f d f f f d d d d d d d d d f d d d d d d d d d d f d d d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . . . . f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d f d d d d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d f d d d d d d d d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d f d d d d d d d d d d d f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d f f d d d d d d d d f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d f f d d d d d f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d f f d d d d f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d f f d d f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f f f d d d d f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . f f d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d f f f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d f f f f f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f . . . f f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f . . . f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d f f f . . f f d d d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d f f f . f f d d d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f . f f d d d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f f f f f d d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f 1 f f d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d d d d d f f f f f d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f d d d d d d d d d d d d f f f f f d d d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d f f d d d d d d d d d d d d d f f f f d d d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d d d d d d d d d d f f f f d d d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f d d d d d d d d d d d d d f f f f f f d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f d d d d d d d d d d d d d f f f f d d f f f f f f f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f d d d d d d d d d d d d d f f d d d d d d d d f f f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f d d d d d d d d d d d d d f d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f d d d d d d d d d d d d f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f d d d d d d d d d d d d f d d f d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d f d d d d d f f f f d d d f f f f d d d d d d d d d d d d d d f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d f d d d d f f f f f f d d f f f d d d d d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d f f d d d d d d d d d d f d d d d f f f d d d d d f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d f f d d d d d d d d d f d d d d d d d d d d d d f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d d f d d d d d d d d d d d d f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d d d d d d f d d d d d d d d d d d f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d f d d d d d f f d d f d d d d d d d d d d d f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d f f d d f f f f f d f f d d d d d d d d d d f d d d d d d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d f d d f d f f f f f f d d f d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d f f f f d d f d d f f f f d d d f d d d d d f f f d d f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d f f f f f d d f f d d d d d d d d f f d d f f f f f f f f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d f f f d d d d d f d d d d d d d d d f d f f d d d d d f f f d d d d d d d f d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f d f f d d d d d d f d d d d d d d d d f f f f d d d d d f f f d d d d d d d f d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f d d d d d d d d d f f d d d d d d d d f f f f d d d d d f f f f d d d d d f f d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f d d d d d d d d f f d d d d d d f f f f f f d d d d f f f f f d d d d d f f d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f d d d d d d d f f f d d d d d f f f f f f f d d d f f d f f f f d d d f f d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f d d d d d f f f f f d d d f f d d d f f f f f d d d d f f f f f f f f f d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d f d d d d f f d d d f d d d f d d d d d f f f d d d d f f f f f f f f f d d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d f d d d f d d d d f f d d f d d d d d f f d d d d f d d d d f f f f f d d d d d f d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d f d d d f d d d d f f f 1 f d d d d d f f d d d f d d d d d f f d f f d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d f d d f d d d d f f f f f d d d d d f d d d f d d d d d d d f d d d f d d d f d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d f f f f f f f f f f f f f f d d d f f d d f f d d d d d d f f d d d d f f f f d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d f f f f f d d f f f f f f f f f f f f d d f d d d d d d f f d d d d d d f f f d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d f f f f f f f f f f f f d d f d d d d d f f f d d d d d d d f f d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d f f f f f d d d d f f f f f f f d d d f d d d f f f d d d d d d d d d f d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f f f f f d d d d f f f f f d d d d d d d d d d f d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f f f f f d d d d d f f d d d d d d d d d d d d d f d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f f f f f f d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f f d d f f d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f f f d d d f f f d d d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f f d d d d f f f f d d d d d d d d d d d d d d d f f f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f f d d d f f d d d f d d d d d d d d d d d d d f f f f d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f d d d d f d d d d d f d d d d d d d d d d d f f f f d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f d d d d d f f d d d d d d d d d d f f f d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f d d d d f f d d d d d d f f f d d d d d d d f f f d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d f f f f f d d d f f d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d f f f f f f d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d f f f f d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d f f f f d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d f f f f d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d f d d d f d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f d d d d d d d d d d d f d d d d d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f f f f d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f . . . . . f f f d d d d d d d d d f f f f f f f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . f f f d d d d d d d d d d d f f f f f f f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d d d d d d d d d d d d f d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d f f f f d d d d d d d d d d d d d f d d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f d d d d d d d d d d d d d d f d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f d d d d d d d d d d d d d d f d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d f d d d d d d d d d d d d f d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f d d d d f f f f f f d d d d d f f f f d d f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f d d f f f f f f d d d d d d d d d d d d f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f d d d d d d d d d d f f f d d f f f f d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d f d d d d d d d f d d d f f d d d d d d d d d d f d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d f d d d d d f d d d d d f d d d d d d d d d d f d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f d d f f d d d d d d f d d d d d d d d d d f d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f d d d d d d d d d d d f f d d d d f f f d d f d d d d f d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f d d d d d d d d d d f f f d d d f f f f f f f d d f f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d f d d d d d d d d f f d d d d f d d d d f f f f f f d f f f f f f f f f f d d f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d f d d d d d d d d d d d d d f d d d d f d d d f f f f d d d d d f f f d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d f f f d d d d d d d d d d d f f d d f d d d d f f f f d d d d d f f f d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d f f f d d d d d d d d d d f f d d f d d d d d f f f d d d d f f f f d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d f f f f d d d d d d d d d f f f f f f d d d d d f f f f f f f f f f f f d d d f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f f f d d d f f d d d d d d d f f d f f f f f d d d f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f d d d d d d d f d d d d d d f d d d d f f f f f f f f d d d d d d d f f f f f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f d d d d f d d d f f f f f f f f d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f d d d f d d d f f d d d f f f d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f f f f f f f f d d d d d f f d d d d d d d d d d d f d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f f f f d d d d d f f d d d d d d d d d d d f d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f d d d d d f f d d d d d d d d d d f d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f d d d d d f f d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d f d d d f f d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d f f d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f d d d d d d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d f f f f d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d f f f d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d f f f d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d f d d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d f f f f f f f d f f f f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f d d d d d f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . f f d d d d d d d d d f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d f f f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d f f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d f f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d f f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d f f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f d d f d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f f d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d f f f f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d d d d f f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d f f f d d d d d d d d f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d f d d d d d d d d d f d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d d f d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d d f d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d d f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d d f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f d d d d d d d d d f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f d d d d d d d d d f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f d d d d d d d d d f f f f f f d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f d d d d d d d d d f f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f d d d d d d d d d f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f d d d d d d d f f f f d d d d d d d d d d f f . . f f f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f f f f f d d d f f d d d d d d d d d d f f f f f f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f f d d d d d f f f f d d d d d d f f d d d d d d d d d d f f f f d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f d d d d d d d d d d f d d d d d d d d d d f f d d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f d d d d d d d d d d f d d d d d d d d d d f f d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f d d d d d d d d d f f d d d d d d d d d f f f d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f d d d d d d d d d f d d d d d d d d d d f f f d d d d d d d d d d d f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f d d d d d d d d d f d d d d d d d d d d f f f d d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f d d d d d d d d d f d d d d d d d d d d f f f d d d d f f f f f d d d f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f d d d d d d d d d f d d d d d d d d d d f f f d d d f f f f f f f d d f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d f f f f d d f d d d d d d d d d f d d d d d d d d d d f f f d d f f f f f f f f d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d f f f f f d d f d d d d d d d d f f f d d d d d d d d f f f f d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d f f f f d d d d f d d d d d d d d f f f f f f f f f f f f f f f d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f d d d d d d d f f d d d d d d d d d d d f f f f d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f d d d f f d d d d d d d d d d d d d d d f f f d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f d f d d d d d d d d f d d d d d d d d d d d f d d d d f f f f d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f d d d d d d d d d f f d d d d d d d d d d d f d d d f f d f f f d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d d d d d d f f d d d d d d d d d d d f d d d f d d d d d f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d f f d d d d d d d d d d d d f f d d d d d d d d d d d f d d d f d d d d f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d f f d d d f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f f f f d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d f d d d d d d d f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d f d d d d d d f f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d f d d d d f d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d f d d d d d f d f f d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d f d d d d d d d d d d d d d d d f f f . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d f f d d d f f f f f f f f f f f f f f f f f f d d d d d d d f d d d d d d d d d d d d d d d d f f . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d f f . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . .
    . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d f f . . . . . . .
    . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d f f f . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d f f f f . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d f f f f . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d f f d d d d f f d d d d d d d d d f f f f f . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d f d d d d d d d f f d d d d d d d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d f d d d d d d d d d f f f d d d d d d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d f d d d d d d d d d d f f d d d d d d d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f d d d d d d d d d d d f d d d d d d d d d d d f f f d d d d d d d d d d d f f . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d f f d d d d d d d d d d d d f f . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d f f d d d d d d d d d d d d f f . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d f d d d d d d d d d d d d f f . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d f d d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d f d d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d d f f f f f f d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f d f f f f f d d d d d f f d d d d d d d f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d f f f f f f f f f f f f d f f d d d f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f f f f f f f f f f f f d d d d d d d d f f d d d f f f f f d d d d d d d f f f f d d d f f d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f f f f f f f f f f f f f d d d d d d d d d d f f d d d f f f f f f f d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . f f f f f d d d d d d d d d f d d d d d d d d d d d f f d d d f f f f d d f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d f f d d f f f f d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d f d d d f f d d f d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d f d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f d d d d d d d d d d d d d d f d d d d d d d d d d d f d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f d d d d d d d d d d d d d d f f d d d d d d d d d d f f d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f d d d d d d d d d d d d d d f f f f f d d d d d d f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . f f f d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d f f f f f f f f f d d d d d d d d d f f d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d d d d d d d d d d d f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d f f d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d f f f d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d f f f d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f f d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f f d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f d d d f d d f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f d d d d f f d f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f d d d f f d f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f d d d f f d f f f f f f f d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d f d f f f f f f f f f d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f d d f f f f f f d d d d d d d d d d d d f f f f f d d d d f f f f f f f f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d f f f f f f f f f f f d d d d f f f f d d d d d d d d d f f f f f f f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d d d d d d d d d f d d d f f f f d d d d f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d f f f f f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f f f f f f f d d d d d f f f d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f f f d f f f f f f d d d d d d f f d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d f f f f f f d d d d d d d f f f f f f d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f d d d d d d d d f f d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d d d d d f f d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d d d d f f d d d f d d d d d d d d d d d d d d d d d d d d d d d d f d d d f f d d d d d d d d d d f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d f d d d d d d d d d f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d f d d d d d f d f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d f f d d d d f d d d d d f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d f d d d d d d f f d d d f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d f d d d d d d f f f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d f f f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f d d d d d d d d f f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f d d d d d d d d d f f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f d d d d d d d d d d f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d f f f f f f f d d d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d f f f f f . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f d d d d d d f f d d d d d d d d d d d d d d d f f d d d d d d d f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f f f f f f f d d d f f f d d d d d d d d d f f d d d d d d d d d d d d d d f f d d d d d d d d d f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f f d d d d d d d d d d d f d d d d d d d d d f f d d d d d d d d d d d d d d f d d d d d d d d d d f f d d d d d d d d f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d f 1 f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d f d d d d d d d d d d d f d d d d d d d d d f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d f d d d d d d d d d d d f f f f f f f f f f f d d f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f d d d d d d d d d d d d d d f d d d d d d d d d f f d d d d d d d d d d d d d f d d d d d d d d d f f f f f f f f d d d d d d d d f f d f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . f f d d d d d d d d d d d d d d f d d d d d d d d d f f d d d d d d d d d d d d f d d d d d f f f f f f f f d d d d d d d d d d d d d d d d d d d f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . f f f f f f f d d d d d d d d d d d d d f d d d d d d d d d f f d d d d d d d d d d d d f f d d f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . f f f f f f f f f f f d d d d d d d d d d d f f f f d d d d d d f f f d d d d d d d d d d f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . f f f d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . . .
    . f f d d d d d d d d d d d d d f f f f f f d d d d d d d f f f f f d f f f f f f f f f f f f f f f f d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . .
    . f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . .
    . f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . .
    . f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . .
    . f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d f d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d f d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . .
    . . f f f d d d d d d d d d d d d d f d d d d d d d d d d f f d d d d d d d d f f d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . .
    . . f f f f f f f f f d d d d d d d f f d d d d d d d d d f f d d d d d d d d f f d d d d d d f d d d d d d d d d d d d f f f f f d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . .
    . . . f f f f f f f f f f f f f f f f f f f f f f f d d f f f f d d d d d d d f f f d d d d f d d d d d d d d d d d d f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . .
    . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d f f f f f f d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f d d d d d d d d d d d d f f f f d d d d f f d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d f f f f f d d d d d d d f f f d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f d d d d d d d d d d d f f f f d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d f f f f d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f f d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f f d d f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f d d d f f f f f f f f f f f . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f d d f f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f f d d d d d d f f f f f f f f f f .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f d d d d f f f f f f f f f f f d d d d d d d d d d d d d d d d f f f f f d d d d d d d d f f f f f f f f f .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f d d d d d d d d f f f f f f f d d d d d d d d d f f f f f f f f .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d f f f f f f f f
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f d d d f f f f f f f f f f f f f f f d d d f f d d d f f f d d d d d d d d d f f f f f f .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f f f f f f d d d f f f f f d d d d f f f f d d d d d d d d d d d d d d f f d d d f f f d d d d d d d d d f f f f f .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d f f f f f f d d d d d f d d d d f f f f d d d d d d f f d d d d d d d d d d d d d d f f f d d d f f f f d d d d d d d d f f f f .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f d d d d d d d d d d f d d d d f f f d d d d d d d d d d d d d d d d d d d d d d f f f f d d d f f f f d d d d d d d d f f f .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d d d d d d d f d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f d d f f d d d f f f f d d d d d d d f f . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f d d f d f d d d f f f f f d d d d d f f . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d f f d f d d d f d d d f f f f f d d d f f f . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d f f d f d d d d f d d d f f f f f f f f f f . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f d d d f f f f f f f f . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d f d d d f f f f f f f . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d f d d f f f f f f f . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d f f f f f f f f . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d f f f f f f f . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d f f f f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f f f d d d d d d d d d d d d d d f f f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f d d d f f f f f f f f f f d d d d d f f f f f f d d d d d d d d d d d d d d f f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d f f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d f f f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d f f f f f f f . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f f d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d f f d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f f d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . f f f f f f . . . . f f f f f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d f f . . . . . . . . f f f f f f . . . f f f f f f f f f f f f f f f d d d d f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d f f f . . . . . f f f f f f f f f f f f f d d d d f f f f f f f d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d f f f f . . . . f f f f d d d d f f f f f d d d d d d f f f f f f d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d f f f f f f . . . . f f d d d d d d d d f f f d d d d d d f f f f f f d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d f f d d d f f f . . f f f d d d d d d d d f f d d d d d d f f d d d d f d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d f f d d d d d d f f . . f f d d d d d d d d d d f d d d d d f f d d d d d f f f d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f d d d d d d d f f . . f f d d d d d d d d d d f d d d d d f f d d d d d d f f f f d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d f f f f f f d d d d d d d d d d f d d d d d f f d d d d d d f f d f f f f d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f f f d d d d d d d d d d f d d d d f f f d d d d d f f d d d d d f f f f f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f f f d d d d d d d d d d f d d d d d f f f f d d f f d d d d d d d d d f f f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f f f d d d d d d d d d d d f d d d d f d d d f f f d d d d d d d d d d d f f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f f f d d d d d d d d d d d f d d d d f f d d d d d d d d d d d d d d d f f f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d f f f f f f d d d d d d d d d d d f d d d d d f d d d d d d d d d d d d d d d f f f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d f f f f f f f d d d d d d d d d d d f d d d d d d f d d d d d d d d d d d d d f f f f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d f f f d d f f d d f d d d d d d d d d d f d d d d d d f d d d d d d d d d d d d d f f f f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d f f d d d d d f d d f d d d d d d d d d d f d d d d d d d f d d d d d d d d d d d d f f f f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f d d d d d d d f f f f d d d d d d d d d d f d d d d d d d d f d d d d d d d d d d d d d d d f f f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f d d d d d d d d d d f d d d d d d d d f f d d d d d d d d d d d d d d d d f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f f d d d f f f d d d f d d d d d d d d f f f f d d d d d d d d d d d d d d f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d f f d d f f f f f f d d f d d f f f f f f f f f f d d d d d d d d d d d d d f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d d f d d d d f f f d d d f d d d d d d d d d f f f f f d d d d d d d d d d d d f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d d f d d d d d d d d d d f d d d d d d d d d f f f f f f f d d d d d d d d d d f f f . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f d d d d d d d d d f d d d d d d d d d f f d d f f d d d d d d d d d d d f f f . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f d d d d d d d d d f d d d d d d d d d f f d d d f d d d d d d d d d d d d f f . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d f f f f f f f f d d d d d d d d f f d d d d d d d d d f f d d d f d d d d d d d d d d d d f f . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d f f d d d d d d f f f d d d d d d d d d f f d d d f d d d d d d d d d d d d f f . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f d d d f f f f f f d d d d f d d d d f f f f f f f d d d d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f d d f f d d f f f d f f f f f f f f f f f f f f f d d d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f d d d d d f f f f d d d f f f f f f f f d d d f f d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f d d d d d f f f d d d d d f f f f f d d d d d d d f d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f f d d d d d f f f d d d d d f f f d d d d d d d d d d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f f f d d d f f f f d d d d d f f d d d d d d d d d d d d d d d d d d f f . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f d d d f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d f f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f f f f d d d d d d f f d d d d d d d d d d d d d d d d d d d f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f d d f f f f d d d d d d d d f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f d d d f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f f f d d d d f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f d d d f d f d d d f f f f f f f f f . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d f f f d d f f f f f d d d d d d d d f f f d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d f f d d d d d f f d d d d d d d d d d d f d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d f f d d d d d f f d d d d d d d d d d d f d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d f f f d d d d d f f d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d f f f d d d d d f d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f . . . . . . . . . . . . . . . . . f f f f f f f d d d d d f f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f . . . . . . . . . . . . . . . f f f f f f f f d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . f f f d d d d d d f d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f f . . . . . . . . . . . f f f d d d d d d d d f d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f f f . . . . . . . . f f f d d d d d d d d d d f d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f f f f . . . . . . . f f d d d d d d d d d d d f f d d d d d f f f f d d d d d d d d d d d f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f d f f f f f . . . . . f f d d d d d d d d d d d d f d d d d d d d d f f f f f f f f f f f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f d d d d f f f f . . . . f f d d d d d d d d d d d d d f d d d d d d d d d d d f f f f f f f f d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f . . f f d d d d d d d d d d d d d d f d d d d d d d d d d d d f f f f f f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f . f f d d d d d d d d d d d d d d d f d d d d d d d d d d d f f f f d d f d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f . . . . . . f f f f d f d d d d d d d d d f f f f f f f d d d d d d d d d d d d d d d d f d d d d d d d d d d f f f f d d d f f d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f f f . . . . f f f f f d d d d d d d d d f f f f f f f f d d d d d d d d d d d d d d d d f d d d d d d d f f d d f f d d d f f f f d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f . . . . . f f f f d d d d d d d d f d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d f d d d d d f f d f f f f f d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f . . . . . . f f f f d d d d d d f d d d d d d f f f f d d d d d d d d d d d d d d f d d d d d d d d d d d d d d f f f f f f f d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . f f f f d d d d f d d d d d d d d f f f f f d d d d d d d d d d f f f d d f d d d d d d d d d d d f f f f f f f d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . f f f f f f f f d d d d d d d d d f f f f f d d d d d d d d f f f f d d d f d d d d d d d d d d f f f f d d d d f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . f f f f f f f d d d d d d d d d f f f f f f d d d d d d f f f f f d d d d d d d d d d d f f f f f f d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . f f f f f d d d d d d d d f f d d f f f f d d d d d f f f f d d d d d f d d d d d f f f f f f f d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . f f f f d d d d d d d d f d d d d f f f f d d d d d d d d d d d d d d f d d d f f d d d d f f d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d f f d d f d d d d d f d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . f f f f d d d d d f d d d d d d d d d d f f d d d d d d d d d d f f f f f f d d d d d f d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . f f f f f d d d f d d d d d d d d d d d d f d d d d d d d d f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d f d d d d d d f f d d d d f f f f f f f d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d f f d d d d f f d d d d d f f f f f f f d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d f f f f d d d f d d d d d d f f f f f d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d f f f f f f d d f d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f d d d d d f f f f d d d d f f f f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f d f f d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f d d d f f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . f f f f . . . . . . . . f f f f d d d d d d d d d d d d d d d d d f d d d f f f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . f f f f f . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f d d d f d d f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . f f f f f f f . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f d d d d d d d f d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . f f f f f f f f f . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f d d d d d d d d f f d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f d d d d d d d d d d f d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f f . . . . . f f f f f f f f f f f . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f d d d d d d d d d d d f f d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f f f f f . . . . f f f f f f f f f f f . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d f f f f f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f f f f f f . . . . f f f f f f f f f f . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f f f f f f f . f f f f f f f f f f f . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f d d d d f d f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f d d f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f . . f f f . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d f d d f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d f f f d f f d d d d d d d d d d d f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f d d f d f f f d d d d d d d d d d f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d f d d d d d d d f f d d d d d d d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d f f d d d d d d d d f f d d d d d d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d f f d d d d d d d d d f f d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d f f f f d d d d d d d d d f f f d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d f f f f f d d d d d d d d d d d f f d d d d d d d d d d f f f . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f . . . . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f . . . . . . . . . . . . . f f d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d f . . . . . . . . . . . . f f f d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d f . . . . . . . . . . . . f f d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d f . . . . . . . . . . . . f f d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d f . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d f f f f f . . . . . . . . . . . f d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d f . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . f f f d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . f f f f f f f f f d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f . . . . . . . . f f d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . f f d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . f f f f f f f d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f f f f f f f f f d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f f f f f d d f f f f d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f d d d d f f f f d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d f f f d d d d f f f f d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f d d d d d f f f f f f f f d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f d d d d d f f f d d d f f f f f f f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f d d d d d d f f f d d d d d d f f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d f d d d d d d f f f d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f d d d d d d d f d d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d f d d d d d d d f d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d d f d d d d d d d f d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f d d d d d d d f f d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d f d d d d d d d d d f d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f d d d d d d f d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d f d d d d d d d d d d f d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f d d d d d f d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f d d d d f d d d d d d d d d d d f d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f f d d d f d d d d d d d d d d d f d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f d d d f f d d d d d d d d d d d f d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f f d d f f d d d d d d d d d d f f d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f f f f f f d d d d d d d d f f f f d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f f f f f d d d d d d d d d f f f f d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f f f d d d d d d d d f f f f d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d f d d d d d d d d d d d d f f f f f d d d d d d d d d d d f d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d f f d f f d d d d d d d d d d d f f d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d d d f f f f d d d d d d d d d d d d f d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d f d d d d d d d d d d f f f f f d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f d d d d d d d f d d f f f f d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d f d d d d d f d d d d f f f f d d d d d d d d d d d d f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d f f d d d d d d d d d f f f f d d d d d d d d d d d d f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d f d d d d d d d d d f f f f d d d d d d d d d d d d d f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f d d d d d d d d d f f f d d d d d d d d d d d d d f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f d d d d d d d d d f f f f d d d d d d d d d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f d d d d d d f f f f f f f d d d d d d d d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f d d d d f f f f f f d f f d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f d d d f d d d d d d d d d d d d d f d d d f f f f f f d d d d f d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d f f f f d d d d d d d d d d d d f d f d d d d f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d f f d d d d d d f f f d d f f f d d d d f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f d d d d f f f f f d d f f f d d d f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d f f f f d d d f f f f d d d f f f d d d f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d f f f f d d d f d d d d d d d d d f f f f f f f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d f d d d d d d d d d f f f f f f f d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f d d d d d d d d f f f f f f d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f d d d d d d f f f f f d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f d d d d f f f f f f d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d d f f d d d f d d f f f d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d d d f f d d f d d d f f d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f f f f d d d f d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f f f f d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f d d f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f . . f f f f d d d d d d d d f d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f d d d d d d d d d d f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f d d d d d d d d d d d d f f f f d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f f d d d d d d d d d d d d f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d f f d d d d d d d d d d d d f f f d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d f f d d d d d d d d d d d d d f f d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d f f d d d d d d d d d d d d d f f d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d f f d d d d d d d d d d d d d f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d f d d d d d d d d d d d d d f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f d d d d d d d d d d d f d d d d d d d d d d d d f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d f f f d d d d d d d d d d d f d d d d d d d d d d d d f f d d f d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d f f d d d d d d d d d d d f d d d d d d d d d d d d f f d f d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d f d d d d d d d d d d d f d d d d d d d d d d d d f f f f d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f d d d d d d d d d d d f d d d d d d d d d d d f f f f f f d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f d d d d d d d d d d d f d d d d d d d d d d d f f f f f f d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d f f f f d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f d d d d d d d d d d f d d d d d d d d d d d f f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f d d d d d d d d d d f d d d d d d d d d d d f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d f f f f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d f f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d f f f d d d d d d d d d f d d d d d d d d d f d d d d d d d d d d f f d d d d d d d d d d f f f . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d f f f f d d d d d d d d f d d d d d d d d d f d d d d f f f f f f f f d d d d d d d d d d f f f . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d d d d d d d f d d d d d d d d d f d d f f f f f f f d f f d d d d d d d d d d f f f . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d f f f f f f d d d d d d d d f d d d d d d d f f f d d f f f f f f d d f f d d d d d d d d d d f f f . . . . . . . . f f f f f f f d d d d d d d d d d d d d d d d d f f f f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f d d d d d d d f f d d d f f f d d f d d d f f f f d d d d f d d d d d d d d d d f f f . . . . . . f f f f f f f f f d d d d d d d d d d d d d d d f f f f f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f d d d d d d d d f d d d d d d d d f d d d d d d d d d d d f d d d d d d d d f f f f f . . . . f f f f f f d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f d d d d d d d d f d d d d d d d d d d d f d d d d d d d d f f f f f f . f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f d d d d d d d f d d d d d d d d f d d d d d d d d d d d f d d d f d d d d f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f d d d d d d d f d d d d d d d d f f d d f f f f d d d d f d d d d f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f d d d d d f f f d d d d d d f f f d f f f f f f d d d f d d d d f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f d d d d f f f f d d d d f f f f f f f d d d f f d d f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f d d d f f f f d d d f f f f f f f f d d d d f f d f f d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f d f f f f f f d f d d d d f f f f d d d d d f f f f d d d d d d d d d d f f f f d d d f d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f f f f f f f f f d d d d f f f f d d d d f f f f d d d d d d d d d d d d f f f d d d f d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f f f f f f d d d d f f f f f f d f f f f f d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d f f f f f d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f f d d d f f f f d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d f f f f d d f f f f f f d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d f f f f f f f f f f f f f f f f f f d d d d d d f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f d f f d d f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d f f f f . . . . f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f f f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d f f f f f f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d d d d d f f d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d f f f d d d d d d d d d d d d f f d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d d d d d d d d d f d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f d d d d d d d d d d d f d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f d d d d d d d d d d d f d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d f f d d d d d d d d d f f d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d f d d d d d d d d f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d f d d d d d d d d f f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d f d d d d d d d d f f f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d f d d d d d d d d f f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d f d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f d d d d d d d f f d d d d d d d d f f f . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f d d d d d d d f f d d d d d d d d f f f . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f d d d d d d d f f d d d d d d d f f f f . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f d d d d d d d d d f f f f f f f f d d d d d d f f f f d d d d d f f f f f f . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f d f f f d d d d d d d d d d d f f f f d d d d f f f f f f f f f f f f f f f f f . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f d f f f f f d d d d d d d d d d d d f d d d d d f f f f f f f d d f f f f f f f . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f f f f f f d d d d d d d d d d d f f d d d d d d d d d f d d d d d d d d f f . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f d d d f f f d d d d d d d d d d f f d d d d d d d d d f d d d d d d d d f f . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f d d d f f f d d d d d d d d d d f f d d d d d d d d d f d d d d d d d d f f . .
    . . . . . . . . . . . . . . . . . f f d d d d d d f f d d d d d d d d d d d d f d d d f d f f d d d d d d d d d f f d d d d d d d d d f d d d d d d d d f f . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d f d d d d d d d d d d d d f d d d f d f f d d d d d d d d d f f d d d d d d d d d f d d d d d d d d f f . .
    . . . . . . . . . . . . . . . . f f f d d d f f d d f f d d d d d d d d d d d f d d d f d f f d d d d d d d d d f f d d d d d d d d d f d d d d d d d f f . . .
    . . . . . . . . . . . . . . . . f f d d d d d d f f f f f d d d d d d d d d d f f d d f f f f d d d d d d d d d f f d d d d d d d d d f d d d d d d d f f . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d f f f f d d d d d d d d d d d f d d d f f f d d d d d d d d d f d d d d d d d d d f f d d d d d d d f f . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f d d d d d d d d d d f d d d d f f d d d d d d d d d f d d d d d d d d d f d d d d d d d f f f . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f d d d d d d d d d f f f d d d d f d d d d d d d d d f d d d d d d d d d f d d d d d d d f f . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f d d d d d d f f f f f f d d d f d d d d d d d d d f d d d d d d d d d f d d d d d d d f f . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f f d d d d f f f f f f f f f f f d d d d d d d d d f d d d d d d d d d f d d d d d d f f f . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f d d d d f f f d d d d f f f f d d d d d d d d d f d d d d d d d d d f d d d d d d f f . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f f d d d d d d d d d d f f f f d d d d d d d d d f d d d d d d d d d f d d d d d d f f . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f d d d d d d d d d d d f f f d d d d d d d d d f d d d d d d d d f f d d d d d f f f . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f f f f f d d d d d d d d d d f f f d d d d d f f f f f d d d d d d d d f f f f f f f f f . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f d f f d d d d d d d d d f f d d d d d d d d d f d d d d d d d d d f f d d d f f f f . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d f f f d d d d f d d d d d d d d d f f d d d d d d d d d f d d d f f f f f f f d d d d f f f . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d f f d d d d d d d d f d d d d d d d d d f f d d d d f f . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d f d d d d f f f f f d d d d d d d d d f f d d d f f f . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d f f d f f d f f f d d d d d d d d d d f f d d f f f . . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d f f f f f f d d d f f d d d d d d d d d d f f f f f f . . . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d f f d d d f f f f f f f f d d f f d d d d f f d d d d f f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d f f d f f f f f f f f f f f f f d d d f f f f f d f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f d d f f f f f f f f f d d f d f f f f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f d d d d f f f f f d d d d f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f d d d d d d f f f f f d d d f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d f f f f f f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d f f f f f f f f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d f f f f . f f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d d d d f f f f f f d d d d d d f f f f f . . . . . f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f . . . . f f f f d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d f f d d d d d d d d d d d d d f f f f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d d f f d d d d d d d d d d d d d f f f f f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d f d d d d d d d d d d d d d d f f f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d f f d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d f f d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d f f d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d f f d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d f f f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d f f f f f f . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d f f f f f f . . . . . .
    . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d f d d d d d d d d d d d f d d d f f d d d d d d d d d d d d d f f f f f f . . . . . .
    . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d f f d d f f f f d d d d d d d d d d d f f f f f f f . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d f f f f f f f f f d d d d d d f f f f f f f f f f . . . . .
    . . . . . . . . . . . . . . f f f d d d f d d d d d d d d d d d d d d d d d f d d d d d d d d d d d f f f f d d d d f f d d d d f f f f f f f f f f f f . . . .
    . . . . . . . . . . . . . f f f d d d d f f f d d d d d d d d d d d d d d d d f d d d d d d d d d d d f f d d d d d d f d d d d d d d d d d f f f f f f . . . .
    . . . . . . . . . . . . . f f f d d d d f f f f d d d d d d d d d d d d d d d f d d d d d d d d d d d f f d d d d d d d f d d d d d d d d d d f f f f f f . . .
    . . . . . . . . . . . . f f f d d d d d d f f f f d d d d d d d d d d d d d d f f d d d d d d d d d d d f d d d d d d d f d d d d d d d d d d f f f f f f . . .
    . . . . . . . . . . . . f f f d d d d d d d d d f f d d d d d d d d d d d d d d f d d d d d d d d d d d f f d d d d d d f d d d d d d d d d d f f f f f f f . .
    . . . . . . . . . . . f f f d d d d d d d d d d d d f d d d d d d d d d d d d d f f d d d d d d d d d d d f d d d d d d f d d d d d d d d d f f d d d d f f . .
    . . . . . . . . . . . f f d d d d d d d d d d d d d d f f d d d d d d d d d d f f f d d d f f f f d d d d f d d d d d f d d d d d d d d d d f f d d d d f f . .
    . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f d d d d d d d d f f f f d d f f f f f f f f d f d d d d d f d d d d d d d d d d f d d d d d f f . .
    . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f d d d d d d f f f f f f d d f f f f f f f d d f d d d d d d d d d d d d d d d d f d d d d d f f . .
    . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f d d d d d f f f f f f d d d d d d d d d d d f d d d d f d d d d d d d d d d f f d d d d d f f . .
    . . . . . . . . . . f f d d d d d d d d d d d d d f f f f f f d d d d d d d d d f f d d d d d d d d d d d f d d d f d d d d d d d d d d d f d d d d d f f f . .
    . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f f d d d d d d d d d d f d d d d d d d d d d f f d d d f d d d d d d d d d d d f d d d d d f f f . .
    . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d f d d d d d d d d d d f f d d f d d d d d d d d d d d f f d d d d d f f . . .
    . . . . . . . . . f f d d d d d d d d d d d d d d d f d d d f d d d d d d d d d f f d d d d d d d d d d f f d f f d d d d d d d d d d d f d d d d d f f f . . .
    . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d f f d d d d d d d d d d f f f f d d d d d d d d d d d d f d d d d d f f . . . .
    . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d f d d d d d d d d d d f f f f d d d d d d d d d d d d d f d d d d f f f . . . .
    . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d f d d d d d d d d d d f f f d d d d d d d d d d d d d f d d d d d f f . . . . .
    . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d f d d d d d d d d d d f f f d d d d d d d d d d d d d f d d d d f f f . . . . .
    . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d d f d d d d d d f f f d d d d d d d d d d f f d d d d d d d d d d d d d f f d d d d f f . . . . . .
    . . . . f f f f f f d d d d d d d d d d d d d d d d d d d d d d f d d d f f f f d d d d d d d d d d f f d d d d d d d d d d f f f f f d d d d f f f . . . . . .
    . . . f f f f f f d d d d d d d d d d d d d d d d d d d d d d d f f f f f d f f d d d d d d d d d d f f d d d d d d d d d d d f f f f d d d d f f . . . . . . .
    . . . f f f f f f d d d d d d d d d d d d d d d d d d d d d d d f f f f f d f f d d d d d d d d f f f f d d d d d d d d d d d f f f f f d d f f f . . . . . . .
    . . f f f f f f d d d d d d d f d d d d d d d d d d d d d d d d d f f f f f f f d d d d d f f f f f f f d d d d d d d d d d d f f d f f f f f f . . . . . . . .
    . . f f f f f d d d d d d d d f f d d d d d d d d d d d d d d d d d f f f f f f d d d f f f f f f f f f f f f f f f f d d d f f d d d d f f f f . . . . . . . .
    . . f f f f d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d f f f f f d d d f f f f f f f d d d f f f f f f d d d d d f f f . . . . . . . . .
    . . . f f f d d d d d d d d d f f f f f d d d d d d d d d f f f d d d d d d d d f f f f f d f f d d f f f f d d d f f f f f f d d d d d f f . . . . . . . . . .
    . . . f f f d d d d d d d d d d f f f f f f f f f f f f f f f f d d d d d d d d d f f f f f f f d d f f f f f d d f f f f f f d d d d f f f . . . . . . . . . .
    . . . f f f d d d d d d d d d d d f f f f f f f f f f f f f f f f d d d d d d d d d d f f f f f d f f f f f f f f f f d d f f d d d f f f . . . . . . . . . . .
    . . . . f f f d d d d d d d d d d d d f f f f f f f f f f f f f f d d d d d d d d d d d f f f f f f f f f f f f f f f d d d f f f f f f . . . . . . . . . . . .
    . . . . f f f f d d d d d d d d d d d d d d f f f f f f f f f f f f d d d d d d d d d d f f f f f f f f . . f f f f f f f f f f f f f . . . . . . . . . . . . .
    . . . . . f f f d d d d d d d d d d d d d d d f f f f f d d d d f f f f d d d d d d f f f f f f f f . . . . . . f f f f f f f f f . . . . . . . . . . . . . . .
    . . . . . . f f f d d d d d d d d d d d d d d f f f f d d d d d d f f f f f f f f f f f f f f . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . f f f f d d d d d d d d d d d d f f f f d d d d d d d f f f f f f f f f f f . . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f f d d d d d d d d d d d f f f f f d d d d d d f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d f f f f d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d f f f f d d d d f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f f d d f f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f f f f f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f f f f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d f f f f f f d d d d d d d d d d d d d f f d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f f f f d d d d d f f f f f f f d d d d d d f f d d d d f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f f f f d d d d d d d d d d d d f f f d d d d d f d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f f f f d d d d d d d d d d d d d d f f f d d d d d f d d d d f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d f d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d f d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f d d d d d d f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d f f f f d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f d d d d d d f d d d d d d d d d d d d f f d d d f f f f d d d d d d d d d d f f f f d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f f f f f d d d d d d f d d d d d d d d d d d d d f f f f f f f f f f d d d d d d d d d d f f f f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d f f d d d d d d f d d d d d d d d d d d d d d f f f f f f f f f f d d d d d d d d d d d f f f f f f f f . . . . . . . . . .
    . . . . . . . . . . . . . f f d d d f d d d d d d f d d d d d d d d d d d d d d f f f f f . . . . . . f d d d d d d d d d d d f f f f f f f f f f . . . . . . .
    . . . . . . . . . . . . . f f d d f d d d d d d f d d d d d d d d d d d d d d d f f f f . . . . . . . . f d d d d d d d d d d f f f f f f f f f f f f f . . . .
    . . . . . . . . . . . . f f f f f f d d d d d f d d d d d d d d d d d d d d d f f f f . . . . . . . . . . f d d d d d d d d f f f f f f f f d f f f f f f . . .
    . . . . . . . . . . . . f f f f f d d d d f f d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . f d d d d d d d f f f f f f f f d d d d d f f . . .
    . . . . . . . . . . . . f f f f d d d d f f d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . f f d d d d f d d d f f f f f d d d d d f f . . .
    . . . . . . . . . . . . f f f d d d d f d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . f f f f f d d d d f f f d d d d d d f f . . .
    . . . . . . . . . . . . f f f d d d d f d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . f f d d d d d f f d d d d d d d f f . . .
    . . . . . . . . . . . . f f f d d d f d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . f f d f f f f d d d d d d d d f f . . .
    . . . . . . . . . . . . f f f d d d f d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d f f f . . .
    . . . . . . . . . . . . f f f d d f d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f . . . .
    . . . . . . . . . . . . f f f d d f d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d d f f . . . .
    . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d f f f . . . .
    . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d d f f f . . . .
    . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d d f f . . . . .
    . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f f . . . . .
    . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d f f f f f f d f f f . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f f . . . . .
    . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d f f f f f f d d d d f f . . . . . . . . . . . . f f f f d d d d d d d d d d d d f f . . . . . .
    . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d f f f f d d d d d f f . . . . . . . . . . f f d d f d d d d d d d d d d d f f f . . . . . .
    . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f . . . . . . . . f f d d d d f d d d d d d d d d d f f f . . . . . .
    . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d f f . . . . . f f d d d d d d f d d d d d d d d d f f f . . . . . .
    . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d f f f f f f f d d d d d d d d f d d d d d d d d f f . . . . . . .
    . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d f f f f f f d d d d d d d d f f d d d d d d f f f . . . . . . .
    . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d f f f f f f d d d d d d d d d d f f d d d d d f f f . . . . . . .
    . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f f f f f f f d d d d d d d d d d d d f d d d f f f f . . . . . . .
    . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f f f f f f f f d d d d d d d d d d d d d d d f f f . . . . . . . .
    . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d f f f d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d f f f d d d d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d f f f d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d f f d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d f f f d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f d d d d d d f f f f . . . . . . . . . . . . . .
    . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f d d d d d f f f f . . . . . . . . . . . . . . .
    . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d f d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d f d d d f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . f f d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f d d d d d d d d d f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . .
    . . . . . . . . . . . . . . f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . .
    . . . . . . . f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . .
    . . . . f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . .
    . . . . f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . .
    . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . .
    . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . .
    . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . .
    . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d f f f d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . .
    . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d f f f f f f f f d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . .
    . . . . f f f d d d d d d d d d d d d d d f f d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . .
    . . . . f f f f f f d d d d d d d d d d f f f f d d d d d f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d f f f . . .
    . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . f f f f f f f f d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f d d d d d d d d d d d d d d d d f f f . . .
    . . . . . . . f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . f f f d f f f d d d d d d d d d f f f f f d d d d d f d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f d d d d d d d d d d d d d d d d f f f . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d f f d d d d d d d d d f f f f f d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d f f d d d d d d d d d d d d d d d f f f . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f d d d d d d d d d f f f f f d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d f f d d d d d d d d d d d d d d f f . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f d d d d d d d d d f f f f d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d f f d d d d d d d d d d d d f f f . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f d d d d d d d d d d f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d f f d d d d d d d d d d d f f f . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f d d d d d d d d f f d d d d d d d d d d f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f f f d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f d d d d d d d d d f f d d d d d d d d d f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f f f f f f d d d d d f d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f f f d d d d d d d d d f f d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f f f f f f f f d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d f f f f f f f f f d d d d d d d d d f f d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f f . . f f f f f f d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d f f f f f f f f f f d d d d d d d d d d f f d d d d d f f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f . . . f f f f f d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d f f f f f f f f f f f f d d d d d d d d d f f f d d d d f f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d f f f f f f f f f d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d f f f f f f f f f f f f f f d d d d d d d d d d f f d d f f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d f f f f f f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d f f f f f f f f f f f f f f f f d d d d d d d d d d f f f f f f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d f . . f f f d d d d d d d d d d d d d d d d d d d d d f f f d d d d d f f f f f f f f f f f . . . f f f f f f f f f f d d d d d d d d d f f f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f . . f f d d d d d d d d d d d d d d d d d d d d d d d f f d d d d f f f f f f f f f . . . . . . f f f f f f f f f f d d d d d d d d d f f f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f . . . . . . . . . f f f f f f f f f f d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f f f f d d d d d d f f d d d d d d d d d d d d d d d d d d f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f d d d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f f f f d d d d d f f f f f d d d d d d d d d d d d d d d f f f f f f f f f . . . . . . . . . . . . . . . f f f f f f f f f f f d d d d d f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f f d d d d d d f f f f f d d d d d d d d d d d d f f f f f f f f f f . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f d d d d d d d d f f f f f d d d d d d d d d f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f d d d d d d d d f f f f f d d d d d d d f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f d d d d d d d d d d f f f f d d d d d f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f d d d d d d d d d d d d f f f f d d f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f d d d d d d d d d d d d d f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f d d d d f f d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f d d f f f f f d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f f f f d d f f f d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f f d d d d d f f f d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d f f f f f d d d d d f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f f d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f f f d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d d d f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d d d d d d d d f f d d f f f f f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d d f f f f f f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d f f f f f f f f f d d d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f d d d f f f f f f f f f f f f d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d f f f f f f f f d d f f f f d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d f f f f f f f f d d d d d f f f d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d f f f f f f f f f f d d d d d f f f d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d f f f f f f f f f f f d d d d d d f f f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d f f f f f f f f f f f f f d d d d d d f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d f f f f f f f f f f f f f f d d d d d d f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d f f f f f f f f f f f f f f f f d d d d f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . f f f f f f f f f f f f f d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f d f f f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f f f f f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f d d d d d f f f f f f f f d d d d d d d d d d d f d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f f f f f f f f f f f f d d d d d d d d d d d d d f f d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f f f f d d f f d f f f d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d d f f d d d d d f d d d f f d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f d d d d d f d d d f d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f d d d d d d f d d f f d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f d d d d d d d d d f f d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f d d d d d d f d d d f d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d f f d d d d d d d d d f f d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f d d f d d d d d d f f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f d d f f f d d d d f d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d f d d d f f d d d d d f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f d d d d d d d d d f f d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f d d d d d d d d d f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f f d d d d d d d d d f d d d d d d f f d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f f f d d d d d d d f f f d d d d d f f f f f d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f f f d d d f f f f f d d d d d d f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f f f f f f f f f f f d d d d d d f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d f f f f f f f f f f f f f d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . . f f d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . . f f d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f . . . . . . . . f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f . . . . . . . . . f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f . . . . . . . . . f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f . . . . . . . . . . f f d d d d f f f f d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f f . . . . . . . . . . f f d d d f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f . . . . . . . . . . f f d d d f d f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f . . . . . . . . . . f f d d f d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f . . . . . . . . . . . f f f f f d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f . . . . . . . . . . . f f f f f d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f . . . . . . . . . . . f f f f f d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f . . . . . . . . . . . . . f f f f d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d f f f . . . . . . . . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f d d d d d d f f . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d f f . . . . . . . . . . . . . . . . f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d f f . . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d f f d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d f f d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d f f d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d f d d d d d d f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d f f d d f f f f d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d f f f f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . f f d d d d d f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f . . f f d d d d d f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d f f f . f f d d d d d f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f f f f d d d d d f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f f f f f f f d d d d d f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d f f f f f f f f f f f f d d d d f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d f f f f f f f f f f f f f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d f f f f f f f f f f f f f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f f f f f f f f f f f f f f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f f f d f f f f f f f f f f f f f f f f f d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d f f f d d d d d f f f f f d d f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d f f f d d d d d d d d f f f d d f d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f d d d d d d d d d d f f f f f d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d f f d d d f f f d d d d d d d d d d d f f f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d f d d d d d d d d d d d d d d d d d f f f f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d d d d d d d d d d d d f f f f f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d f f d d d d d d d d d d d d d f f f f f f f f d d d d d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d d d d d d f f f f f d d f f d d d d d d d d d d d f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f d d d d d d d d f f d d d d d d d d d f f f f f d d d d f f d d d d d d d d d f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d f f d d d d d d d d d d d f d d d d d d f f d d d d d f f f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d f f f d d d d d d d d d d d d d d d d f f f f f f d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d f f f f f d d d d d d d d d d d d d d d f f f d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d f f f f f f f f f d d d d d d d d d d d d f f d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d f d d f f f f d d d d d d d d d d d d d d f f d d d d d f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d f f f d d d d d d d d d f d f f f f f d d d d d d d d d d d d d d f f f f f f f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d f d d d d d d d d d f f f f f f f f d d d d d d d d d d d d d d f f f f f f d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d f d d d d d d d d d f f f d d d f f f d d d d d d d d d d d d d d f f f d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d f d d d d d d d d f f f d d d f f f f d d d d d d d d d d d d d d f f d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d f f d d d d d d f f f f d d d f f f f d d d d d d d d d d d d d d f f d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d f f d d d d d f f f f f f d f d d f f d d d d d d d d d d d d d d f f d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d f f d d d d f f f f f f f f d d d f d d d d d d d d d d d d d d f f d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d f f d d d f f d d f f f f d d d d d f d d d d d d d d d d d d d f f d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d f f d d f d d d f f f d d d d d d f d d d d d d d d d d d d d f f f d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d f f f d f f f f f f f d d d d d d d d d d d d d d d d d d d d f f f d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d f f f f f f f f f f d d d d d d d d d d d d d d d d d d d f f f f d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d f f d d f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f f d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d f f f f f f f d d d f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f f f f d d d d f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f f d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d f f f f f f f d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f d d d d d f f f f f f f f f d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d f f f f d d d d f f f d d d d d f f d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f d d d f f f d d d d d d f f d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f d d d f f d d d d d d d d f f f d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d f d d f f f d d d d d d d d d f f f f d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f d d f f f f d d d d d d d f f f d f f f d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d f d d f f d f f d d d d d d f f d d d d f f f d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d d d d f d d f f d d d f f f d d f f d d d d d d d f f f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f d d f f f d d d d d d d d d d d d d d f d d d d d d f f f d d d d d d d d f f f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d f d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d f d d d d d d d d d d f d d d f d d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d f d d d d d d d d d d f d d d d f d d d d d d d d d d d d f f f f f f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f d d d d d d d d d f d d d d d f d d d d d d d d d d d f f f f f f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f d d d d d d d d d f d d d d d f f d d d d d d d d d d f f f f d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f d d d d d d d d d f d d d d d f f f f d d d d d d d d d f d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d f d d d d d d d d f d d d d d d d d f f d d d d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d f d d d d d d d d f d d d d d d d d d f f f f f f d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d d d f d d d d d d d d f d d d d d d d d d f f f f d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d f f f f d d d d d d d d d d f d d d d d d d d f f d d d d d d d d f f f f d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d f f d d d d d d d d d f d d d f f f d d f f d d d f f f d d f f f f d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d f d d d d d d d d d f d d f f f f f f f f d d f f f f f f f f f f d d d d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d f d d d d d d d d f f d d f f f f d f f d d d d d d f f f f f f d d d d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d f d d d d d d d f f f d d d d d d d f f f d d d d d f f f f f d d d d d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d f f d d d d d d d f f d d d d d d d f f f d d d d d f f f f f d d d d d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d f d d d d d d d f f d d d d d d f f f f f f f f f f d d d f d d d d d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d f d d d d d d d f f d d d f f f f f f f f f f f d d d d d f d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d f d d d d d f f f d d d f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d f d d d d f f f f d d f d d d d f f f f d d d d d d d d d f d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f f f f f d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d f d d f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f f f d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f d d d d f f f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d f f f f f d d d d d f f f f f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f f f d d d d d f f f f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f d d d d d f f f f f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f d d d d d f f f f f f f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d f f d d d d d f f f d d d d f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d f f d d d d d f f d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d f f d d d d d f f d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d f f f d d d d d d d d d f d d d d d f f d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f f d d d d d d d d d f d d d d d f f d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d d d d f d d d d d f f d d d f f d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d f d d d d d d d d d f d d d d d f f f f f f f f d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d f d d d d d d d d d f d d d d d f f f f d f f f f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d d f f d d d d d d d d f f d d d d f f f d d d d d f f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f d d d d d d d d d d f d d d d d d d d f f d d d d f f f d d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f d d d d d d d d d d f d d d d d d d d f f d d d d f f f f d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d d d d f d d d d d d d d f f d d d d f f f f f f f f f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f d d d d d d d d f f d d d d d d d f f d d d d f f d d d d f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f f d d d d d d d d d f d d d d d d d f f f d d d f f f f f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f d d d d d d d d f d d d d d d f f f d d d d d d f f f f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f d d d d d d d d f d d d d f f f f f d d d d d d d d f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d f d d d d d d d d d d d f d d d d d d d d f d d d d d d d f f d d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f d d f f d d d d d d d d d d f f d d d d d d d f f d d d d d d f f d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d d d f d d d d d d d f f d d d d d d f f d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d f f f f d d d d d d d d d f f d d d d d f f f f d d d d d d f f f d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d f f f d d d d d d f f f f d d d f d d d f f f f f f f f f f f d d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d f f d d d d f f f f f f d d d d d d d f f f f f f f f f f f f d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d f f f d d d d d d d f f d d d d d d d f f f f f f f f f f f f f d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d f f f f d d d d d d d f f d d d d d d d f f f f f f d d d d d d f f d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f f d d d d d d d f d d d d d d d f f d d d d d d d f f f f f d d d d d d d d d f d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d f f f f d d d d f f f f f f f d d d d d d d d d d d f d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d f d d d f f f f f f f f f f f f f f f d d d d d d d d d d d d d f d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d f f d f f d f f f f f f f f f f f d d d d d d d d d d d d d d d f d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d f f f f f d f f f f d d d f f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f f f f f f f f d d d f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f f f f f d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f d f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f f f f d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f f f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d f d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d f f d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d f f f f f d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f f f f f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f d d d d d d f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d f d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d f f f f f f f f f d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f f f f d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f f d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f f f f f f f f f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f f f f f f f f f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f d d d d d f f f f f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d f f d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f d d d d d d f f d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f d d d d d f f d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f d d d d d f f d d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f d d d f f f d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f f f f f f f d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d f f f f f f f f d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d f f f f f f f f f d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d f f d d d d d f f f d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d f d d d d d d d d f f f d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d f f d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d f f d d d d d d d d d d d f f f d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d f f d d d d d d d d d d d f f f f f d d d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d f f f d d d d d d d d d f f f f f f f d d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d f f f d d d d d d d d f f f f d d d f f d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d d d d d d f f f f d d d d f f d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d f d d d d d d f f f f d d d d d d f f f d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d f f d d d d d f f f f f d d d d d f f f f d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f d f f d d d d d d d f d d d d d f f d f f d d d d d f f f f f d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f f f d d d d f d d d d d d d d f d d d d f d d d d f d d d f f f d d f f f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d d f f d d f f d d d d d f f f f f d d d d f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d f f d d f f d d d d d d f f f d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d f f f f f f d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d f f f d d f d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f d d d d d d d f f d d d d d d d d d d f f f d d f f d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d f f d d d d f f d d d d d d d d d d d f f d d d f d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d f f f f f f f d d d d d d d d d d f f d d d f f d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d f f f f f d d d d d d d d d d f f d d d f f f d d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f f d d d d d d d d d d f d d d d f f f d d d d d d d d f f f f d f f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f f d d d d d d d d d f f d d d d f f f f f d d d d d d f f f d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d f f f f d d d d d d d d d f f d d d f f f f f f d d d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d f f f f f f f f d d d d d d d d d f d d d f f f f f f f d d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d f d d d d d d d d d f f d d d d d d d d f d d d f f f f f f f f d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f d d d d d d d d f f f d f f f f f f f f d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f d d d d d d d f f f f f f f f f f f f f d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f d d d d d d d f f f f f f f f f f f f f f d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f d d d d d f f f f f f d d d d d f f f f d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f d d d d f f f f f d d d d d d f f f f f d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f d d d d f f f f d d d d d d d f f f f f f d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f f d d d f f f d d d d d d d d d f f f f d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f f f f f f f f f f d d d d d d d d d f f f f f d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f f f f f f f f f d d d d d d d d d d d f f f f f d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f f f d d d f f f d d d d d d d d d d d d d f f f f d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f d f f d d d f f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f d d f d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f d d f d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d f d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d f d d d f d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d f d d d d f f d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f d d d d d f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f d d d d d f f f d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d f f . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f . . . . . . . . f f f d d d f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f . . . . . . . . f f d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f . . . . . . . . f d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d f f f . . . . . . . . f f d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f . . . . . . . f f f d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f . . . . . . . f f f d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f . . . . . . . f f f f f d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . . . . f f f d d d d f f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f . . . . . . f f f d d d d d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f . . . . . . f f f d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f . . . . . . f f d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f . . . . . f f f d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f . . . . . . f f f d d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f . . . . . . f f f d d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f . . . . . f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f . . . . f f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . f f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . f f f f d d d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . f f f f f f f f f d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . f f f d d d d d f f f d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . f f d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f . . . f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d f f . . . f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d f f . . . f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d f f d d d d d d d f f f . f f f f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f f f d d f f f f f f f f f f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f f f f f f f f f f f f f f f d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f f f f f f f f f f f d f f f f f d d d d d f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f f d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d f f f f f f d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d f f f f f f f f d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d f f f d d d d f f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d f f f d d d d d d f f f d d d d d f f f f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d f f f f d d d d d f f f d d d d d f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f f f f f f d d d d d f f f d d d d d f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d d d f f f d d d d d f f f d d d d d f f f f d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f f f f d d d d f f d d d f f f d d d d f f f d d d d d d d f f f d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f d d d d d d f f d d f f f f d d d f f f d d d d d d d d d f f d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d f f f f f f f f f f f f d d d d d d d d d d f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d f f f f f d d d d d f d d d d d d d d d d f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d f f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f f f f d d d d d d d d d d d d d d f f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f f f d d d d d d d d d d d d f f f f d d f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f d d f f f d d d d d d d d d d f f d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d f f f f f d d d d d d d d f f f d d d f f f d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d d f f f f d d d d d f d d f f d d f f f f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d d d d f f f d d d f d d d f f d d f f f f f f f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d d d d f f f d d d d d d d d f f f f f f f f f f f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d d d d f f f f d d d d d d d f f f f f f f f f f f f f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d f f d d f f f d d d d d d f f f f f f f f f f f f f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f d d d d d f f d d d d d f f d d d d d d f f f f f f f f d f f f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d d d d d d d f f d d d d d f f f f f f f d d d f f f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f d d d d f d d f f f d d d d d f f f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f d d f f d d f f d d d d d d d f f f f f d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f f d f f d d f f d d d d d d d d f f f f f f d d d d d d f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f f f f f f f f f d d d d d d d d d d d d d d f d d d d d f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f f f f f f d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f f f f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f d d d f f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f d d d f f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f d d d f f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . f f f d d d d d d d d f f . . . . . . . . . . . . f f f f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . . . f f f f f f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d f f . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . . f f f d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d f f . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . . f f d d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f . . . . . . . f f d d d d d d d d d f f . . . . . . . . . f f f d d d d d d d f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f . . . . . . . f f d d d d d d d d d f f . . . . . . . . . f f d d d d d d d d f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f . . . . . . . f f d d d d d d d d d f f . . . . . . . . . f f d d d d d d d d f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f . . . . . . . f f d d d d d d d d d f f . . . . . . . . . f f d d d d d d d d f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f . . . . . . f f d d d d d d d d d f f . . . . . . . . f f d d d d d d d d d f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . f f d d d d d d d d f f f . . . . . . . . f f d d d d d d d d d f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d f f . . . . . . f f f f f f f f f f f f f . . . . . . . . f f d d d d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d f f . . . . . . f f f d d d d d d d d f f . . . . . . . . f f d d d d d d d d f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . f f d d d d d d d d d f f . . . . . . . f f f d d d d d d d d f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . f f d d d d d d d d d f f . . . . . . . f f f d d d d d d d d f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . . f f d d d d d d d d d f f . . . . . . . f f f d d d d d d d d f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . f f d d d d d d d d d f f . . . . . . . f f f d d d d d d d d f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . f f d d d d d d d d d f f . . . . . . . f f f d d d d d d d d f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . . f f d d d d d d d d d f f . . . . . . f f f f f f f f f f f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d f f . . . . . f f d d d d d d d d d d f f . . . . . f f f d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f f . . . . . f f d d d d d d d d d d f f . . . . . f f d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f . . . . . f f d d d d d d d d d d f f . . . . . f f d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f . . . . f f d d d d d d d d d d f f . . . . f f d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . . f f d d d d d d d d d d f f . . . . f f d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . f f f f f f f f f f f f f f f . . . . f f d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . f f f f f f d d d d d f f f f . . . f f f d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f . . . f f f d d d d d d d d d f f f . . . f f f d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f . . f f f d d d d d d d d d f f f . . . f f f f d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f . . f f d d d d d d d d d d f f f . . . f f f f f f f f f f d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f . . f f d d d d d d d d d d f f f . . f f f f d d d d d f f f f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f f f . . f f d d d d d d d d d d f f f . . f f d d d d d d d d d d f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d f f d d f f f . . f f d d d d d d d d d d f f f . f f f d d d d d d d d d d f f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d f f f d d d d d f f . . f f d d d d d d d d d d f f f . f f d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d f f . . f f d d d d d d d d d d f f 1 f f f d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d f f f f f f d d d d d d d d d f f f 1 f f f d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f f d d d d f f d d f f f f f f d d d d d d d d d f f f f f f d d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f f f f f f f f f f d d d d d d d d f f f f f f f d d d d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f d d d d d d d f f d d f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f d d d d d f f f f f f d d d d d d d f f f f f f f f f d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d f d d d d d d d d f f f f d d d d d d d d d d d d d d d d f f f d d d d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f d d d d d f d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d f f f f d f f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f f f f f f d d d d d d d d d d f f f f f d d d d d d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f f d d f f f d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d f f f d f f d f f d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d f f d d d d d d d d d d d f f f d f f f d d f f d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d f d d d d d d d d d d d f f d d f f d d d d f f f d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f d d d d f f d d d d d d d d d f f d d d f d d d d d f f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d f f d d d d d d d d f d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f f d d d d d d f d d f f f d d d d d d d d d d d d d d d d d f f f d d d f f d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d f f d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f f f f f f d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d f f d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f f f f f d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f d d d f f f d d d d d d d d d d d f f f d d d d d d d d d d d d d d d f f f f d d d d d d f f f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d f f d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d f f d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d f f d d d d d d d d f f f f f d d d d d d d d d d d d d d d d d f d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d f f d d d d d f f f f f f f d d d d d d d d d d d d d d d d d f f f d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d f f f f d d d d f d d d f f f d d d d d d d d d d d d d d d d d f f f f d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f f d d d d d d d d d f d d d f f d d d f f f f d d d d d d d d d d d d d d d d f f f f f d d d f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f f f f d d d d d d d d f f d f f f d d f f f f f d d d d d d d d d d d d d d d f f f f f d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f f d d d d d d d d d d d f f f f f f f f f f f f f d d d d d d d d d d d d d d d f f f f d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f f d d d d d d d d d d d d d f f d d f f f f f f f d d d d d d d d d d d d d f d d f f d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f f f f d d f f d d d d d d d d d d d d d d d d d f d d d f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f f f d d d f f d d d d d d d d d d d d d d d d f d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f f f d d d d d d f d d d d d d d d d d d d d d d f d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f d d d d d d d d f d d d d d d d d d d d d d d f d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f f f d d d d d d d d d f f d d d d d d d d d d d d f d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d f d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d f f d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d f f f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d f f f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f d d d d d d d d d d f d f f f f f d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f d d d d d d f f f f f f f f f f f f f d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d f f f f f f f d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d f d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d f d d d d d d d d d d d d d d d d d d d f d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d f d d d d d d d d f d d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f d d d d d d d f d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f f f d d d d f f f d d d f d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f f f f f f f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f f f f f f d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . f f f d d d d d d d d d f d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d f d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d f d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d f f f d d d f d d d d d d d d d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d d f f f d d d f d d d d d d f f d d d d f f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d d d f f f f f f f d d f f f d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d d d d d d f f f f f f f f f d d d d d d d d d d d f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . f f f f f d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . f f f f d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . f f f f d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . .
    . . . . . . . . . f f f f d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . .
    . . . . . . . . . f f f d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . .
    . . . . . . . . f f f f d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d f d d d d d f f f . . . . . . .
    . . . . . . . f f f f f d d d d d d d d d f f d d d d d d d d d d d d d d f d d d d d f d d d d d f d d d d d d d d d d d f f d d d d d d d f f f . . . . . . .
    . . . . . f f f f d f f d d d d d d d d d f f d d d d d d d d d d d d d d f d d d d f f d d d d f d d d d d d d d d d f f d d d d d d d d d f f f . . . . . . .
    . . . . . f f f d d d f d d d d d d d d d f f d d d d d d d d d d d d d d f f d d f f f d d d f d d d d d d d d d f d d d d d d d d d d d d f f f f . . . . . .
    . . . . f f f d d d d f d d d d d d d d d f f d d d d d d d d d d d d d d f f f f f f f f f f f d d d d d d d f d d d d d d d d d d d d d d d f f f . . . . . .
    . . . . f f d d d d d f f d d d d d d d d f f d d d d d d d d d d d d d d d f f f f f f f f f f d d d d d f d d d d d d d d d d d d d d d d d f f f f . . . . .
    . . . . f f d d d d d f f d d d d d d d d f f d d d d d d d d d d d d d d d f f d d d d d f f f d d d f f d d d d d d d d d d d d d d d d d d f f f f . . . . .
    . . . . f f d d d d d d f d d d d d d d d f f d d d d d d d d d d d d d d d f d d d d d d d d f f f f f d d d d d d d d d d d d d d d d d d d d f f f . . . . .
    . . . . f f d d d d d d f d d d d d d d d f f d d d d d d d d d d d d d d d f d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d f f f . . . . .
    . . . . . f f d d d d d f d d d d d d d d d f d d d d d d d d d d d d d d d f d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d f f f . . . . .
    . . . . . f f d d d d d f f d d d d d d d d f d d d d d d d d d d d d d d f f f f d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d f f f . . . . .
    . . . . . f f d d d d d d f d d d d d d d d f d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d f f f . . . . .
    . . . . . . f f d d d d d f d d d d d d d d f d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d f f f . . . . .
    . . . . . . f f d d d d d f d d d d d d d d f d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d f f f . . . . .
    . . . . . . f f f d d d d d f d d d d d d d f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d f f f . . . . .
    . . . . . . . f f d d d d d f d d d d d d d f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d f f f f f f d d d d d d d f f f . . . . .
    . . . . . . . f f f d d d d f d d d d d d d f d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f d d d d d d d f f f . . . . .
    . . . . . . . f f f d d d d d f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d f f f . . . . .
    . . . . . . . . f f f d d d d f d d d d d d d f d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d f f f . . . . .
    . . . . . . . . f f f d d d d f f d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d f f f f . . . . .
    . . . . . . . . . f f f f d d d f d d d d d d f d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d f f f f . . . . .
    . . . . . . . . . . f f f f d d f f d d d d d f f f d d f f f d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d f f f . . . . . .
    . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d f f f . . . . . .
    . . . . . . . . . . . . f f f f f f f f f f f f f f f d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . .
    . . . . . . . . . . . . . . f f f f f f f f f d d d f d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d f f f . . . . . .
    . . . . . . . . . . . . . . . . f f f f f f f d d d d f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d f f f d d d d d f f f f . . . . . .
    . . . . . . . . . . . . . . . . . f f f f f f f f f f f f d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f d d f f f d d d d d d f f f f d d d d d d d d d d d d d d d f f f f d d d d d d f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f d d d d d f f f f f d d d d d d d d d d d d d f f f f f d d d d d d f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d f f f f f f f f d d f d d d d f f f f f f d d d d d d d d d d d f f f f f d d d d d d d f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d f f f f f f d d d d d d d d f f f f f f f f d d d d d d d d d f f f f d d d d d d d d f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f d d d d f f f f f d d d d f d d f f d d d f f f f f d d d d d d d d f f f d d d d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d f f f f f d d d f f f f d d d d d d f f f f f d d d d d d d d d d d d d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f . . . . . . .
`, img`
    . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . f f f d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . f f f d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . f f d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . f f d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f . . . . . . . . . .
    . . . . . . . . . . f f d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . f f d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . .
    . . . . . . . . . . f f d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f . . . . . .
    . . . . . . . . . . f f f d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d f f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d f f f . . . . .
    . . . . . . . . . . . f f f d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d f f . . . . .
    . . . . . . . . . . . f f f d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d f f . . . . .
    . . . . . . . . . . . . f f f d d d d d d d d d d d d f f f f . . . . . . . . f f f f f f f f f d d d d d d d d d d d d f d d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . f f f d d d f d d d d d d f f f f f f . . . . . f f f f f f f f f f f d d d d d d d d d d d d f f d d d d d d d d d d d d d f d d f f f . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f f . . . . .
    . . . . . . . . . . . . . f f f f f d d d d d d d d f d d f f f f . . . f f f f d d d d d f f f d d d d d d d d d d d d f f d d d d d d d d d d d d d f d d f f f . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f f . . . . . .
    . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d f f f f . f f f d d d d d d d d f f d d d d d d d d d d d d f f d d d d d d d d d d d d d f d d f f f f . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f f . . . . . . .
    . . . . . . . . . . . . . . . f f f f d d d d d d f d d d d d f f f f f f d d d d d d d d d d f d d d d d d d d d d d d f f d d d d d d d d d d d d d f f f f f f f . . . . . . . . . . f f d d d d d d d d d d d d d f f f f . . . . . . . . .
    . . . . . . . . . . . . . . . . f f f d d d d d f d d d d d d d f f f f f d d d d d d d d d d f d d d d d d d d d d d d f f d d d d d d d d d d d d d f f f f f f f f . . . . . . . . f f f d d d d d d d d d d d d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f d d d f d d d d d d d d d f f f d d d d d d d d d d d f f d d d d d d d d d d d f f d d d d d d d d d d d d d f f f f d f f f . . . . . . . f f f d d d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d f f f d d d d d d d d d d d f f d d d d d d d d d d d f f d d d d d d d d d d d d d f f f d d f f f . . . . . . f f f f d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d f f d d d d d d d d d d d f f d d d d d d d d d d d f f d d d d d d d d d d d d d f f d d d d f f f . . . . f f f f f d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d f f f d d d d d d d d d d d d f d d d d d d d d d d d f f d d d d d d d d d d d d f f d d d d d f f f . . . f f f f f f d d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f f d d d d d d d d d d d d f d d d d d d d d d d d f f d d d d d d d d d d d d f f d d d d f f f f . . . f f f d d f f d d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f d d f f d d d d d d d d d d d f d d d d d d d d d d d f f d d d d d d d d d d d d f f d d d f f f f f f . f f f d d d d f f d d d d d d d d f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d f d d d d f f d d d d d d d d d d d f f d d d d d d d d d d f f d d d d d d d d d d d d f f d d f d d d f f f f f f d d d d d d f d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f d d d f d d d d d d f d d d d d d d d d d d d f d d d d d d d d d d f f d d d d d d d d d d d d f f f f d d d d f f f f f d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d f f d d d d d d d d d d d f d d d d d d d d d d d f f f f f f d d d d d d d f f f d d d d d d f f f d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d f f d d d d d d d d d d d f d d d d d d d d d d d f f f d d d d d d d d d d f f d d d d d d d f f f d d d d d d d d d d d d d f f f f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d f f f d d d d d d d d d d d f d d d d d d d d d d d f f d d d d d d d d d d d f f d d d d d d d f f d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d f f d d d d d d f f f d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d d d d d d f d d d d d d d d d d d f d d d d d d d d d d d f f f f f f f f f f f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d d d d d d f d d d d d d d d d d d f f d d d d d d d d d d f f f f f f f f d d f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d f f f f f f f f d d d f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d d d d d d f d d d d d d f f d d d f f f f f f f d d d d f f f f f f f f d d d f d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d f f f f f f d d d d d d d d d d d f d d d d f f d d d d d f f f f f f f f d d f f f f d d d f f d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d f f d d d d d d d d d d f f d d d d d d d d d d d f f d d d d d f d f f d d d d d d f d d d d f d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f d d d d d d d d d f d f f d d d d d d d d d d f f d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f d d d d d f f d d d f f d d d d d d d d d d f f d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f d d d d d d d d d d d f f d d d d d f f f f f f f d d d f f f d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d f d d d d d d d d d f f f f d d f f f f d f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f d d d d d d d f f f f f f f f d d d d d f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f d d d d d d f d d d f f f f d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f d d d f f d d f f f f f d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f f f f f d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d f f d d d d d d f f . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d f f d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . . .
    . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . . .
    . . . f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . . .
    . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . . .
    . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . f f f d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . f f f d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . f f d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . f f f d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . f f d d d d d d d d d d d d d f f f d f f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . f f d d d d d d d d d d d f f d d d d f f . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . f f f d d d d d d d f f f d d d d d d f f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . f f f d d d f f f f d d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d d d f f . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . . .
    . . . . . . . . f f f f f f f f f . . . . . . . f . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . . . f f f f f f f f f f . . . . . . . . f f f . . . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . . .
    . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . .
    . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . . .
    . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . f f d d d d d d d d d d d d d d d d d f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d d d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d f f f d d d d d d d d d d d d d d d d f f . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d f f d d d d d d d d d d d d d d d f f f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d f f d d d d f f f f f f f f f f f d d f f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d d d d d d f f f f f f f f f f f f f d d d d d d f . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d f f f f f d d d d d d d d d d d d d d f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d d d d d d d f d d d d d d d d d d d d d d d d d d d f f . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f d d f f f d d d d d d f d d d d d d d d d d d d d d d d d d f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f d d d d d d d d f d d d d d d d d d d d d d d d d d f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d f f f f f f d d d d d d d d d d d f d d d d d d d d d d d d d d d d f f f f f f . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d f f f f d d d d d d d d d d d d d f f d d d d d d d d d d d d d d f d d d d f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d f f f d d d d d d d d d d d d d d f f d d d d d d d d d d d d f d d d d d d d f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f d d d d f f f d d d d d d d d d d d d d d f f f d d d d d d d d d d d f d d d d d d d d f f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d f f d d d d d d d d d d d d d d f f f f d d f d d d d d d d f d d d d d d d d d d f f . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d f f d d d d d d d d d d d d d d d f f f f f d d d d d d d f d d d d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . . f f f f f f f d d d d d f f d d d d d d d d d d d d d d d f f f f f d d d d d d f d d d d d d d d d d d d f f f . . . . .
    . . . . . . . . . . . . . . . . . . f f f f f f f f d d d d d f f d d d d d d d d d d d d d d d d f f f f d d d d d f d d d d d d d d d d d d d d f f . . . . .
    . . . . . . . . . . . . . . . . . f f f f f f f f f d d d d d f f d d d d d d d d d d d d d d d d f f f d d d d d f d d d d d d d d d d d d d d d f f f . . . .
    . . . . . . . . . . . . . . . . f f f d d f f f f f d d d d d d f d d d d d d d d d d d d d d d d f f f d d d d f f d d d d d d d d d d d d d d d f f f . . . .
    . . . . . . . . . . . . . . . . f f d d d f f f f d d d d d d d f f d d d d d d d d d d d d d d d d f f d d d f f d d d d d d d d d d f d d d d d f f f . . . .
    . . . . . . . . . . . . . . . . f d d d d f f d d d d d d d d d f f f f f f f f f f f f d d d d d d f f d d f f d d d d d d d d d d f d d d d d d f f f . . . .
    . . . . . . . . . . . . . . . f f d d d d f f d d d d d d d d d f f f d d d d d d f f f f f f f f f f f f f f d d d d d d d d d d d f d d d d d d d f f . . . .
    . . . . . . . . . . . . . . . f f d d d d f f d d d d d d d d d f d d d d d d d d d d d d f f f f f f f f f d d d d d d d d d d d f d d d d d d d d f f . . . .
    . . . . . . . . . . . . . . . f f d d d d f d d d d d d d d d f d d d d d f d d d d d d d d d d f f f f f f d d d d d d d d d d f f f d d d d d d d f f . . . .
    . . . . . . . . . . . . . . . f f d d d f f d d d d d d d d f d d d d f d d f f d d d d d d d d d d d f f f f d d d d d d d f f f f d d d d d d d d f f . . . .
    . . . . . . . . . . . . . . . f f d d d f f d d d d d d d d d d d d f d d d d d f d d d d d d d d d d d d f f f f f f f f f f f f f d d d d d d d d f f . . . .
    . . . . . . . . . . . . . . . f f d d d f f d d d d d d d f d d d f d d d d d d f f d d d d d d d d d d d d d d f f f f f f f f f f d d d d d d d d d f f . . .
    . . . . . . . . . . . . . . . f f d d d f f f d d d d d d f d d d f d d d d d d f f f d d d d d d d d d d f d d d d f f f f f f f f f f f f f d d d d f f . . .
    . . . . . . . . . . . . . . f f f d d d d d f d d d d d d f d d f d d d d d d d f f f d d d d d d d d d d f f f d d d d d d f f f f f f f f d d d d d f f . . .
    . . . . . . . . . . . . . . f f f f f d d d d f d d d d d f d d f d d d d d d d f f d d d d d d d d d d f f f f f d d d d d d d d d d d f f d d d d d f f . . .
    . . . . . . . . . . . . . . f f f f f d d d d d f d d d d f d d f d d d d d d f f f d d d d d d d d d d f f f f f f d d d d d d d d d d d d f d d d d f f . . .
    . . . . . . . . . . . . . . f f f f d d d d d d f f d d f f f f f d d d d d d f f d d d d d d d d d d d f f f d f f d d d d d d d d d d d d d f d d d f f . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d f f f f f f f f d d d d d d f f d d d d d d d d d d d d f f d d f d d d d d d d d d d d d d d f d f f f . . .
    . . . . . . . . . . . . . . f f f d d d d d d d d d f f f f f f f d d d d d d f d d d d d d d d d d d d d f f d d f d d d d d d d d d d d d d d d f f f f f . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d f f f f f f f d d d d f d d d d d d d d d d d d d d f f d d f d d d d d d d d d d d d d d d f f f f f . .
    . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f f f f f f f f d d d d d d d d d d d d d d d f f d f d d d d d d d d d d d d d d d d f f f f f . .
    . . . . . . . . . . . . . . . . f f d d d d d d d d d d d d f f f f f f f d d d d d d d d d d d d d d d f f f f f d d d d d d d d d d d d d d d d f f f f f . .
    . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f f f f f f d d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d f f f f f . .
    . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d f f f f f f f f d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d d d d f f f f f . .
    . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f f f f f d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d f f f f f . .
    . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f . .
    . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d f f f f f f .
    . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d f f f f d d d f f f f f f f f f f f f d d d d d d d d d d d d d d d d f f f f f f .
    . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d f f f f d d d d f f f d d d d d f f f f f d d d d d d d d d d d d d d d f f f f f f .
    . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f d d f f f f d d d d d d f f d d d d d d f f f f f d d d d d d d d d d d d d d f f f f f f .
    . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f d d d d d d d f f d d d d d d d d f f f f d d d d d d d d d d d d f f d f f f f .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f f d d d d f f f f d d d d d d d d d f f d d d d d d d d d f f f f d d d d d d d d d d f f d d d f f f .
    . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d f d d d d d d d d d d f f f d d d d f f f .
    . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f d d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f .
    . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d f f f . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d f f f . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d f f f f . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d f f f f f . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d f f f f f f . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d d f f f f f d d d d d d d d f f f f f f f f f f f . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f f . .
`]
currentLetter = sprites.create(alphabet[0], SpriteKind.Letter)
generateRandomLetter()
