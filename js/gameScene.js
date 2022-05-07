/* global Phaser */

// Copyright (c) 2022 Evgeny Vovk All rights reserved
//
// Created by: Evgeny Vovk
// Created on: May 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" })

    this.background = null
    this.ship = null
    this.fireMissile = false
  }
  

  init(data) {
    this.cameras.main.setBackgroundColor("#101E4A")
  }

  preload() {
    console.log("Game Scene")

    // background music
    this.load.audio("music", "./assets/music.mp3")
    // images
    this.load.image("starBackground", "./assets/starBackground.png")
    this.load.image("ship", "./assets/spaceShip.png")
    this.load.image("missile", "./assets/missile.png")
    // sound
    this.load.audio("laser", "./assets/laser1.wav")
  }

  create(data) {
    this.background = this.add.image(0, 0, "starBackground")
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")

    //create a group for the missiles
    this.missileGroup = this.physics.add.group()

    //background music
    this.music =  this.sound.add('music', {
  		volume: 0.3,
  		loop: true
  	})
  	this.music.play()
    }

  update(time, delta) {
    //called 60 times a second.

    const keyForwardObj = this.input.keyboard.addKey("W")
    const keyLeftObj = this.input.keyboard.addKey("A")
    const keyBackwardObj = this.input.keyboard.addKey("S")
    const keyRightObj = this.input.keyboard.addKey("D")
    const keySpaceObj = this.input.keyboard.addKey("SPACE")
    

    if (keyForwardObj.isDown === true) {
      this.ship.y -= 6
      if (this.ship.y < 700) {
        this.ship.y = 700
      }
    }
    
    if (keyLeftObj.isDown === true) {
      this.ship.x -= 6
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }
    
    if (keyBackwardObj.isDown === true) {
      this.ship.y += 6
      if (this.ship.y > 1080) {
        this.ship.y = 1080
      }
    }
    
    if (keyRightObj.isDown === true) {
      this.ship.x += 6
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }
    
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        //fire missile
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, "missile")
        this.missileGroup.add(aNewMissile)
        this.sound.play("laser")
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }
  }
}

export default GameScene
