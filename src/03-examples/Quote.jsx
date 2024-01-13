import PropTypes from 'prop-types';
import { useState, useRef, useLayoutEffect } from 'react';

export const Quote = ({ author, quote }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
  })

  useLayoutEffect(() => {
    const { width } = pRef.current.getBoundingClientRect();
    setBoxSize({
      width: width,
    })
  }, [])

  return (
    <>
      <blockquote 
        className="d-flex blockquote text-end"
        // style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <p ref={ pRef } className="mb-1 fs-2 text text-light">{quote}</p>
        <footer className="blockquote-footer fs-5 text text-white-50">{author}</footer>
      </blockquote>
      <code className=' fs-4 text text-black'>{JSON.stringify(boxSize)}</code>
    </>
  )
}

Quote.propTypes = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
}
