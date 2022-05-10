import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Headers from '../Navbar/Headers';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const columns = [
    { id: 'firstname', label: 'Firstname', minWidth: 100, align: 'center' },
    { id: 'lastname', label: 'Lastname', minWidth: 100, align: 'center' },
    { id: 'email', label: 'Email', minWidth: 100, align: 'center' },
    { id: 'username', label: 'Username', minWidth: 100, align: 'center' },
    { id: 'view', label: '', minWidth: 100, align: 'center' },
];


const Dashboard = ({ className, staticContext, ...rest }) => {
    const [page, setPage] = useState(0);
    const [users, setUsers] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        const getDatas = async () => {
            try {
                const result = await axios.get('http://90.22.250.124:8080/users')
                setUsers(result.data);
            } catch (err) {
                console.log(err)
            }
        };
        getDatas();
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const tableHeader = columns.map((column) => (
        <TableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
        >
            {column.label}
        </TableCell>
    ));

    const mainContent = users
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .filter(
            (user) =>
                !searchTerm ||
                user.username.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((user) => {
            return (
                <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={user.cust_main_name}
                >
                    <TableCell align="center">{user.firstname}</TableCell>
                    <TableCell align="center">{user.lastname}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.username}</TableCell>

                    <TableCell align="center">
                        <div>
                            <Tooltip title="Details" placement="top">
                                <button>View</button>
                            </Tooltip>
                        </div>
                    </TableCell>
                </TableRow>
            );
        });

    return (
        <>
            <Headers />
            <div >
                <Card elevation={2} {...rest}>
                    <Typography

                        gutterBottom
                        variant="h4"
                        component="h1"
                    >
                        Customers
                    </Typography>

                    <div>
                        <TextField
                            // className={classes.search}
                            id="outlined-search"
                            label="Search"
                            type="search"
                            onChange={(event) => {
                                setSearchTerm(event.target.value);
                            }}
                        // InputProps={{
                        //     endAdornment: (
                        //         <InputAdornment position="end">
                        //             <SearchIcon className={classes.searchIc} />
                        //         </InputAdornment>
                        //     ),
                        // }}
                        />

                        {/* <Button href="/admin/newcustomer">
                            Create a new customer
                        </Button> */}
                        <button>Create a new customer</button>
                    </div>

                    <Divider />

                    <Grid>
                        <Paper>
                            <TableContainer>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>{tableHeader}</TableRow>
                                    </TableHead>
                                    <TableBody>{mainContent}</TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={mainContent.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </Grid>
                </Card>
            </div>
        </>
    );
}

export default Dashboard;
