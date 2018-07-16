/**
 * Created by Merd Mansourifar on 7/16/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {ContainerRow, Input} from "../styled/Input.styled";

export const PostInput = props => {
  console.log('check props', props);
  return(
    <ContainerRow>
      <Input placeholder={props.postContext} onChange={e => props.setPost(e.target.value)} />
    </ContainerRow>
  )};


PostInput.defaultProps = {
  postContext: '',
};

PostInput.propTypes = {
  postContext: PropTypes.string,
  setPost: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes(PostInput.propTypes, PostInput.props, 'prop', 'PostInput');
