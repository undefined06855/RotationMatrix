// pointClass

class Point {
    constructor(x, y, label = "N/A", r = 2)
    {
        this.radius = r
        this.x = x
        this.y = y
        this.l = label
    }

    draw(list = false)
    {
        const nx = this.x + canvas.width / 2
            , ny = this.y + canvas.height / 2
        ctx.beginPath();
        if (list)
        {
            ctx.font = "12px monospace"
            ctx.fillText(this.l, nx+6, ny-6)
        }
        ctx.arc(nx, ny, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath()
        ctx.moveTo(nx, ny)
        ctx.lineTo(center.x, center.y)
        ctx.stroke()
    }

    rotate(angle)
    {
        const rad = angle * (Math.PI / 180)
        console.log(`Rotating with angle ${angle}deg and ${rad}rad`)

        return new Point (
            ( this.x * Math.cos(rad) ) - ( this.y * Math.sin(rad) ),
            ( this.x * Math.sin(rad) ) + ( this.y * Math.cos(rad) ),
            this.l + " (Rotated)",
            this.radius
        )
    }
}
