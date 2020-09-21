class Paper{
    constructor(x, y, r){
        var options = {
            'restitution':0.3,
            'friction': 0.5,
            'density': 1.2,
            'isStatic': false
        }

        this.body = Bodies.circle(x, y, r, options);
        this.diameter = 2*r;
        this.image = loadImage("paper_image.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        push ();
        imageMode (CENTER);
        image(this.image, pos.x, pos.y, this.diameter);
        pop ();
    }
}