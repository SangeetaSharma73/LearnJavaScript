import { useState, useEffect } from "react";

const ApiFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h1>5. API Data Fetch Example</h1>
      {data ? <h2>{data.title}</h2> : <p>Loading...</p>}
    </div>
  );
};

export default ApiFetch;
