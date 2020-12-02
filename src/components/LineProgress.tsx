import React, {useState, useEffect} from 'react'

interface Istyles {
        bgcolor:string,        
        completed:string       
}

const LineProgress: React.FC<Istyles> = (props)=> {
    const containerStyles = {
        height: 10,
        width: '100%',
        backgroundColor: "#C4C4C4",
        borderRadius: 50,
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${props.completed}%`, 
        backgroundColor: props.bgcolor,
        borderRadius: 'inherit'
        // textAlign: 'right'
      }
      const labelStyles = {
        padding: 1,
        color: 'white',
        fontWeight: 'bold'
      }

    return (
        <>            
        <div style={containerStyles}>
            <div style={fillerStyles}>
                {/* <span style={labelStyles}>{`50%`}</span> */}
            </div>
        </div>
            
        </>
    )
}

export default LineProgress

