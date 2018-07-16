/**
 * Created by Merd Mansourifar on 7/16/18.
 */

import React from 'react';
import PostInputContainer from '../container/PostInputContainer.jsx';
import AddButtonContainer from '../container/AddButtonContainer.jsx';
import {BodyPanel, ContainerColumn, ContainerRow} from "../styled/Tab.styles";


export const TabBody = () => (
  <BodyPanel>
    <ContainerRow>
      <PostInputContainer />
    </ContainerRow>
    {/*<ContainerColumn>*/}
      {/*<AddButtonContainer />*/}
    {/*</ContainerColumn>*/}
  </BodyPanel>

);
