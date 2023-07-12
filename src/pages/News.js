import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import BlogCardHorizontal from '../components/BlogCardHorizontal'
import Meta from '../components/Meta'

const News = () => {
    return (
        <div className='news-wrapper-1'>
            <Meta title='Tin tức' />
            <div className='container-xxl'>
            <BreadCrumb title='News' />
                <h2 class="text-uppercase text-center text-danger">Tin tức</h2>
                <div className='row'>
                    <div className='col-6'>
                        <BlogCardHorizontal />
                        <BlogCardHorizontal />
                        <BlogCardHorizontal />
                    </div>
                    <div className='col-6'>
                        <BlogCardHorizontal />
                        <BlogCardHorizontal />
                        <BlogCardHorizontal />
                    </div>
                </div>
                <div className='row'>
                    <div className='page-navigation'>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Trang trước</a>
                                </li>
                                <li class="page-item"><a class="page-link text-danger" href="#">1</a></li>
                                <li class="page-item"><a class="page-link text-danger" href="#">2</a></li>
                                <li class="page-item"><a class="page-link text-danger" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link text-danger" href="#">Trang tiếp</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News