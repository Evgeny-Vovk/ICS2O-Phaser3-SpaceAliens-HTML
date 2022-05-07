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
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Game Scene")

    // images
    this.load.image("starBackground", "./assets/starBackground.png")
    this.load.image("ship", "./assets/spaceShip.png")
  }

  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")
  }

  update(time, delta) {
    //called 60 times a second.

    const keyForwardObj = this.input.keyboard.addKey("W")
    const keyLeftObj = this.input.keyboard.addKey("A")
    const keyBackwardObj = this.input.keyboard.addKey("S")
    const keyRightObj = this.input.keyboard.addKey("D")
    

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
  }
}

export default GameScene
