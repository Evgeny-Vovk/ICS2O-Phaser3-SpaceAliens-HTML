/* global Phaser */

// Copyright (c) 2022 Evgeny Vovk All rights reserved
//
// Created by: Evgeny Vovk
// Created on: May 2022
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" })
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Splash Scene")
  }

  create(data) {
  }

  update(time, delta) {
  }
}

export default SplashScene
