import React, { useState } from 'react'
import ProductCard from '../components/ProductCard';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom'

const SingleProduct = () => {
  const [orderProduct, setorderedProduct] = useState(true);
  return (
    <div>
      <Meta title='Tên sản phẩm' />
      <BreadCrumb title='Tên sản phẩm' />
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div class="row">
            <div class="col-lg-6">
              <img src="https://viettelconstruction.com.vn/wp-content/uploads.bak/2021/07/Viettel-Construction-Giai-phap-tich-hop.jpg" class="image-login img-fluid" />
            </div>
            <div class="col-lg-6" >
              <div className='product-inner-wrapper'>
                <h5 className='text-uppercase text-danger'>Tên sản phẩm</h5>
                <div>

                  <div className='review-head d-flex justify-content-between align-items-end p-3'>
                    <div>
                      <h6>1.540.000 VNĐ</h6>
                      <div className='d-flex align-items-center gap-10'>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          activeColor="#ffd700"
                        />
                        <p className='mb-0'>Dựa trên 2 đánh giá</p>
                      </div>
                    </div>
                    {orderProduct && (
                      <div>
                        <a href='#review'> Viết đánh giá</a>
                      </div>
                    )}
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Nhãn hiệu:</h3>
                    <p className='product-data'>Nhãn hiệu</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Danh mục:</h3>
                    <p className='product-data'>Nhãn hiệu</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Số lượng:</h3>
                    <div className=''>
                      <input type='number' name='' min={1} max={10} className='form-control' style={{ width: "70px" }} id='' />
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button
                      className="button border-0"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      type="button"
                    >
                      Add to Cart
                    </button>
                    <button className="button">Buy It Now</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='description-product-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>

            <div className='row'>
              <div className='col-12'>
                <div className='description-inner-wrapper'>
                  <h5 className='text-uppercase text-danger'>Mô tả sản phẩm</h5>
                  <div className='text-description p-3'>
                    <p>
                      If you're looking for a quick and easy way to build an ecommerce store, then Project MERN is the perfect solution for you. This video tutorial will show you how to set up and configure React and Redux to create a simple ecommerce store, complete with checkout and payment processing!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='reviews-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>

            <div className='row'>
              <div className='col-12'>
                <div className='review-inner-wrapper'>
                  <h5 id='review' className='text-uppercase text-danger'>Đánh giá sản phẩm</h5>
                  <div className='review-head d-flex justify-content-between align-items-end p-3'>
                    <div>
                      <div className='d-flex align-items-center gap-10'>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          activeColor="#ffd700"
                        />
                        <p className='mb-0'>Dựa trên 2 đánh giá</p>
                      </div>
                    </div>
                    {orderProduct && (
                      <div>
                        <a href=''> Viết đánh giá</a>
                      </div>
                    )}
                  </div>
                  <div className='review-form py-4'>
                    <h5>Viết đánh giá</h5>
                    <form action='' className='d-flex flex-column gap-15'>
                      <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          activeColor="#ffd700"
                        />
                      </div>
                      <div>
                        <textarea name='' id='' className='w-100 form-control' cols={30} rows={4} placeholder='Bình luận'>

                        </textarea>
                      </div>
                      <div className='d-flex justify-content-md-end'>
                        <button className='button border-0'>Gửi thông tin</button>
                      </div>
                    </form>
                  </div>
                  <div className='reviews mt-4'>
                    <div className='review'>
                      <div className='d-flex gap-10 align-items-center'>
                        <h6 className='mb-0'>User</h6>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          activeColor="#ffd700"
                        />
                      </div>
                      <p className='mt-3'>
                        If you're looking for a quick and easy way to build an ecommerce store, then Project MERN is the perfect solution for you. This video tutorial will show you how to set up and configure React and Redux to create a simple ecommerce store, complete with checkout and payment processing!
                      </p>
                    </div>

                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>
        <section className='product-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <h5 className='text-uppercase text-danger'>Sản phẩm tương tự</h5>
            <div className='row row-cols-1 row-cols-md-5 g-4'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </div>

    </div>

  )
}

export default SingleProduct