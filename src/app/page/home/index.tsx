import React from 'react';
import { observer } from 'mobx-react';

import '@sub/scss/index.scss';
import './scss/index.scss';
import IconSVG from '@sub/static/image/icon.svg';
import IconImg from '@sub/static/image/icon.png';

interface IProps {}
interface IState {}

const Home = (props: IProps, state: IState) => {
  return (
    <section className="home-page">
      <h1>Home Page</h1>
      <p>
        <img width="200px" alt="icon" src={IconSVG} />
      </p>
      <p>
        <img width="200px" alt="icon" src={IconImg} />
      </p>
    </section>
  );
};

export default observer(Home);
