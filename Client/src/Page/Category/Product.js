import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const Product = ({ products }) => {

    return (

        <div className="container">
            <div className="row">
                {products.map((e, i) => {
                    return (
                        <div className="col-sm-2 mb-3">
                            <div className="card ">
                                <div className="card-body">
                                    <div className="card-img-actions">
                                        <img src={e.imgSrc} className="card-img img-fluid" width={96} height={350} alt />
                                    </div>
                                </div>
                                <div className="card-body bg-light text-center">
                                    <div className="mb-2">
                                        <h6 className="font-weight-semibold mb-2">
                                            <a href="#" className="text-default mb-2 r-linec" data-abc="true">{e.title}</a>
                                        </h6>
                                        <a href="#" className="text-muted r-linec" data-abc="true">{e.desc}</a>
                                    </div>
                                    <h3 className="mb-0 font-weight-semibold">{e.price}</h3>
                                    <div>
                                        <i className="fa fa-star star" />
                                        <i className="fa fa-star star" />
                                        <i className="fa fa-star star" />
                                        <i className="fa fa-star star" />
                                    </div>
                                    <div className="text-muted mb-3">34 reviews</div>
                                    <div class="right">
                                        <Link to='/product' class="btn btn-sm btn-outline-primary me-1"><i class="fas fa-eye"></i></Link>
                                        <button class="btn btn-sm btn-outline-success"><i class="fas fa-cart-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}



            </div>

        </div>

    )
}
