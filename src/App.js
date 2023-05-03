import React, { useState } from 'react';
import Poll from './components/Poll';
import Result from './components/Result';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = (props) => {
  const [pollResults, setPollResults] = useState({
    result1a: 0,
    result1b: 0,
    result2a: 0,
    result2b: 0,
    result3a: 0,
    result3b: 0,
  });
  const handlePollSubmit = (answers) => {
    setPollResults((prevRes) => ({
      ...prevRes,
      result1a: prevRes.result1a + (answers.item1a === 1 ? 1 : 0),
      result2a: prevRes.result2a + (answers.item2a === 1 ? 1 : 0),
      result3a: prevRes.result3a + (answers.item3a === 1 ? 1 : 0),
      result1b: prevRes.result1b + (answers.item1b === 1 ? 1 : 0),
      result2b: prevRes.result2b + (answers.item2b === 1 ? 1 : 0),
      result3b: prevRes.result3b + (answers.item3b === 1 ? 1 : 0),
    }));
  };
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Poll onPollSubmit={handlePollSubmit} />} />
          <Route path="/result" element={<Result pollResults={pollResults} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
