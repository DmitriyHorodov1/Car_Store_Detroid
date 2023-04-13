import React, { Component, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function AdminPanelPage() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/cars/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deleteUsersData = (id) => {
    axios
      .delete(`http://localhost:4000/cars/delete-user/`+ id)
      .then((res) => {
        if (res.status === 200) {
          alert("User successfully deleted");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert("Something went wrong"));
  };
  return (
    <div className="background">
      <Typography
        variant="h2"
        style={{ marginTop: "8%", textAlign: "center" }}
        gutterBottom
      >
        Admin Panel
      </Typography>

      <TableContainer
        sx={{
          width: "55%",
          display: "flex",
          justifyContent: "center",
          marginLeft: "23%",
          marginTop: "3%",
          marginBottom: "10%",
          backgroundColor: "#E0E1DD",
        }}
        component={Paper}
      >
        <Table size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h5" gutterBottom>
                  Names
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5" gutterBottom>
                  Email
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5" gutterBottom>
                  Phone
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5" gutterBottom>
                  Role
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5" gutterBottom>
                  EditUser
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5" gutterBottom>
                  Delete
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5" gutterBottom>
                  View cars
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((users) => (
              <TableRow
                key={users._id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ paddingLeft: "8px" }}
                  align="center"
                >
                  <Typography variant="h6" gutterBottom>
                    {users.firstName} {users.lastName}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6" gutterBottom>
                    {users.email}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6" gutterBottom>
                    {users.phone}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6" gutterBottom>
                    {users.role}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Link to={`/update-user/${users._id}`}>
                    <Button variant="contained" color="success">
                      Edit
                    </Button>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => deleteUsersData(`${users._id}`)}
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Link to={`/user-cars/${users.email}`}>
                    <Button variant="outlined" color="secondary">
                      View
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
