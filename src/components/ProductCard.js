import React from 'react'
import ReactStars from "react-rating-stars-component";
const ProductCard = () => {
    return (
        <div class="col">
            <div class="product-card card">
                <img src="https://iweb.tatthanh.com.vn/pic/9/thumb/large/product/0ae3487b8c4b79d2abfaa47b3626f5f2_04e66ad8d45741a1a2616ba0a30bdba4.jpeg" class="card-img-top" alt="..." />
                <div class="product-card-body card-body">
                    <h6 class="card-title">Camera Nhận Diện Khuôn Mặt HANET AI</h6>
                    <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={24}
                        value={3}
                        activeColor="#ffd700"
                    />
                    <p class="card-text text-primary">100.000đ</p>
                    <a className='read-more-detail text-danger mb-10'>Xem chi tiết  </a>
                    <button class="btn-buy">Mua ngay</button>
                </div>
            </div>
        </div>
        // <div className='col-3'>
        //     <div className='product-card'>
        //         <div className='product-image'>
        //             <img src="https://iweb.tatthanh.com.vn/pic/9/thumb/large/product/0ae3487b8c4b79d2abfaa47b3626f5f2_04e66ad8d45741a1a2616ba0a30bdba4.jpeg" class="card-img-top" alt="product image" />
        //         </div>
        //         <div className='product-details'>

        //         </div>
        //     </div>
        // </div>
    )
}

export default ProductCard