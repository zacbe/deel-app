import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import ParamInput from "../components/input";
import { userEndpoints as endpoints } from "../services/deel/index";

const UserPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="font-sans p-24">
        <h1 className="text-2xl">Here are the available User endpoints:</h1>

        {Object.keys(endpoints).map((i) => {
          const { name, id, url, headers, params, queryParams, body } =
            endpoints[i];
          return (
            <div className="p-4" key={i}>
              <h3 className="text-lg capitalize">{name}:</h3>
              <code className="rounded p-2 mr-4 bg-gray-200">{id}</code>
              <button className="rounded-md p-2 bg-blueDeel text-white lowercase ">
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

              {params ? (
                <React.Fragment>
                  <h3 className="text-lg capitalize">request params:</h3>
                  {params?.map((param, idx) => (
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

              {body ? (
                <React.Fragment>
                  <h3 className="text-lg capitalize">body:</h3>
                  {body?.map((param, idx) => (
                    <ParamInput id={idx} name={param} />
                  ))}
                </React.Fragment>
              ) : null}
            </div>
          );
        })}
        {/* 
        {response ? (
          <div>
            <h2 className="text-xl">The response:</h2>
            <pre className="rounded p-2 mr-4 bg-gray-200">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        ) : null} */}
      </main>
    </Layout>
  );
};

export default UserPage;
