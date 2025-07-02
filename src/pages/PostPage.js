import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'

const PostPage = () => {
    
    const [post, setPost] = useState({
            title: '',
            authos: '',
            image: '',
            content: ''
        })
    const {id} = useParams() //this will allow us to reach out to the API and grab the 'id' object of a page

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`http://localhost:4343/posts/${id}`)
            setPost(res.data)
        }
        fetchPost()
    }, [id]) //this is the condition that lets useEffect know that if the if is defferent from what was called first

    return(
        <Container ClassName= 'mt-4'>
            <Card>
                <div style={{maxHeight: '500px', overflow: 'hidden'}}>
                    <Card.Img className='img-fluid' variant='top' src={post.image} alt={post.title}/>
                </div>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>By: {post.author}</Card.Subtitle>
                <Card.Text>{post.content}</Card.Text>
            </Card>
        </Container>
    )
}

export default PostPage
    