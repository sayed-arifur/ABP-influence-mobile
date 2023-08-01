import React from 'react';

const Animations = () => {
  return (
    <section>
        <div>
            <div className="to_fade_up">
                <h1 className='fade_up'>Fade in and up!</h1>
                <h3>This effect uses the following:</h3>
                <ul>
                <li>JS that adds the class 'js' to the html tag (don't show the fade up/in if there is no javascript)</li>
                <li>CSS that describes the fade up/in transition animation (edit as needed) and only works when the .js class exists</li>
                <li>jQuery</li>
                <li>Waypoints, which can tell when an element has appeared on the screen while scrolling down a page (there are other js tools that could be used instead)</li>
                <li>the JS to call when an element with a class "to_fade_up" has come into view</li>
                <li>So once the JS, jQuery, Waypoints, and CSS have been added to a site, you only need to add the class "to_fade_up" to anything you want to fade in</li>
                <li>in the waypoint function, you will see a line: <em>offset: '75%'</em>
                that number controls how far down the screen the content should be when the effect is called.</li>
                </ul>
                <p>Scroll down to see the effect one more time. Otherwise reload, it only runs the first time you scroll down!</p>
            </div>

            <div>
                <div className="to_fade_up">
                <h1 className='fade_from_left'>Fade in and up again!</h1>
                <p>here is</p>
                <p>a bunch of</p>
                <p>more content</p>
                </div>
                    
            </div>
            <div>
                <div className="fiftyfifty">
                <div className="to_fade_from_left basic">
                    <h1 className='fade_from_right'>Fade in and from the left this time!</h1>
                    <p>here is</p>
                    <p>a bunch of</p>
                    <p>more content</p>
                </div>
                <div className="to_fade_from_right basic">
                    <h1>Fade in and from the right this time!</h1>
                    <p>here is</p>
                    <p>a bunch of</p>
                    <p>more content</p>
                </div>
                </div>

            </div>
            </div>
    </section>
  )
}

export default Animations