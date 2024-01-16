import PropTypes from 'prop-types'
import React from 'react'

// eslint-disable-next-line react/display-name
export const ShowIncrement = React.memo(({ increment }) => {
  console.log('Rendering')

  return (
    <>
      <button 
        className='btn btn-primary'
        onClick={increment}
      >
        Increment
      </button>
    </>
  )
})



ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired
}