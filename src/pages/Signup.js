import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <Meta title='Tài khoản' />
      <div className='account-wrapper-login'>
        <BreadCrumb title='Đăng kí' />
        <div class="container">
          <div class="row justify-content-center align-items-center py-4">
            <div class="col-lg-6">
              <img src="https://viettelconstruction.com.vn/wp-content/uploads.bak/2021/07/Viettel-Construction-Giai-phap-tich-hop.jpg" class="image-login img-fluid" />
            </div>
            <div class="col-lg-6" >
              <h3 className='contact-title mb-4'>Đăng kí</h3>
              <form>
                <div className='row mb-3'>
                  <div class="col-md-6">
                    <label for="firstname" class="form-label">Họ</label>
                    <input type="text" class="form-control" id="firstname" name="firstname" required />
                  </div>
                  <div class="col-md-6">
                    <label for="lastname" class="form-label">Tên</label>
                    <input type="text" class="form-control" id="lastname" name="lastname" required />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="mobile" class="form-label">Số điện thoại</label>
                  <input type="tel" class="form-control" id="mobile" name="mobile" pattern="[0-9]{10}" required />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" name="email" required />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Mật khẩu</label>
                  <input type="password" class="form-control" id="password" name="password" required />
                </div>
                <div>
                  Đã có tài khoản?<Link to="/login">Đăng nhập ngay</Link>
                </div>
                <button type="submit" class="btn btn-danger">Đăng kí</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup