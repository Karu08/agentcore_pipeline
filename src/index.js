import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Hello from S3 + CloudFront!</h1>
      <p>This page is deployed via GitHub Actions.</p>
    </div>
  );
}and

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
