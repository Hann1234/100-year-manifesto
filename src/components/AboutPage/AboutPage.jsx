import React from 'react';
import Manifesto from '../Manifesto/Manifesto';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <Manifesto/>
    </div>
  );
}

export default AboutPage;
