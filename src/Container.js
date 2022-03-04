import React from 'react'

function Container() {
  return (
    <div>
    <img src={require('./cake.jpg')}></img>
    <p>Cake was there for you when no one else was.
     It was sweet and warm and took your mind away from the troubles of the world.
     Many literary greats, intellectuals, and celebrities have acknowledged the importance and beauty of this baked good.
     So we’ve collected a bunch of quotes that will remind you of the value of this sugary treat.
     They might even inspire you to bake one yourself.</p>
     <button>Submit</button>
    </div>
  )
}

export default Container