import React from 'react'
import { Carousel } from 'antd';
import blog1 from "../../assets/images/blog1.jpg"


const contentStyle = {
    height: '560px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

function MyBlogs() {
  return (
    <div className='my-blogs'>
        <Carousel autoplay>
            <div>
            <h3 style={contentStyle}>1</h3>
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    </div>
  )
}

export default MyBlogs
