import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import BlogCardHorizontal from '../components/BlogCardHorizontal'
import { Link } from 'react-router-dom'

const SingleBlog = () => {
    return (
        <div className='blog-wrapper-1'>
            <Meta title='Tin tức' />
            <div className='container'>
                <BreadCrumb title='News' />
                <h2 class="text-uppercase text-center text-danger">Tin tức</h2>
                <div className='row justify-content-center'>
                    <div className='col-12 md-12'>
                        <div className='col'>
                            <h3 className='text-align-justify'>Cháy cửa hàng kinh doanh xe máy khiến 3 người trong 1 gia đình tử vong ở Hà Nội</h3>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div className='col'>
                            <h5>VOV.VN - Rạng sáng 19/7, một vụ cháy nghiêm trọng xảy ra tại cửa hàng kinh doanh xe máy ở huyện Hoài Đức (Hà Nội) khiến 3 người tử vong</h5>
                        </div>
                        <div className='col'>
                            <figure class="figure">
                                <img src="https://media.vov.vn/sites/default/files/styles/large/public/2023-07/chay_nha_1_0.jpg" class="figure-img img-fluid rounded" alt="..." />
                                <figcaption class="figure-caption text-center">Lực lượng chức năng lại hiện trường</figcaption>
                            </figure>
                        </div>
                        <div className='col'>
                            <p className='text-align-justify'>Ngay sau khi nhận tin vụ cháy, lãnh đạo Công an thành phố Hà Nội, Phòng Cảnh sát PCCC&CNCH, cùng lãnh đạo UBND huyện Hoài Đức, Công an huyện Hoài Đức, Cục cảnh sát PCCC&CNCH - Bộ Công an đã trực tiếp xuống hiện trường để chỉ đạo công tác chữa cháy, cứu nạn, cứu hộ.

                                Đến khoảng 3h2’ cùng ngày, đám cháy cơ bản được dập tắt. Lực lượng chữa cháy đã khống chế và bảo vệ không để cháy lan, cháy lớn ra các nhà dân liền kề.

                                Hậu quả, khiến 3 người chết (chồng: T.D.Q, sinh năm 1985; vợ: N.T.H, sinh năm 1990; con: T.N.L, sinh năm 2016). Cháy nhiều xe đạp, xe máy điện và đồ dùng gia đình.</p>
                        </div>
                        <Link to="/news">Quay lại trang trước</Link>
                        <div className='col'>
                        <h3 className='contact-title mb-4'>Tin tức liên quan</h3>
                            <div className='row row-cols-2'>
                                <div className='col'>
                                    <BlogCardHorizontal />
                                </div>
                                <div className='col'>
                                    <BlogCardHorizontal />
                                </div>
                                <div className='col'>
                                    <BlogCardHorizontal />
                                </div>
                                <div className='col'>
                                    <BlogCardHorizontal />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog