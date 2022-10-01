import React,{useRef,useEffect} from 'react'
import lottie from 'lottie-web';

function Loading() {

    const container =useRef(null);

    useEffect(()=>{
        const instance=lottie.loadAnimation({
            container:container.current,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: require("../images/loading.json")
        })
        return () => instance.destroy();
    },[])

  return (
    <div className='loading'>
        <div ref={container} className="animation"></div>
    </div>
  )
}

export default Loading