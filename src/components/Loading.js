import React from 'react';

const Loading = (props) => {
  if (!props.loading) return null;

  return (
    <div className="z-50 bg-red-darker fixed pin flex justify-center items-center">
      <img className="animated bounceIn infinite" src={require('../images/pizzaIcon.png')} alt="pizzaIcon" width={80} height={80} />
    </div>
  )
};

export default Loading;