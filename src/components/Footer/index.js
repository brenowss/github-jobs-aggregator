import React from "react";
import { Layout } from "antd";

import './styles.css';

const { Footer } = Layout;

function App(props) {
  return (
    <Footer style={props.style}>
      <p>© 2020 Breno Fiorese All rights reserved.</p>
    </Footer>
  );
}

export default App;
