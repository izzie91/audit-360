import { useState } from "react";
import axios from "axios";

import { SERVER_URL } from "../../config";

axios.defaults.baseURL = SERVER_URL;

const useHTTPRequest = (method = "GET", path = "/") => {
  const [response, setResponse] = useState({ undefined });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  var config = {
    method: method,
    url: path,
    headers: {
      "content-type": "application/json",
    },
  };

  const makeRequest = async (data) => {
    if (data) {
      config = { ...config, data: data };
    }
    try {
      setLoading(true);
      console.log(config);
      const result = await axios.request(config);
      setResponse(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateConfig = (method, path, data) => {
    config = { ...config, method: method, url: path };
    method = "POST" ? (config = { ...config, data: data }) : config;
  };

  return { response, error, loading, makeRequest, updateConfig };
};

export default useHTTPRequest;
