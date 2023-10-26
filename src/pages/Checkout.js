import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";


const Checkout = () => {
    return (
        <>
            <div className="container-xxl">
                <div className="checkout-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">Viettel Construction</h3>
                                <nav
                                    style={{ "--bs-breadcrumb-divider": ">" }}
                                    aria-label="breadcrumb"
                                >
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link className="text-dark total-price" to="/cart">
                                                Giỏ hàng
                                            </Link>
                                        </li>
                                        &nbsp; /&nbsp;
                                        <li
                                            className="breadcrumb-ite total-price active"
                                            aria-current="page"
                                        >
                                            Thông tin
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item total-price active">
                                            Vận chuyển
                                        </li>
                                        &nbsp; /
                                        <li
                                            className="breadcrumb-item total-price active"
                                            aria-current="page"
                                        >
                                            Thanh toán
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className="title total">Thông tin liên hệ</h4>
                                <p className="user-details total">
                                    Triệu Minh Kha (trieuminhkha8@gmail.com)
                                </p>
                                <h4 className="mb-3">Địa chỉ giao hàng</h4>
                                <form
                                    action=""
                                    className="d-flex gap-15 flex-wrap justify-content-between"
                                >
                                    {/* <div className="w-100">
                                        <select name="" className="form-control form-select" id="">
                                            <option value="" selected disabled>
                                                Chọn thành phố
                                            </option>
                                        </select>
                                    </div> */}
                                    <div className="flex-grow-1">
                                        <input
                                            type="text"
                                            placeholder="Họ"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <input
                                            type="text"
                                            placeholder="Tên"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <input
                                            type="text"
                                            placeholder="Địa chỉ"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <input
                                            type="text"
                                            placeholder="Thành Phố"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <select name="" className="form-control form-select" id="">
                                            <option value="" selected disabled>
                                                Chọn quận/huyện
                                            </option>
                                        </select>
                                    </div>
                                    {/* <div className="flex-grow-1">
                                        <input
                                            type="text"
                                            placeholder="Mã bưu chính"
                                            className="form-control"
                                        />
                                    </div> */}
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to="/cart" className="text-dark">
                                                <BiArrowBack className="me-2" />
                                                Quay lại giỏ hàng
                                            </Link>
                                            <Link to="/cart" className="button">
                                                Tiếp tục
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="border-bottom py-4">
                                <div className="d-flex gap-10 mb-2 align-align-items-center">
                                    <div className="w-75 d-flex gap-10">
                                        <div className="w-25 position-relative">
                                            <span
                                                style={{ top: "-10px", right: "2px" }}
                                                className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                                            >
                                                1
                                            </span>
                                            <img className="img-fluid" src="https://iweb.tatthanh.com.vn/pic/9/thumb/large/product/0ae3487b8c4b79d2abfaa47b3626f5f2_04e66ad8d45741a1a2616ba0a30bdba4.jpeg" alt="product" />
                                        </div>
                                        <div>
                                            <h5 className="total-price">Camera Nhận Diện Khuôn Mặt HANET AI</h5>
                                            {/* <p className="total-price">s / #agfgfd</p> */}
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="total">1.500.000 VNĐ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom py-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="total">Thành tiền</p>
                                    <p className="total-price">1.500.000 VNĐ</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-0 total">Phí vận chuyển</p>
                                    <p className="mb-0 total-price">15.000 VNĐ</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
                                <h4 className="total">Tổng cộng</h4>
                                <h5 className="total-price">1.515.000 VNĐ</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;