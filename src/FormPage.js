import React from 'react';

function FormPage() {
  return (
    <div>
      <h1>Form Page</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="4"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
