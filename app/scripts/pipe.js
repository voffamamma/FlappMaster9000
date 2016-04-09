window.Pipe = (function() {
    'use strict';

    var GAP = 17;
    var SPEED = 10;
    var nextID = 1;
    var position = 102.5;

    var Pipe = function(el, game, pipeID) {
        this.el = el;
        this.game = game;
        this.pipeID = pipeID;
        this.position = 0;
        this.tHeight = 0;
        this.bHeight = 0;
    };

    Pipe.prototype.reset = function() {
        this.randGap();
        nextID = 1;
        if( this.pipeID === 1) {
            this.position = this.pipeID * position;
        }else if(this.pipeID === 2) {
            this.position = this.pipeID * position - 70;
        }else {
            this.positipn = this.pipeID * position - 140;
        }
    };

    Pipe.prototype.onFrame = function(delta) {

        this.position -= delta * 10;
        if(this.position < -10) {
            this.positon = this.game.WORLD_WIDTH;
        }
        this.el.css('transform', 'translateZ(0) translate3d(' + this.position + 'em, 0em, 0) ');
    };

    Pipe.prototype.randGap = function() {
        this.bHeight = Math.floor((Math.random() * (this.game.WORLD_HEIGHT - 8)) - GAP);
        if(this.bHeight < 8) {
            this.bHeight = 8;
        }
		this.tHeight = this.game.WORLD_HEIGHT - (this.bHeight + GAP);
		$('.topPipe' + this.pipeID).height(this.tHeight + 'em');
		$('.bottomPipe' + this.pipeID).height(this.bHeight + 'em');
    };

    Pipe.prototype.checkCollision = function() {

    };

    return Pipe;
})();
