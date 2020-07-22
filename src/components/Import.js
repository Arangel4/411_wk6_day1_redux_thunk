import React from 'react';
import { Button, Container, IconButton, Menu, MenuItem, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

const Import = (props) => {
    const [anchorE1, setAnchorE1] = React.useState(null);

    const handleClick = (event) => {
        setAnchorE1(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorE1(null);
    }

    return (
        <div className="importButton">
            <Container>
                <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
                <h2>COUNT: {props.makes.length}</h2>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Make</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.makes.map((row, index) => (
                            <TableRow key={row.MakeId}>
                                <TableCell>{row["MakeId"]}</TableCell>
                                <TableCell>{row["MakeName"]}</TableCell>
                                <TableCell>
                                    <IconButton
                                        helvetica-label="more"
                                        helvetica-controls="long-menu"
                                        helvetica-haspopup="true"
                                        onClick={handleClick}>
                                            <MoreVert />
                                    </IconButton>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorE1}
                                        keepMounted
                                        open={Boolean(anchorE1)}
                                        onClose={handleClose}>
                                        <MenuItem onClick={() => props.deleteMake(index)}>Delete</MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </div>
    )
}
export default Import