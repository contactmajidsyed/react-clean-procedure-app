import React from 'react'
import PropTypes from 'prop-types'
import ArrowRight from '@material-ui/icons/ArrowRightAlt';

import './Arrow.css';
const Arrow = ({stepNumber, totalSteps}) => {
    let arrow = (totalSteps !== stepNumber + 1 && totalSteps !== 1) ?  <ArrowRight/>  : ""
    
    return <span className="arrow">{arrow}</span>
}

  Arrow.propTypes = {
    stepNumber: PropTypes.number.isRequired,
    totalSteps: PropTypes.number.isRequired
  }


  export default Arrow