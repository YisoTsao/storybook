import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import { Step, BaseProgress } from '../components';

const CkEditor = dynamic(() => import('../components/Ckeditor'), {
  ssr: false,
});

const Home = () => {
  const [content, setContent] = useState('');

  const fakeStep = [{ status: true }, { status: true }, { status: false }, { status: false }];

  return (
    <div className="p-20">
      <Step className="p-8" stepList={fakeStep} />
      <BaseProgress type="step" value="28" max="100" size="large" />
      <CkEditor content={content} setContent={setContent} />
    </div>
  );
};

export default Home;
