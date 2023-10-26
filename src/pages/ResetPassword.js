import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
const ResetPassword = () => {
  return (
    <div>
    <Meta title='Tài khoản' />
    <div className='account-wrapper-login'>
        <BreadCrumb title='Thay đổi mật khẩu' />
        <div class="container">
            <div class="row justify-content-center align-items-center py-4">
                <div class="col-lg-6">
                    <img src="https://viettelconstruction.com.vn/wp-content/uploads.bak/2021/07/Viettel-Construction-Giai-phap-tich-hop.jpg" class="img-fluid" />
                </div>
                <div class="col-lg-6" >
                    <h3 className='contact-title mb-4'>Thay đổi mật khẩu</h3>
                    <form>
                        <div class="mb-3">
                            <label for="username" class="form-label">Mật khẩu mới</label>
                            <input type="password" class="form-control" id="password" name="password" required />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Nhập lại mật khẩu</label>
                            <input type="password" class="form-control" id="password" name="password" required />
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

export default ResetPassword