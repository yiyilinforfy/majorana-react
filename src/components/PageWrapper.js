import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";

function PageWrapper({ pageUrl }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/api/fetch-page-content?url=${pageUrl}`).then((response) => {
      setContent(response.data.content);
    });
  }, [pageUrl]);

  return (
    <div>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default PageWrapper;