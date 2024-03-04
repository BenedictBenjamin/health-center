import HeaderComponent from '@/components/common/HeaderComponent';
import Link from 'next/link';
import React from 'react';
import style from '../../styles/header.module.scss';
import { SlEarphones, SlLocationPin } from 'react-icons/sl';

const Feedback = (): JSX.Element => {
  return (
    <>
      <HeaderComponent
        rightElements={[
          <Link key="feedback" href="/feedback" className={style.box}>
            <SlLocationPin />
          </Link>,
          <Link key="about" href="/about" className={style.box}>
            <SlEarphones />
          </Link>,
        ]}
      />
      <main> 여긴 피드벡입니다 </main>
    </>
  );
};

export default Feedback;
