import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className='text-2xl text-center text-white-500'>*****This is contact page*****</h1>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <input type="text" placeholder="name" class="input input-bordered mb-3" />
                                <input type="text" placeholder="email" class="input input-bordered mb-3" />
                                <input type="number" placeholder="number" class="input input-bordered mb-3" />
                                <input type="text" placeholder="password" class="input input-bordered mb-3" />

                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;