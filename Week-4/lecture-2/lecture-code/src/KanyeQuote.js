import useAxios from "./hooks/useAxios";

const KanyeQuote = function() {
  const { body, error, pending } = useAxios("http://api.kanye.rest");

  return (
    <li>
      {(error !== null) && error}
      {(body !== null) && body.quote}
      {pending && "Please wait..."}
    </li>
  );

};

export default KanyeQuote;