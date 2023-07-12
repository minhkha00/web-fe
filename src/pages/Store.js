import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'


const Store = () => {
  return (
    <>
      <Meta title='Cửa hàng' />

      <div className='store-wrapper'>
        <BreadCrumb title='Store' />
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <h3 className='filter-title'>Danh mục sản phẩm</h3>
              <div className='filter-card mb-3'>

                <div>
                  <ul className='ps-0'>
                    <li>Máy phát điện</li>
                    <li>Lọc nước tổng</li>
                    <li>Đồ Gia dụng</li>
                    <li>Điện tử - Điện lạnh</li>
                    <li>Năng lượng mặt trời</li>
                    <li>ICT</li>
                    <li>Dịch vụ kĩ thuật</li>
                  </ul>
                </div>
                <div className=''>

                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='featured-products'>
                <div className='container-xxl'>
                  <h3 className='product-title'>Sản phẩm nổi bật</h3>
                  <div className='row row-cols-1 row-cols-md-4 g-4'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                  </div>
                </div>
              </div>
              <div className='all-products'>
                <div className='container-xxl'>
                  <h3 className='product-title'>Tất cả sản phẩm</h3>
                  <div className='row row-cols-1 row-cols-md-4 g-4'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                  </div>
                </div>
              </div>

              <div className='page-navigation'>
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Trang trước</a>
                    </li>
                    <li class="page-item"><a class="page-link text-danger" href="#">1</a></li>
                    <li class="page-item"><a class="page-link text-danger" href="#">2</a></li>
                    <li class="page-item"><a class="page-link text-danger" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link text-danger" href="#">Trang tiếp</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Store