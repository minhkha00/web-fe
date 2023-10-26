import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";


const Cart = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <BreadCrumb title="Cart" />
            <div className="container-xxl">
                <div class1="cart-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                <h4 className="cart-col-1">Sản phẩm</h4>
                                <h4 className="cart-col-2">Giá</h4>
                                <h4 className="cart-col-3">Số lượng</h4>
                                <h4 className="cart-col-4">Tổng</h4>
                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img src="https://iweb.tatthanh.com.vn/pic/9/thumb/large/product/0ae3487b8c4b79d2abfaa47b3626f5f2_04e66ad8d45741a1a2616ba0a30bdba4.jpeg" className="img-fluid" alt="product image" />
                                    </div>
                                    <div className="w-75">
                                        <p>Camera Nhận Diện Khuôn Mặt HANET AI</p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">1.500.000 VNĐ</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div>
                                        <input
                                            className="form-control"
                                            type="number"
                                            name=""
                                            min={1}
                                            max={10}
                                            id=""
                                        />
                                    </div>
                                    <div>
                                        <AiFillDelete className="text-danger " />
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">1.500.000 VNĐ</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-2 mt-4">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <Link to="/product" className="button">
                                    Tiếp tục mua hàng
                                </Link>
                                <div className="d-flex flex-column align-items-end">
                                    <h4>Tổng đơn hàng: 1.500.000 VNĐ</h4>
                                    <Link to="/checkout" className="button">
                                        Thanh toán
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;