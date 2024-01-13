import PropTypes from 'prop-types';

export const Quote = ({ author, quote }) => {
  return (
    <>
      <blockquote className="blockquote text-end">
        <p className="mb-1 fs-2 text text-light">{quote}</p>
        <footer className="blockquote-footer fs-5 text text-white-50">{author}</footer>
      </blockquote>
    </>
  )
}

Quote.propTypes = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
}
