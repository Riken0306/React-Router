import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
}

export default Home;
