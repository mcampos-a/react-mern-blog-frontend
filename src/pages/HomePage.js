import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Button, Container, Row, Col, Container } from 'react-bootstrap'

const HomePage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`http://localhost:4343/posts`)
            setPosts(res.data)
        }
        fetchPosts()
    },[]) //leaving the dependency for useEffect empty ensures that it only gets the posts once the page loads and not again once posts get deleted

    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:4343/posts/${id}`) //remove item from DB
            setPosts(posts.filter((post) => post._id !== id)) //remove item from state, loops at the state vairbale array and if looks for the id being deleted and if it finds one in the array it filters it out
        } catch (error) {
            console.error('Error deleting posts', error)
        }
    }

    return(
        <Container>
            <Row>
                {posts.map((post)=> {
                    <Col md={4} className='mb-4' key={post._id}>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant='top' src={post.image} alt={post.title} />
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.author}</Card.Text>
                                <Link to={`/posts/${posts._id}}`}>
                                    <Button variant='primary'className='mr-2'>Read More</Button>
                                </Link>
                                    <Button variant='danger' onClick={()=> handleDelete(post._id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </Container>
    )
}

export default HomePage