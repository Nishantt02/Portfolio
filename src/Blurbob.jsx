import React from 'react'
import PropTypes from 'prop-types'

const  BlurBlob=({position,size}) =>
    {

    const { top, left } = position
  const { width, height } = size 

  return (
    <div className='absolute'
        style={{
            top:top,
            height:height,
            width:width,
            left:left,
            transform:'translate(-50%,-50%)'

        }}
      >

        <div className='w-full h-full bg-purple-700 rounded-full opacity-20 blur-3xl animate-blob'>

        </div>
    </div>
  )
}

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
