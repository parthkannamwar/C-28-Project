class Stone
{
    constructor(x,y,radius)
    {
        var boptions=
        {
            isStatic:false,
            restitution:0,
            friction:2,
            density:1.2
        }

        this.body=Bodies.circle(x,y,radius,boptions)
        this.radius=radius;
        this.image=loadImage("images/stone2.png")

    World.add(engine.world,this.body);
    }

    display()
    {
        //fill("red");
        //ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
    }
}