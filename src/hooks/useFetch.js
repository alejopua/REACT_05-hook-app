import { useEffect, useState } from "react"

export const useFetch = ( url ) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
    error: null,
  })

  const getFetch = async() => {
    setState({
      ...state,
      isLoading: true,
    })

    const res = await fetch(url);

    if (!res.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: res.status,
          message: res.statusText,
        }
      })

      return;
    }

    const data = await res.json();

    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null
    })

    // manejo caché
  }

  useEffect(() => {
    getFetch();
  }, [url])
  

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    getFetch
  };
}
