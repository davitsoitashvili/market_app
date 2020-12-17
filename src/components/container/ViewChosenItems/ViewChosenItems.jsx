import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";


function createData(image, title, amount, price) {
    return { image, title, amount, price };
}


function ViewChosenItems(props) {

    let rows = [];
    props.cart.forEach(el => {
        rows.push(createData(el.item.image, el.item.title, el.amount, el.item.price));
        console.log(el);
    })


    return (

        {
            rows.length && 
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell component="th" scope="row">
                                    <img src={row.image} alt="item" />
                                </TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                {/* <TableCell align="right">{row.actions}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
        }
    );
}

const mapStateToProps = (state) => ({
    cart: state.items.cart,
});

export default connect(mapStateToProps)(ViewChosenItems);