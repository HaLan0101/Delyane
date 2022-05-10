import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    { id: 'title', label: 'Title', minWidth: 100, align: 'center' },
    { id: 'price', label: 'Price', minWidth: 100, align: 'center' }
];

const Painting = ({ ...rest }) => {
    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        const getDatas = async () => {
            try {
                const result = await axios.get('http://90.22.250.124:8080/products')
                setProducts(result.data);
                console.log(result.data);
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

    const mainContent = products
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .filter(
            (product) =>
                !searchTerm ||
                product.titre.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((product) => {
            return (
                <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={product.uuid}
                >
                    <TableCell align="center">{product.title}</TableCell>
                    <TableCell align="center">{product.price} €</TableCell>

                    <TableCell align="center">
                        <div>
                            <Tooltip title="Details" placement="top">
                                {/* <Link to={`/admin/editcustomer/${user.uuid}`}> */}
                                <button>View</button>
                                {/* </Link> */}
                            </Tooltip>
                        </div>
                    </TableCell>
                </TableRow>
            );
        });

    return (
        <div>
            <Headers />
            <div >
                <Card elevation={2} {...rest}>
                    <Typography

                        gutterBottom
                        variant="h4"
                        component="h1"
                    >
                        Products
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
                        <Link to={'/admin/newcustomer'}>
                            <button>Create a new product</button>
                        </Link>
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
        </div>
    );
}

export default Painting;
