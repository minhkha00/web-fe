import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsCart, BsListUl, BsPersonCircle, BsSearch } from 'react-icons/bs'
const Header = () => {
    return (
        <>
            <header className="header-top-strip py-1">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className='text-white mb-0'>
                                Hỗ trợ khách hàng tận tâm
                            </p>
                        </div>
                        <div className="col-6">
                            <p className='text-end text-white mb-0'>
                                Hotline: <a className="text-white" href='tel:+84 1900989868'>+84 1900989868</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-2">
                            <div className="logo">
                                <Link><img src="https://viettelconstruction.com.vn/wp-content/uploads.bak/2023/01/2023_Logo-Header-Viettel-Construction.png"></img></Link>
                            </div>
                        </div>
                        <div className="col-5">
                            <div class="input-group mb-3">
                                <input type="text"
                                    class="form-control py-2"
                                    placeholder="Search product here ..."
                                    aria-label="Search product here ..."
                                    aria-describedby="basic-addon2" />
                                <span class="input-group-text p-3 text-white"
                                    id="basic-addon2"><BsSearch className="fs-6" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-end">
                                <div className='btn'>
                                    <Link to="/login" className="d-flex align-items-center gap-10 px-2">
                                        <BsPersonCircle className="icon" />
                                        <p className="mb-0">Log in <br /> My Account</p>
                                    </Link>
                                </div>
                                <div className='btn'>
                                    <Link className="d-flex align-items-center gap-10 px-2">
                                        <div className='position-relative'>
                                            <BsCart className="icon " />
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
                                        </div>

                                        <div className="d-flex flex-column ">

                                            <p className="mb-0">Cart</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-1">
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center gap-30'>
                                <div>
                                    <div class="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex alikn-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">


                                            <span><BsListUl className='icon' />Danh mục sản phẩm</span>

                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link className="dropdown-item text-white" to="/">Năng lượng mặt trời</Link></li>
                                            <li><Link className="dropdown-item text-white" to="/">Đồ gia dụng</Link></li>
                                            <li><Link className="dropdown-item text-white" to="/">ICT</Link></li>
                                            <li><Link className="dropdown-item text-white" to="/">Điện tử - Điện lạnh</Link></li>
                                            <li><Link className="dropdown-item text-white" to="/">Giải pháp doanh nghiệp</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15'>
                                        <NavLink to="/">Trang chủ</NavLink>
                                        <NavLink to="/store">Store</NavLink>
                                        <NavLink to="/news">Tin tức</NavLink>
                                        <NavLink to="/contact">Liên hệ</NavLink>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;