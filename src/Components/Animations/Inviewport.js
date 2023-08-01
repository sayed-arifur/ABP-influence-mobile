import React from 'react';
import { useInView } from 'react-intersection-observer';

const Inviewport = () => {

    // const { ref, inView, entry } = useInView({
    //     threshold: 0,
    // });

    return (
        <>
        <section>
            {/* <div ref={ref}> */}
            <div id='id_viewport' className='box animate fadeInUp one'>Lorem ipsum dummy text</div>
                {/* <h2>{`Header inside viewport ${inView}.`}</h2> */}
                {
                    // setTimeout(()=>{
                    //     inView == true ? document.getElementById("id_viewport").classList.add('show') : document.getElementById("id_viewport").classList.remove('show')
                    // }, 100)
                }
            {/* </div> */}
        </section>

{/* 
<section>
<div className="container">
  <div className="row">

    <h1>CSS3 Fade in animation - On Page Load</h1>
    
    <div className="col-sm-6">
      <div className="box animate fadeInUp one">
        Fade in Up
      </div>
    </div>

    <div className="col-sm-6">
      <div className="box animate fadeInDown two">
        Fade in Down
      </div>
    </div>

    <div className="col-sm-6">
      <div className="box animate fadeInLeft three">
        Fade in Left
      </div>
    </div>

    <div className="col-sm-6">
      <div className="box animate fadeInRight four">
        Fade in Right
      </div>
    </div>

    <div className="col-sm-6">
      <div className="box animate fadeIn five">
        Fade in
      </div>
    </div>

    <div className="col-sm-6">
      <div className="box animate fadeInUpBig six">
        Fade in Up Big
      </div>
    </div>

    <div className="col-sm-6">
      <div className="box animate fadeInDownBig seven">
        Fade in Down Big
      </div>
    </div>

    <div className="col-sm-6">
      <div className="box animate fadeInRightBig eight">
        Fade in Right Big
      </div>
    </div>

  </div>
</div>
</section> */}









</>






    )
}

export default Inviewport