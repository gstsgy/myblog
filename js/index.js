class Circle{
    constructor(width,height){
        this.pos = {};
        this.init(width,height);
    }
    init(width,height){
        this.pos.x = Math.random()*width;
        this.pos.y = height+Math.random()*100;
        this.alpha = 0.1+Math.random()*0.3;
        this.scale = 0.1+Math.random()*0.3;
        this.velocity = Math.random();
    }
    draw(ctx){
        if(this.alpha <= 0) {
            init();
        }
        this.pos.y -= this.velocity;
        this.alpha -= 0.0005;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.scale*10, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(255,255,255,'+ this.alpha+')';
        ctx.fill();
    }
}




