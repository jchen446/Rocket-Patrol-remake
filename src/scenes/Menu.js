class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        let menuText = this.add.text(320, 240, "Rocket Patrol Menu");
        menuText.setOrigin(0.5,0.5)

        this.scene.start("playScene");
    }
}
