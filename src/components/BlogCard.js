import React from "react";

const BlogCard = () => {
    return (
        <div className="col">
            <div class="blog-card card h-100">
                  <img src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/332774471_922357788913685_3163075492774981310_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=1UBza5i0e58AX9IKxVh&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfAIKcmxD8oR_ErGo3OWS-l3SvgZpvpr9mnEIjh8N3qOSw&oe=649572A2" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <small class="text-muted">Last updated 3 mins ago</small>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" class="btn btn-danger">Đọc thêm</a>
                  </div>
                </div>
        </div>
    );
};
export default BlogCard;