import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
  return (
    <div>
    <Meta title='Tài khoản' />
    <div className='account-wrapper-login'>
        <BreadCrumb title='Quên mật khẩu'/>
        <div class="container">
            <div class="row justify-content-center align-items-center py-4">
                <div class="col-lg-6">
                    <img src="https://viettelconstruction.com.vn/wp-content/uploads.bak/2021/07/Viettel-Construction-Giai-phap-tich-hop.jpg" class="image-login img-fluid" />
                </div>
                <div class="col-lg-6" >
                    <h3 className='contact-title mb-4'>Quên mật khẩu</h3>
                    <form>
                        <div class="mb-3">
                            <label for="username" class="form-label">Tài khoản</label>
                            <input type="text" class="form-control" id="username" name="username" required />
                        </div>
                        <div>
                            <Link to="/login">Đăng nhập</Link>
                            <Link className='px-4' to="/signup">Đăng ký ngay</Link>
                        </div>
                        <button type="submit" class="btn btn-danger">Xác nhận</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ForgotPassword