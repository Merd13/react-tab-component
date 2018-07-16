/**
 * Created by Merd Mansourifar on 7/16/18.
 */

import styled from 'styled-components';

export const TabGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  width: 85%;
  vertical-align: middle;
  margin-left: auto;
  margin-right: auto;
  `;


export const TabTitle = styled.div`
  display: block;
  text-align: center;
  width: 20%;
  float: left;
  height: 10%;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 2px;
  padding-left: 2px;
  background: #fffdf6;t
  // margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  `;

export const TitleText = styled.label`
  color: #c00;
 `;

export const BodyPanel = styled.div`
  text-align: center;
  width: 100%;
  // height: 40%;
  padding: 30px 20px;
  background: #fffdf6;
  vertical-align: middle;
  margin-left: auto;
  margin-right: auto;

  `;


export const ContainerRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  `;

export const ContainerColumn = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-end;
  `;
