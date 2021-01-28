import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import Produk from "../Data/Produk.json";
import "../../App.css";


function Katalog() {
    return (
        <div className="container">
            <CardColumns className="mt-5">
                {
                    Produk.map((data) => {
                        return (
                            <Card id="ca">
                                <Card.Img className="mt-2" style={{borderRadius:"10px"}} variant="top" height="200" src="https://i.picsum.photos/id/1031/5446/3063.jpg?hmac=Zg0Vd3Bb7byzpvy-vv-fCffBW9EDp1coIbBFdEjeQWE" />
                                <Card.Body>
                                    <Card.Title>{data.nama}</Card.Title>
                                    <Card.Text>
                                        {data.keterangan}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <b className="text-muted">Rp {data.harga}.000</b>
                                </Card.Footer>
                            </Card>
                        )
                    })
                }
            </CardColumns>
        </div>
    )
}

export default Katalog;