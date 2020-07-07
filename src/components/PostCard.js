import React from "react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'


const PostCard = (props) => (
    <div>
        <Card style={{ width: '28rem' }} border="info">
            <Card.Header> {props.postedOn} </Card.Header>
            <Card.Body>

                <Card.Title className="title-color">{props.postTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> Read it to believe it</Card.Subtitle>
                <Card.Text>
                    Given her age, retired educator Karen Shoemaker feared the worst when told,
                    in mid-March, that she had been diagnosed with COVID-19. “You’re thinking,
                    ‘What chance does a 74-year-old grandma have?’” Ms. Shoemaker recalled in an interview,
                    reflecting on her harrowing experience. “You’re thinking this could turn on a dime.”
            </Card.Text>
                <Card.Link href="#">Read More</Card.Link>
            </Card.Body>

            <Card.Footer>
                <small className="text-muted"><i> {props.postedBy} </i> </small>
            </Card.Footer>
        </Card>

    </div >
);



export default PostCard;