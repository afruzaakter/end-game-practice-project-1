import React from 'react';

const Blog = () => {
    return (
        <div className='p-10'>
            <h2 className='text-3xl text-center'>Welcome to Blog Page</h2>
            <p className='mt-5'>
                <h2 className='text-2xl'>Q1. what is Node Js?</h2>
                Ans: Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
            </p>
            <p className='mt-2'>
                <h2 className='text-2xl'>Q2. what is react js?</h2>
                Ans: React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.
                last update.
            </p>
        </div>
    );
};

export default Blog;