import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import axios from "axios";

const Datatable = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([])
  const { data, loading, error } = useFetch(`/${path}`);

  const [newData, setData] = useState({})

  useEffect(() => {
    setList(data);
  }, [data]);
  
  const handleDelete = async (id) => {
    console.log({list})
    try {
      await axios.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    console.log({list})

    } catch (err) {
      console.log(err)
    }
  };

  const handleClick = (params) => {
    setData(params.row)
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Opcija",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction" onClick={() => handleClick(params)}>
            <Link to="/users/test" params={newData} style={{ textDecoration: "none" }}>
              <div className="viewButton">Vidi</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Obriši
            </div>
          </div>
        );
      },
    },
  ];


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Pregled
        <Link to={`/${path}/new`} className="link">
          Dodavanje
        </Link>
      </div>
      <DataGrid
        //   className="datagrid"
        //   rows={data}
        //   columns={userColumns.concat(actionColumn)}
        //   pageSize={9}
        //   rowsPerPageOptions={[9]}
        //   checkboxSelection
        //   getRowId={(row) => row._id}
        // />

        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
