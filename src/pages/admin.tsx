import React, { useState } from "react";
import type { PageProps } from "gatsby";
import Layout from "../components/layout";
import ParamInput from "../components/input";
import { adminEndpoints as endpoints } from "../services/deel/index";

interface QueryParam {
  name: string;
  value: string;
}

interface ComposeUrlOptions {
  url: string;
  qp: QueryParam[];
}

const AdminPage: React.FC<PageProps> = () => {
  const [response, setRes] = useState<any>(null);
  const [url, setUrl] = useState("");

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchData = (url: string): void => {
    const headers: { "x-api-key": string } = { "x-api-key": "RandomApiKey" };
    fetch(url, { method: "get", headers })
      .then((response: Response) => response.json())
      .then((data: any) => setRes(data))
      .catch((error: Error) => console.error(error));
  };

  const composeUrl = ({ url, qp }: ComposeUrlOptions): string => {
    const params = qp.map((param) => `${param.name}=${param.value}`).join("&");
    return `${url}?${params}`;
  };

  const composeRequest = () => {
    const url = composeUrl({ url: "", qp: [{ name: "", value: "" }] });
    const headers = "";
    const qp = "";
    const params = "";
    const body = "";
  };

  return (
    <Layout>
      <main className="font-sans p-24">
        <h1 className="text-2xl">Here are the available Admin endpoints:</h1>

        {Object.keys(endpoints).map((i) => {
          const { name, id, url, headers, queryParams } = endpoints[i];

          return (
            <div className="p-4" key={i}>
              <h3 className=" text-lg capitalize">{name}:</h3>
              <code className="rounded p-2 mr-4 bg-gray-200">{id}</code>
              <button
                onClick={() => fetchData(url)}
                className="rounded-md p-2 bg-blueDeel text-white lowercase "
              >
                try me!
              </button>

              {headers ? (
                <React.Fragment>
                  <h3 className="text-lg capitalize">headers:</h3>
                  {headers?.map((param, idx) => (
                    <ParamInput id={idx} name={param} />
                  ))}
                </React.Fragment>
              ) : null}

              {queryParams ? (
                <React.Fragment>
                  <h3 className="text-lg capitalize">query params:</h3>
                  {queryParams?.map((param, idx) => (
                    <ParamInput id={idx} name={param} />
                  ))}
                </React.Fragment>
              ) : null}
            </div>
          );
        })}

        <button onClick={() => console.log(inputValue)}>Log Input Value</button>

        {response ? (
          <div>
            <h2 className="text-xl">The response:</h2>
            <pre className="rounded p-2 mr-4 bg-gray-200">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        ) : null}
      </main>
    </Layout>
  );
};

export default AdminPage;
