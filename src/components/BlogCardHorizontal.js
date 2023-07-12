import React from 'react'

const BlogCardHorizontal = () => {
  return (
    <div class="card mb-3 mw-500">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/349095885_1342670073129237_5574704245526854530_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=ItdIjEbFqNcAX-42p2L&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBeyd-faWDeuBQXEXNcjrrfVaZwu8JheI1hxO5Lu7iqmw&oe=649704E4" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
</div>
  )
}

export default BlogCardHorizontal