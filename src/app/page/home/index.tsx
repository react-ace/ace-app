import React from 'react';
import { observer } from 'mobx-react';

import './scss/index.scss';
import IconSVG from '../../../../assets/icon.svg';

interface IProps {}
interface IState {}

const Home = (props: IProps, state: IState) => {
  return (
    <section className="home-page">
      <h1>Home Page</h1>
      <img width="200px" alt="icon" src={IconSVG} />
    </section>
  );
};

export default observer(Home);
