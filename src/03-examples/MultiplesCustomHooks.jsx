import { useFetch } from "../hooks/useFetch"

export const MultiplesCustomHooks = () => {
  const { data, isLoading } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');
  // console.log(data, isLoading, hasError);
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {
        (isLoading)
          ? (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
          : (
            <blockquote className="blockquote text-end">
              <p className="mb-1 fs-1 text text-light">{author}</p>
              <footer className="blockquote-footer fs-5 text text-white-50">{quote}</footer>
            </blockquote>
          )
      }    

      <button className="btn btn-primary">
        Next quote
      </button>
    </>
  )
}
