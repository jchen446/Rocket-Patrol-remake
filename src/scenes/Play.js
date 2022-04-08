class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload(){
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/rocket.png');
        this.load.image('starfield', './assets/starfield.png');
    }
    create() {
        let playText = this.add.text(320, 260, "Click to play");
        playText.setOrigin(0.5,0.5);
        
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);

        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
    }

    update(){
        this.starfield.tilePositionX -= 4;
    }
}