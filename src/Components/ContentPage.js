import React from 'react';

const ContentPage = (props) => {
  const id = props.match.params.id; // obtinem id-ul din parametrii URL
  return (
    <div>
      <h1>Content Page</h1>
      <p>This is the content for id {id}</p>
    </div>
  );
};

export default ContentPage;
