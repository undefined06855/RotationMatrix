// yes this is built on wordToShape...

const canvas = document.querySelector("canvas")
    , ctx = canvas.getContext("2d")
    , center = new Point(canvas.width / 2, canvas.height / 2, "", 0)

var rot = 90

function dp()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  var p = new Point(0, -50, "Point")

  var n = p.rotate(rot)


  p.draw(true)
  n.draw(true)
}

dp()