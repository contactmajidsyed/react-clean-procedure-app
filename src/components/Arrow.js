import React from 'react'
import PropTypes from 'prop-types'

const Arrow = ({stepNumber, totalSteps}) => {
    let arrow = (totalSteps !== stepNumber + 1 && totalSteps !== 1) ? " -> " : " "
    
    return <span>{arrow}</span>
}


  Arrow.propTypes = {
    stepNumber: PropTypes.number.isRequired,
    totalSteps: PropTypes.number.isRequired
  }


  export default Arrow