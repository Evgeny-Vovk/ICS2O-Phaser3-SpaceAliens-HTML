/* global Phaser */

// Copyright (c) 2022 Evgeny Vovk All rights reserved
//
// Created by: Evgeny Vovk
// Created on: May 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" })
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Menu Scene")
  }

  create(data) {
  }

  update(time, delta) {
  }
}

export default MenuScene
