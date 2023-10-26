import React from 'react'
import { Link } from 'react-router-dom'
const BlogCardHorizontal = () => {
    return (
        <div class="card mb-3 mw-500">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/360104623_744040277728057_1347080550358950789_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=R4L04ea-Cg0AX8ZIJ8x&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfDWZ63jvg7aWssEio8SGGWjN5vJTCvuBtbyNIQ-oTfCkQ&oe=64BB72B2" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small><Link className='text-end px-4' to="/news/:id">Đọc thêm</Link></p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCardHorizontal