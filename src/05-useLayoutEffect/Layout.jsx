// import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingQuote, Quote } from "../03-examples/index";

export const Layout = () => {
  const { data, isLoading, getFetch } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      
      {
        (isLoading)
          ? <LoadingQuote />
          : <Quote author={author} quote={quote}/>
      }    

      <button 
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => {
          getFetch();
        }}
      >
        Next quote
      </button>
    </>
  )
}
