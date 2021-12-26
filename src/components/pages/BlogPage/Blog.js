import React, { useEffect, useState } from "react";
import './Blog.css'


function GetData() {
    const [initialState, setInitialState] = useState([])

    useEffect(() => {
        fetch("/api").then(res => {
                if(res.ok){
                    return res.json()
                }
            }).then(jsonResponse => setInitialState(jsonResponse.articles))
    },[])

    return(<div className='blog-wrapper'>
        {initialState.length > 0 && initialState.map(e => (
            <div className='test-object'>
                <div>{e.message}</div>
                <br/>
                <br/>
                <div>{e.content}</div>
                <br/>
                <br/>
                <div>Author: {e.author}</div>
            </div>
        ))}
    </div>
    )}

function Blog() {

    const test = [
        {
            message: "Hello from the local const.",
            content: "A lovely piece of content, presenting the theme to the user",
            author: "The author's name, cool!"
        },
        {
            message: "Hello from the local const, this is a second message!",
            content: "A lovely piece of content, presenting the second theme to the user",
            author: "The second author's name, cool!"
        }
    ]


    return(
        <>
            <div className='site-wrapper'>
                <GetData/>
            </div>
        </>
    )
};

export default Blog
