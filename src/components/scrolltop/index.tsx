import React from 'react'


const ScrollTop:React.FC = () => {
    function ScrollToTopOnMount(){
        React.useEffect(()=> {
            window.scrollTo({
                top:0,
                left:0,
                behavior: 'smooth'
            })
        },[])
        return null
    }
    return(
        <ScrollToTopOnMount />
    )
}

export default ScrollTop
