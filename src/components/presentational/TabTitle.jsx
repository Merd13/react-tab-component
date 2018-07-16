/**
 * Created by Merd Mansourifar on 7/16/18.
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import {TabTitle, TitleText} from "../styled/Tab.styles";



const TabHeader = () => (
  <TabTitle>
    <TitleText>
      <FontAwesomeIcon icon={faFileAlt} /> Post
    </TitleText>

  </TabTitle>);

export default TabHeader;
