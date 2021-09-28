import { Cat, CatListType } from "./../types";
import React, { ReactElement, useState, useEffect, useCallback } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import CatTable from "../services/CatService";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function CatList() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "Id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
    ],
    []
  );

  //const cat_data = React.useMemo(() => CatTable.getAllCats(200, 1), []);
  const fetchData = useCallback(
    async ({
      pageIndex,
      pageSize,
    }: {
      pageIndex: number;
      pageSize: number;
    }) => {
      const getCatList = await CatTable.getAllCats(pageIndex, pageSize).then(
        (response) => {
          const cats = response.results;
        }
      );
    }
  );
}

export default CatList;
