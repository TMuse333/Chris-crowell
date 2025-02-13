import react, {useState,useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../styles/paragraph.css'

const Paragraph = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const [tiltAngle, setTiltAngle] = useState(30);
    const contentRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
            const contentElement = contentRef.current;
            const elementTop = contentElement.getBoundingClientRect().top;
            const elementHeight = contentElement.clientHeight;
            const windowHeight = window.innerHeight;
    
            // Calculate the percentage of the element's bottom in view
            const visiblePercentBottom = Math.max(0, Math.min(100, (windowHeight - (elementTop + elementHeight)) / windowHeight * 100));
    
            // Check if only the bottom 33% of the element is in view
            const bottomThirdInView = visiblePercentBottom >= 67;
    
            // Calculate the percentage of the element in view
            const visiblePercent = Math.max(0, Math.min(100, (windowHeight - elementTop) / windowHeight * 100));
    
            // Gradually decrease the tilt angle from 30 to 0 as 60% of the element becomes visible
 
            const newTiltAngle= 
            // bottomThirdInView ? (visiblePercent / 90) * 10 :
            Math.max(0, 30 - (visiblePercent / 60) * 30);
    
        
            setTiltAngle(newTiltAngle);
 
    
            const offset = 350;
    
            if (elementTop < windowHeight - offset) {
                setIsAnimated(true);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, ['paragraph']);
    


    return (
        <div className='paragraph-container'
        id='paragraph'
        ref={contentRef}
        style={
            { transform: `perspective(1000px) rotateX(${tiltAngle}deg)` } 
        }>
            <p className='description-text intro'>
            At Sainey Media, we're not just another marketing agency; we are your dedicated allies in the digital world. With a passion for creativity and a commitment to delivering results, we strive to empower businesses of all sizes with affordable and impactful marketing solutions. Our mission is simple: to help businesses thrive in today's competitive landscape by providing top-notch marketing services tailored to their unique needs. We believe that every business deserves the opportunity to succeed, and we're here to make that vision a reality.
            </p>
            <Link to='about-company'>
                                    <button className="button">Our Services</button>
                                </Link>
        </div>
    )
}

export default Paragraph