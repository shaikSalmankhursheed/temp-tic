import logo from "./logo.svg";

import { Button, Col, Row, Container, Card, CardBody } from "reactstrap";
import Icon from "./components/Icon/Icon";
import { lazy, useEffect, useState, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import LongText from "./components/LongText";

const LongText = lazy(() => import("./components/LongText"));

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [gridArray, SetGridArray] = useState(itemArray);
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setWinMessage("");
    setIsCross(false);
    SetGridArray(itemArray);
  };

  const checkWinner = () => {
    // 0 1 2 case
    if (
      gridArray[0] === gridArray[1] &&
      gridArray[0] === gridArray[2] &&
      gridArray[0] !== "empty"
    ) {
      setWinMessage(`${gridArray[0]} won`);
    } else if (
      gridArray[3] === gridArray[4] &&
      gridArray[3] === gridArray[5] &&
      gridArray[3] !== "empty"
    ) {
      setWinMessage(`${gridArray[3]} won`);
    } else if (
      gridArray[6] === gridArray[7] &&
      gridArray[6] === gridArray[8] &&
      gridArray[6] !== "empty"
    ) {
      setWinMessage(`${gridArray[6]} won`);
    } else if (
      gridArray[0] === gridArray[4] &&
      gridArray[0] === gridArray[8] &&
      gridArray[0] !== "empty"
    ) {
      setWinMessage(`${gridArray[0]} won`);
    } else if (
      gridArray[2] === gridArray[4] &&
      gridArray[2] === gridArray[6] &&
      gridArray[2] !== "empty"
    ) {
      setWinMessage(`${gridArray[2]} won`);
    } else if (
      gridArray[0] === gridArray[3] &&
      gridArray[0] === gridArray[6] &&
      gridArray[0] !== "empty"
    ) {
      setWinMessage(`${gridArray[0]} won`);
    } else if (
      gridArray[1] === gridArray[4] &&
      gridArray[1] === gridArray[7] &&
      gridArray[1] !== "empty"
    ) {
      setWinMessage(`${gridArray[1]} won`);
    } else if (
      gridArray[2] === gridArray[8] &&
      gridArray[2] === gridArray[5] &&
      gridArray[2] !== "empty"
    ) {
      setWinMessage(`${gridArray[2]} won`);
    }
  };

  const changeItem = (itemNumber) => {
    if (gridArray[itemNumber] !== "empty") {
    }

    if (gridArray[itemNumber] === "empty") {
      setIsCross(!isCross);
      let newArray = [...gridArray];
      newArray[itemNumber] = isCross ? "cross" : "circle";

      SetGridArray(newArray);
    } else {
      toast("item already filled, click on empty item", {
        type: "error",
        autoClose: 1000,
      });
    }

    checkWinner();
  };

  return (
    <Container>
      <ToastContainer position="top-center" />
      <Row>
        <Col>
          {winMessage ? (
            <div className="text-center">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="success" onClick={reloadGame}>
                Reload the game
              </Button>
            </div>
          ) : (
            <h1 className="text-warning text-center">
              {isCross ? "Cross" : "Cricle"} turn to play
            </h1>
          )}
        </Col>
        <div className="grid">
          {gridArray.map((item, index) => (
            <Card color="info" onClick={() => changeItem(index)}>
              <CardBody className="box">
                <Icon name={item} />
              </CardBody>
            </Card>
          ))}
        </div>
      </Row>
      <h1>
        <Suspense
          fallback={
            <h1>
              Loading............................................................
            </h1>
          }
        >
          <LongText />
        </Suspense>
      </h1>
    </Container>
  );
};

export default App;
