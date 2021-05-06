import React, { useEffect, useState } from "react";
import { apiPost } from "../api";
import PaginatedTable from "./PaginatedTable";
import {
  variantsTableHeader,
  biosamplesTableHeader,
  individualsTableHeader,
  makeVariantsTableRows,
  makeBiosampleTableRows,
  makeIndividualTableRows,
} from "../utils";

const QueryResults = ({ queryData, apiRoute }) => {
  const [queryResults, setQueryResults] = useState({});

  useEffect(() => {
    const getQueryResults = async () => {
      const results = await apiPost(apiRoute, queryData);
      console.log({ APIQueryResults: results });
      setQueryResults(results);
    };
    getQueryResults();
  }, []);

  const getColumns = () => {
    switch (apiRoute) {
      case "/g_variants":
        return variantsTableHeader;
      case "/biosamples":
        return biosamplesTableHeader;
      case "/individuals":
        return individualsTableHeader;
      default:
        return [];
    }
  };

  const getRows = () => {
    switch (apiRoute) {
      case "/g_variants":
        return makeVariantsTableRows(queryResults.response.results);
      case "/biosamples":
        return makeBiosampleTableRows(queryResults.response.results);
      case "/individuals":
        return makeIndividualTableRows(queryResults.response.results);
      default:
        return null;
    }
  };

  console.log({ queryData: queryData });
  console.log({queryResults: queryResults})
  return (
    <>
      {Object.keys(queryResults).length !== 0 && (
        <PaginatedTable columns={getColumns()} rows={getRows()} />

      )}
    </>
  );
};

export default QueryResults;
