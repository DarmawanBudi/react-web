import React from 'react';
import { Card, CardColumns, Button } from 'react-bootstrap';
import data from "../data/data.json";


function Katalog() {
    return (
        <div className="container">
            <div className="row">
                {
                    data.map((data) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                <Card>
                                    <div className="cardImg">
                                        <Card.Img className="mt-2 img" variant="top" src="https://i.picsum.photos/id/1031/5446/3063.jpg?hmac=Zg0Vd3Bb7byzpvy-vv-fCffBW9EDp1coIbBFdEjeQWE" />
                                    </div>

                                    <Card.Body>
                                    
                                        {/* <Card.Title></Card.Title> */}
                                        <Card.Text>
                                            <b>{data.nama}</b> <br />
                                            {data.keterangan}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer type="button" className="d-flex justify-content-between">
                                        <p>Rp {data.harga}.000</p>
                                        <h5><Button className="btn btn-lg badge badge-pill btn-success">Beli</Button></h5>
                                    </Card.Footer>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Katalog;