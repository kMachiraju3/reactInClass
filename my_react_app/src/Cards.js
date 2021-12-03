import React from "react";
import{ Button, Card, CardBody, CardText, CardTitle, Fade} from 'reactstrap';
import TextForCards from "./TextForCards";

const Cards = (props) =>{
    return(
        <>
        <Card key= "firstCard" classname = "display-3">
          <CardBody>
            <CardTitle>Card 01</CardTitle>
            <Button onClick= {()=> props.cardOneState()}> Button</Button>
            <Fade in = {props.fade1} classname= "my-2">
              {props.fade1 ? <CardText>
                <TextForCards cardNum={1} />
              </CardText> : null}
            </Fade>
          </CardBody>
        </Card>
        
         <Card classname = "display-3">
          <CardBody>
            <CardTitle>Card 02</CardTitle>
            <Button onClick= {()=> props.cardTwoState()}> Button</Button>
            <Fade in = {props.fade2} classname= "my-2">
              {props.fade2 ? <CardText>
              <TextForCards cardNum={2} />
              </CardText> : null}
            </Fade>
          </CardBody>
        </Card>

        <Card classname = "display-3">
          <CardBody>
            <CardTitle>Card 03</CardTitle>
            <Button onClick= {()=> props.cardThreeState()}> Button</Button>
            <Fade in = {props.fade3} classname= "my-2">
              {props.fade3 ?  <CardText>
              <TextForCards cardNum={3} />
              </CardText> : null}
            </Fade>
          </CardBody>
        </Card>

        <Card classname = "display-3">
          <CardBody>
            <CardTitle>Card 04</CardTitle>
            <Button onClick= {()=> props.cardFourState()}> Button</Button>
            <Fade in = {props.fade4} classname= "my-2">
              {props.fade4 ? <CardText>
              <TextForCards cardNum={4} />
              </CardText> : null}
            </Fade>
          </CardBody>
        </Card>

        <Card classname = "display-3">
          <CardBody>
            <CardTitle>Card 05</CardTitle>
            <Button onClick= {()=> props.cardFiveState()}> Button</Button>
            <Fade in = {props.fade5} classname= "my-2">
              {props.fade5 ? <CardText>
              <TextForCards cardNum={5} />
              </CardText> : null}
            </Fade>
          </CardBody>
        </Card>

        </>
    )
}
export default Cards;