import React from 'react';
import PostMomentForm from './components/PostMomentForm';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Post Your Moment</h1>
      </header>
      <main>
        <PostMomentForm />
      </main>
    </div>
  );
};

export default App;
