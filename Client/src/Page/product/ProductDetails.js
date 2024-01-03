import React from 'react'

export const ProductDetails = () => {
  return (
    <section className="py-5">
    <div className="container">
      <div className="row gx-5">
        <aside className="col-lg-6">
          <div className="border rounded-4 mb-3 d-flex justify-content-center">
            <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="https://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpghttps://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpg">
              <img style={{maxWidth: '100%', maxHeight: '100vh', margin: 'auto'}} className="rounded-4 fit" src="https://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpg" />
            </a>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpg">
              <img width={60} height={60} className="rounded-2" src="https://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpg" />
            </a>
            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp">
              <img width={60} height={60} className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp" />
            </a>
            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp">
              <img width={60} height={60} className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp" />
            </a>
            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp">
              <img width={60} height={60} className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp" />
            </a>
            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpghttps://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpg">
              <img width={60} height={60} className="rounded-2" src="https://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpghttps://golmart.com.vn/wp-content/uploads/2020/02/nuoc-hoa-13-2048x1492.jpg" />
            </a>
          </div>
          {/* thumbs-wrap.// */}
          {/* gallery-wrap .end// */}
        </aside>
        <div className="col-lg-6">
          <div className="ps-lg-3">
            <h4 className="title text-dark">
              Quality Men's Hoodie for Winter, Men's Fashion <br />
              Casual Hoodie
            </h4>
            <div className="d-flex flex-row my-3">
              <div className="text-warning mb-1 me-2">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fas fa-star-half-alt" />
                <span className="ms-1">
                  4.5
                </span>
              </div>
              <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1" />154 orders</span>
              <span className="text-success ms-2">In stock</span>
            </div>
            <div className="mb-3">
              <span className="h5">$75.00</span>
              <span className="text-muted">/per box</span>
            </div>
            <p>
              Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
              men.
            </p>
            <div className="row">
              <dt className="col-3">Type:</dt>
              <dd className="col-9">Regular</dd>
              <dt className="col-3">Color</dt>
              <dd className="col-9">Brown</dd>
              <dt className="col-3">Material</dt>
              <dd className="col-9">Cotton, Jeans</dd>
              <dt className="col-3">Brand</dt>
              <dd className="col-9">Reebook</dd>
            </div>
            <hr />
            <div className="row mb-4">
              <div className="col-md-4 col-6">
                <label className="mb-2">Size</label>
                <select className="form-select border border-secondary" style={{height: 35}}>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              {/* col.// */}
              <div className="col-md-4 col-6 mb-3">
                <label className="mb-2 d-block">Quantity</label>
                <div className="input-group mb-3" style={{width: 170}}>
                  <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                    <i className="fas fa-minus" />
                  </button>
                  <input type="text" className="form-control text-center border border-secondary" placeholder={14} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                  <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                    <i className="fas fa-plus" />
                  </button>
                </div>
              </div>
            </div>
            <a href="#" className="btn btn-warning shadow-0"> Buy now </a>
            <a href="#" className="btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket" /> Add to cart </a>
            <a href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3"> <i className="me-1 fa fa-heart fa-lg" /> Save </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
