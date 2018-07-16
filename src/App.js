import React from 'react';
import {TabGroup} from "./components/styled/Tab.styles";
import TabHeader from "./components/presentational/TabTitle";
import {TabBody} from "./components/presentational/TabBody";


const App  = () =>
  (
    <TabGroup>
      <TabHeader />
      <TabBody />
    </TabGroup>
    );

export default App;
