import React from 'react';
import { Card, CardColumns, Button } from 'react-bootstrap';
import data from "../data/data.json";
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";

function Katalog() {
    return (
        <div className="container">
            <div className="row">
                {
                    data.map((data) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                <Link className="link-card" to="/detail">
                                    <Card>
                                        <div className="cardImg text-center">
                                            <Card.Img className="mt-2 img" variant="top" src={data.gambar} />
                                        </div>
                                        

                                        <Card.Body>

                                            {/* <Card.Title></Card.Title> */}
                                            <Card.Text>
                                                <b>{data.nama}</b> <br />
                                                {data.keterangan}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer type="button" className="d-flex justify-content-between">
                                            <div className="row text-center">
                                                <div className="col-md-8">
                                                    <p>Rp {data.harga}.000</p>
                                                </div>
                                                <div className="col-md-4">
                                                   <h4><Button className="btn btn-lg badge badge-pill btn-success">Beli</Button></h4>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Katalog;