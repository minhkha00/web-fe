import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { BsInfoCircle } from 'react-icons/bs'

const Login = () => {
    return (
        <div>
            <Meta title='Tài khoản' />
            <div className='account-wrapper-login'>
                <BreadCrumb title='Tài khoản' />
                <div className='container-xxl'>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://www.bootstrapdash.com/demo/login-template-free-2/assets/images/login.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                {/* <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                <div className='contact-inner-wrapper d-flex justify-content-between'>
                                    <div>
                                        <h3 className='contact-title mb-4'>Thông tin liên hệ</h3>
                                        <form action='' className='d-flex flex-column gap-15'>
                                            <div>
                                                <input title='email' className='form-control' placeholder='Email'>
                                                </input>
                                            </div>
                                            <div>
                                                <input title='password' className='form-control' placeholder='*******'>
                                                </input>
                                            </div>
                                                                                        <div>
                                                <button className='button border-0'>Đăng nhập</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
</div>
            )
}

            export default Login