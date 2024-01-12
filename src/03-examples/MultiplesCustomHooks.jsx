import { useFetch } from "../hooks/useFetch"

export const MultiplesCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');
  console.log(data, isLoading, hasError);

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
    
    </>
  )
}
