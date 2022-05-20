import React, { Fragment } from "react";
import { createRoot, Root } from "react-dom/client";

import { Button } from "./button";

type AppProps = {
  name: string;
};

const App = ({ name }: AppProps) => {
  return (
    <Fragment>
      <h1>{name}</h1>
      <Button>World</Button>
    </Fragment>
  );
};

const root: NonNullable<Root> = createRoot(
  document.getElementById("root") as Element
);
root.render(<App name="hello" />);
