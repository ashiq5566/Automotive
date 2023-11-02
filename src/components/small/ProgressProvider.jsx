import {React, useState, useEffect} from 'react'

const ProgressProvider = ({ valueStart, valueEnd, duration, children }) => {
    const [value, setValue] = useState(valueStart);
    useEffect(() => {
        let start = null;
    
        const updateValue = (timestamp) => {
          if (!start) start = timestamp;
          const progress = (timestamp - start) / (duration * 100);
          if (progress < 1) {
            setValue(valueStart + (valueEnd - valueStart) * progress);
            requestAnimationFrame(updateValue);
          } else {
            setValue(valueEnd);
          }
        };
    
        requestAnimationFrame(updateValue);
      }, [valueStart, valueEnd, duration]);
    
      return children(value);
}

export default ProgressProvider
