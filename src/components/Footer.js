import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsEnvelopeAtFill, BsFacebook, BsFillGeoAltFill, BsMailbox, BsTelephoneFill, BsYoutube } from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row justify-content-center'>
            <div className='col-6'>
              <div className='logo-footer'>
                <img src='https://viettelconstruction.com.vn/wp-content/uploads.bak/2021/04/Layer-1.png'></img>
              </div>
              <div className='footer-content-right'>
                <p className='footer-text text-white'>
                  Được thành lập từ năm 1995, Tổng Công ty CP Công trình Viettel là đơn vị cung cấp dịch vụ trên nền tảng kỹ thuật hàng đầu Việt Nam, trực thuộc Tập đoàn Công nghiệp – Viễn thông Quân đội. 05 lĩnh vực kinh doanh chính bao gồm: Đầu tư Hạ tầng, Xây dựng, Công nghệ thông tin, Giải pháp Tích hợp và Vận hành Khai thác.
                </p>
                <div className='container-xxl'>
                  <div className='row'>
                    <div className='image-footer-left col-5'>
                      <img src='https://viettelconstruction.com.vn/wp-content/uploads/2021/10/20150827110756-dathongbao.png'></img>
                    </div>
                    <div className='image-footer-right col-5'>
                      <img src='https://viettelconstruction.com.vn/wp-content/uploads.bak/2022/10/Banner_CTTDT_BQP1.jpg'></img>
                    </div>
                  </div>
                </div>
                <p className='footer-text text-white'>
                  Mã số doanh nghiệp: 0104753865 do Sở Kế hoạch và Đầu tư thành phố Hà Nội cấp lần đầu ngày 09/06/2010
                </p>
                
              </div>
            </div>
            <div className='col-5'>
              <div className='footer-content-left'>
                <h4 className='text-white'>
                  Chia sẻ mạng xã hội
                </h4>
                <p className='footer-text text-white'>
                  <BsFillGeoAltFill />156 Nguyễn Đáng, Khóm 6, Phường 7, TP Trà Vinh, Tỉnh Trà Vinh
                </p>
                <p className='footer-text text-white'>
                  <BsTelephoneFill /><a className="text-white" href='tel:+84 1900989868'>+84 1900.989.868(Hỗ trợ thông tin sản phẩm/ dịch vụ)</a>
                </p>
                <p className='footer-text text-white'>
                  <BsTelephoneFill /><a className="text-white" href='tel:+84 0986842611'>+84 0986.842.611 Mr.Phong (Hỗ trợ tư vấn sản phẩm, dịch vụ)</a>
                </p>
                <p className='footer-text text-white'>
                  <BsEnvelopeAtFill />congtrinhviettel@viettel.com.vn
                </p>
                <p className='footer-text text-white'>
                  <a className='text-white' href='https://www.youtube.com/channel/UCpvmtFWJFjz1COSzJhIKMMw'><BsYoutube /></a>
                </p>
                <p className='footer-text text-white'>
                  <a className='text-white' href='https://www.facebook.com/ViettelConstructionTraVinh/'><BsFacebook /></a>
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                Copyright &copy; {new Date().getFullYear()} Trieu Minh Kha
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;