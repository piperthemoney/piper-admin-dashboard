// src/CloudflareAnalytics.js

import { useEffect, useState } from "react";
import axios from "axios";

const CloudflareAnalytics = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const API_TOKEN = "rem8FuNAkeuWtS7sDcSGmEZbODTUJPoiNn9mLC8X"; // Replace with your Cloudflare API token
  const ACCOUNT_ID = "2e47603f5fc0fa89d95cb8866b9299a4"; // Replace with your Cloudflare account ID

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/analytics/dashboard`,
          {
            headers: {
              Authorization: `${API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        setData(response.data.result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAnalytics();
  }, []);

  if (error) return <div>Error: {error}</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Cloudflare Account Analytics</h1>
      <h2>Requests: {data.requestCount}</h2>
      <h2>Bandwidth: {data.bandwidth} bytes</h2>
    </div>
  );
};

export default CloudflareAnalytics;
