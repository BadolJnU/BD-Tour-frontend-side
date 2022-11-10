import React from 'react';

const Blog = () => {
    return (
        <div className='mx-24 my-10'>
            <h2 className='text-4xl text-center font-bold my-5'>Some Important Topics</h2>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p> SQL databases use structured query language and have a pre-defined schema for defining and manipulating data. SQL is one of the most versatile and widely used query languages available, making it a safe choice for many use cases. It’s perfect for complex queries. However, SQL can be too restrictive. You have to use predefined schemas to determine your data structure before you can work with it. All of your data must follow the same structure. This process requires significant upfront preparation. If you ever wanted to change your data structure, it would be difficult and disruptive to your whole system. NoSQL databases have dynamic schemas for unstructured data, and the data is stored in many ways. You can use column-oriented, document-oriented, graph-based, or KeyValue store for your data.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is JWT? How does it work?
                </div>
                <div className="collapse-content">
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between Javascript and NodeJs
                </div>
                <div className="collapse-content">
                    <p>JavaScript is a popular programming language utilized by nearly every online application developer. Finding a resource on the subject to work on JavaScript and conduct critical development is straightforward. Although Node JS is a JavaScript framework extension, it also has other unnamed features, such as a non-blocking running control system, essential for attaining business objectives. It may also be visible to a user who has signed in from a different approach for security reasons. When it comes to a comparison of nest js vs. express, both are node js components.  </p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does NodeJs handle multiple request at the same time
                </div>
                <div className="collapse-content">
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

 </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;