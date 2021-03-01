class Hand
{
    constructor(body1,point2)
    {
        var options=
        {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.008,
            length: 0
        }
        this.handbody= Constraint.create(options);
        World.add(world,this.handbody);
    }
fly()
{
    this.handbody.bodyA=null
}
attach(body)
{
    this.handbody.bodyA=body
}

    display()
    { 
        if(this.handbody.bodyA)
        {
           var A=this.handbody.bodyA.position
           var B=this.handbody.pointB
           line(A.x,A.y,B.x,B.y)
        }
    }
}