import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'

export default function Login() {
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const [dataArr, setDataArr] = useState([])

    function submithandler(e) {
        setDataArr([...dataArr, data]);
        setData({
            email: "",
            password: "",
        })
    }
    return (
        <>
            <Container className='d-grid justify-content-center'>
                <div style={{ width: "500px", height: "fit-content", backgroundColor: "#1222" }} className='mt-5 p-2 text-center'>
                    <h3 className='text-dark p-4'>Log In Here</h3>
                    <h6>{data.email} {data.password}</h6>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" type='email' value={data?.email} onChange={(e) => setData({ ...data, email: e?.target?.value })} placeholder='Enter Your Email' label="Email" variant="outlined" />
                        <TextField id="outlined-basic" type='password' value={data?.password} onChange={(e) => setData({ ...data, password: e?.target?.value })} placeholder='Enter Registered Password' label="Password" variant="outlined" />
                        <Button variant="contained" color="info" onClick={(e) => submithandler(e)}>
                            Log In
                        </Button>
                    </Box>
                </div>
            </Container>

            <Table striped bordered hover variant="dark" className='mt-5'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {dataArr.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e?.email}</td>
                                <td>{e?.password}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
