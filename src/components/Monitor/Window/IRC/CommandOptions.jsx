import React, { useEffect, useState } from "react";
import "./IRC.css";
import Commands from "../../../../Data/Commands.json";
import Command from "./Command";
import { Container } from "react-bootstrap";

export default function CommandOptions({ input }) {
  const [commandsArray, setCommandsArray] = useState([]);

  useEffect(() => {
    setCommandsArray(
      Commands.filter(
        (command) =>
          command.slice(0, input.length) === input && input.length !== 0
      )
    );
    return () => {
      setCommandsArray([]);
    };
  }, [input]);

  return (
    <Container className="commandOptions">
      {commandsArray.map((command) => {
        return <Command command={command} />;
      })}
    </Container>
  );
}
