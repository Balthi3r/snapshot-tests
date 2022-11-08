import Card from 'react-bootstrap/Card'
import dannytorbjorn from 'src\component\dannytorbjorn.png'
function GitHubCard(){
    return(
        <Card style={{ width:'18rem'}}>
            <Card.Img src={dannytorbjorn} variant="top"/>
            <Card.Body>
                <Card.Title>dannytorbjorn</Card.Title>
                <Card.Text>
                    Character
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GitHubCard