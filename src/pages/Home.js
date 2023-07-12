import React from 'react'
import Marquee from "react-fast-marquee";
import { BsPatchCheckFill, BsCashStack, BsRepeat, BsFillPeopleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import Meta from '../components/Meta'

const Home = () => {
  return (
    <>
    <Meta title='Trang chủ'/>
      <div className='home-wrapper'>
        {/* <section className='home-banner'>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="https://www.canva.com/design/DAFmQQCsons/V1AFfqBS8qCAZsafM88hKw/view?utm_content=DAFmQQCsons&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src="src/assets/images/banner2.png" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src="..." class="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>

        </section> */}
        <section className='home-wrapper-1 py-5'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='main-banner position-relative col-6'>
                <img src='https://solarninhbinh.com/wp-content/uploads/2020/07/HiDM-Part-300x300.png'
                  className='rounded float-end'></img>
                <div className='main-banner-content position-absolute'>
                  <h4 className='text-uppercase'>Năng lượng mặt trời</h4>
                  <h5>Hệ thống điện mặt trời hòa lưới</h5>
                  <h5>Đèn năng lượng mặt trời</h5>
                  <h5>Máy nước nóng năng lượng mặt trời</h5>
                  <p>Chỉ từ 328.000đ</p>
                  <Link className='button'>Mua ngay</Link>
                </div>
              </div>
              <div className='col-6'>
                <div className='row'>
                  <div className='col-6'>
                    <div className='small-banner d-flex p-3 align-items-center '>
                      <div className='small-banner-content '>
                        <h4 className='text-uppercase'>Đồ điện <br/>gia dụng</h4>
                        <Link className='button'>Mua ngay</Link>
                      </div>
                      <div>
                        <img src='https://iweb.tatthanh.com.vn/pic/9/thumb/medium/product/kaliteq6.jpg'
                          className='small-banner-img img-fluid rounded-3 '></img>
                      </div>
                    </div>
                    <div className='small-banner d-flex p-3 align-items-center '>
                      <div className='small-banner-content '>
                        <h4 className='text-uppercase'>Giải pháp doanh nghiệp</h4>
                        <Link className='button'>Mua ngay</Link>
                      </div>
                      <div>
                        <img src='https://iweb.tatthanh.com.vn/pic/9/thumb/medium/service/giai-phap-camera-an-ninh.jpeg'
                          className='small-banner-img img-fluid rounded-3 '></img>
                      </div>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='small-banner d-flex p-3 align-items-center '>
                      <div className='small-banner-content '>
                        <h4 className='text-uppercase'>ICT</h4>
                        <Link className='button'>Mua ngay</Link>
                      </div>
                      <div>
                        <img src='https://iweb.tatthanh.com.vn/pic/9/thumb/medium/product/IMOU-IPC-A22EP.jpg'
                          className='small-banner-img img-fluid rounded-3 '></img>
                      </div>
                    </div>
                    <div className='small-banner d-flex p-3 align-items-center '>
                      <div className='small-banner-content '>
                        <h4 className='text-uppercase'>Điện tử - Điện lạnh</h4>
                        <Link className='button'>Mua ngay</Link>
                      </div>
                      <div>
                        <img src='https://iweb.tatthanh.com.vn/pic/9/thumb/medium/product/Dieu_hoa_Carrier_Mono(3).png'
                          className='small-banner-img img-fluid rounded-3 '></img>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
        <section className='home-wrapper-2 py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='servies d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center gap-15'>
                    <BsPatchCheckFill className='icon-wrapper-2' />
                    <div>
                      <h6>Xác thực đơn hàng nhanh</h6>
                      <p className='mb-0'>Hỗ trợ và xác nhận đơn hàng trong 24h</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <BsCashStack className='icon-wrapper-2' />
                    <div>
                      <h6>Đa dạng phương thức thanh toán</h6>
                      <p className='mb-0'>Thanh toán linh hoạt khi nhận hàng</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <BsRepeat className='icon-wrapper-2' />
                    <div>
                      <h6>Hỗ trợ đổi trả</h6>
                      <p className='mb-0'>Lỗi đổi tại nhà trong 1 tuần</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <BsFillPeopleFill className='icon-wrapper-2' />
                    <div>
                      <h6>Hỗ trợ quý khách hàng suốt thời gian sử dụng.</h6>
                      <p className='mb-0'> Hotline 1900 98 98 68</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='marquee-wrapper py-5'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <div className='marquee-inner-wrapper card-wrapper'>
                  <Marquee className='d-flex'>
                    <div className='mx-4 w-25'>
                      <img className='img-logo-brand' src='https://www.carriervn.vn/wp-content/uploads/2020/07/Carrier.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img className='img-logo-brand' src='https://famy.vn/themes/new-famy/assets/img/logo-famy-slim.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img className='img-logo-brand' src='https://kbi.com.vn/wp-content/uploads/2021/09/logokbi-300x167.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img className='img-logo-brand' src='https://empiregroup.com.vn/wp-content/uploads/2022/12/loogo-chuan-1024x252.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img className='img-logo-brand' src='https://logonoid.com/images/suntek-logo.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img className='img-logo-brand' src='https://vidia.vn/vnt_upload/news/10_2019/logo-hanet-500.png' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img className='img-logo-brand' src='https://cameraezviz.com.vn/wp-content/uploads/2021/08/logo-ezviz.jpg' alt='brand' />
                    </div>
                    <div className='mx-4 w-25'>
                      <img className='img-logo-brand' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/T%E1%BA%ADp_%C4%91o%C3%A0n_%C4%90%E1%BA%A1i_Vi%E1%BB%87t.png/1200px-T%E1%BA%ADp_%C4%91o%C3%A0n_%C4%90%E1%BA%A1i_Vi%E1%BB%87t.png' alt='brand' />
                    </div>

                  </Marquee>
                </div>

              </div>

            </div>

          </div>
        </section>
        <section className='product-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <h3 className='text-uppercase'>Sản phẩm</h3>
            <div className='row row-cols-1 row-cols-md-5 g-4'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
        <section className='blog-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <h3 className='text-uppercase'>Tin tức</h3>
            <div className='row row-cols-1 row-cols-md-4 g-4'>
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Home;