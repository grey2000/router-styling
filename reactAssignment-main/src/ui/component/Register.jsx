import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


export default function Register() {
    let [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        ph_no: "",
        password: "",
        address: "",
    })
    const [dataArr, setDataArr] = useState([])

    function submithandler(e) {
        setDataArr([...dataArr, data]);
        setData({
            name: "",
            surname: "",
            email: "",
            ph_no: "",
            password: "",
            address: "",
        })
    }
    return (
        <>
            <Container className='d-grid justify-content-center'>
                <div style={{ width: "500px", height: "fit-content", backgroundColor: "#1222" }} className='mt-3 p-2 text-center'>
                    <h3 className='text-dark p-4'>Register Here</h3>
                    <h6>{data.name} {data.surname}</h6>
                    <h6>{data.email}--{data.ph_no}</h6>
                    <h6>{data.password}</h6>
                    <h6>{data.address}</h6>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Name" value={data?.name} onChange={(e) => setData({ ...data, name: e?.target?.value })} variant="outlined" />
                        <TextField id="outlined-basic" label="Surname" value={data?.surname} onChange={(e) => setData({ ...data, surname: e?.target?.value })} variant="outlined" />
                        <TextField id="outlined-basic" type='email' value={data?.email} onChange={(e) => setData({ ...data, email: e?.target?.value })} label="Email" variant="outlined" />
                        <TextField id="outlined-basic" type='Text' value={data?.ph_no} onChange={(e) => setData({ ...data, ph_no: e?.target?.value })} label="Phone Number" variant="outlined" />
                        <TextField id="outlined-basic" type='password' value={data?.password} onChange={(e) => setData({ ...data, password: e?.target?.value })} label="Password" variant="outlined" />
                        <TextField
                            id="filled-multiline-static"
                            label="Address"
                            multiline
                            value={data?.address}
                            onChange={(e) => setData({ ...data, address: e?.target?.value })}
                            rows={2}
                            variant="outlined" />
                        <Button variant="contained" color="info" onClick={(e) => submithandler(e)}>
                            Submit
                        </Button>
                    </Box>
                </div>
            </Container>

            <Table striped bordered hover variant="dark" className='mt-5'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {dataArr.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e?.name}</td>
                                <td>{e?.surname}</td>
                                <td>{e?.email}</td>
                                <td>{e?.password}</td>
                                <td>{e?.address}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
