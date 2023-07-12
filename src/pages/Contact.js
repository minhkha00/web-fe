import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {BsInfoCircle} from 'react-icons/bs'

const Contact = () => {
  return (
    <div>
      <Meta title='Liên hệ' />
      <div className='contact-wrapper'>
        <div className='container-xxl'>
          <BreadCrumb title='Contact' />
          <h2 class="text-uppercase text-center text-danger">Liên hệ</h2>

          <div className='row'>
            <div className='col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d384.3228800195907!2d106.33176013987533!3d9.92767394083767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0175400582c1d%3A0xb448303a26eaa53e!2sChi%20Nh%C3%A1nh%20Viettel%20Tr%C3%A0%20Vinh!5e0!3m2!1svi!2s!4v1687246845734!5m2!1svi!2s" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Thông tin liên hệ</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input title='text' className='form-control' placeholder='Họ và tên'>
                      </input>
                    </div>
                    <div>
                      <input title='email' className='form-control' placeholder='Địa chỉ Email'>
                      </input>
                    </div>
                    <div>
                      <input title='tel' className='form-control' placeholder='Số điện thoại'>
                      </input>
                    </div>
                    <div>
                      <textarea className='form-control w-100' name='' id='' cols={30} rows={4} placeholder='Nội dung ...'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Gửi thông tin</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Liên hệ với chúng tôi</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5'/>
                        <address className='mb-0'>156 Nguyễn Đáng, Khóm 6, Phường 7, TP Trà Vinh, Tỉnh Trà Vinh</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5'/>
                        <a href='tel:+84 0986842611 '>0986.842.611 Mr.Phong</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5'/>
                        <a href='mailto:congtrinhviettel@viettel.com.vn'>congtrinhviettel@viettel.com.vn</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BsInfoCircle className='fs-5'/>
                        <p className='mb-0'>Thứ 2 - Thứ 7 8:00 AM - 18:00 PM </p>
                      </li>

                    </ul>
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

export default Contact;