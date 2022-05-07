import React from "react";
import ReactPlayer from "react-player"

function ApplePay() {
  return (
    <>

<h1>This is not a tutorial on how to operate ApplePay.</h1>
    <p className="paragraph">
If you don't know how to do ApplePay then maybe select a different one. 
</p>
<p className="paragraph">
JUST KIDDING!!! Money is Money! Plus Apple Pay is so convienet!!!!
</p>
<br></br>
<h3>
Here is a tutorial video:
</h3>
<br></br>
    <div>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=uDQKTPuC0oA'
          className='react-player'
          playing
          width='100%'
          height='100%'
        />
      </div>
    </>
  );
}

export default ApplePay;