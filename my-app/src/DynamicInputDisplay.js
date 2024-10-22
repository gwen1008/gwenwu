// import React, { useState } from 'react';
// 
// const DynamicInputDisplay = () => {
  // const [name, setName] = useState('');
  // const [message, setMessage] = useState('');
// 
  // return (
    // <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {/* <h1 className="text-2xl font-bold mb-4">輸入</h1> */}
{/*        */}
      {/* <div className="mb-4"> */}
        {/* <label htmlFor="name" className="block mb-2 font-semibold">姓名：<br /></label> */}
        {/* <input */}
          // type="text"
          // id="name"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          // className="w-full px-3 py-2 border rounded-md"
          // placeholder="請輸入您的姓名"
        // />
      {/* </div> */}
{/*  */}
      {/* <div className="mb-4"> */}
        {/* <label htmlFor="message" className="block mb-2 font-semibold"><br />留言：<br /></label> */}
        {/* <textarea */}
          // id="message"
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
          // className="w-full px-3 py-2 border rounded-md"
          // placeholder="請輸入您的留言"
          // rows="3"
        // ></textarea>
      {/* </div> */}
{/*  */}
      {/* <div className="mt-6 p-4 bg-gray-100 rounded-md"> */}
        {/* <h2 className="text-xl font-semibold mb-2">輸出結果：</h2> */}
        {/* <p><strong>姓名：</strong> {name || '（尚未輸入）'}</p> */}
        {/* <p><strong>留言：</strong> {message || '（尚未輸入）'}</p> */}
      {/* </div> */}
    {/* </div> */}
  // );
// };
// 
// export default DynamicInputDisplay;
// 

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [nickname, setNickname] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [answer, setAnswer] = useState([]);
  const [history, setHistory] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  // 產生 4 個不重複的隨機數字
  const generateAnswer = () => {
    const digits = Array.from({ length: 10 }, (_, i) => i); // [0, 1, ..., 9]
    const randomAnswer = [];
    while (randomAnswer.length < 4) {
      const index = Math.floor(Math.random() * digits.length);
      randomAnswer.push(digits.splice(index, 1)[0]);
    }
    setAnswer(randomAnswer);
  };

  // 初始化遊戲
  useEffect(() => {
    generateAnswer();
  }, []);

  const handleNicknameSubmit = (e) => {
    e.preventDefault();
    setGameStarted(true); // 遊戲開始
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const calculateResult = (guess) => {
    let A = 0;
    let B = 0;

    guess.split('').forEach((num, index) => {
      const digit = parseInt(num, 10);
      if (digit === answer[index]) {
        A++;
      } else if (answer.includes(digit)) {
        B++;
      }
    });

    return `${A}A${B}B`;
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length !== 4 || new Set(inputValue).size !== 4) {
      alert('請輸入 4 個不重複的數字！');
      return;
    }

    const result = calculateResult(inputValue);
    const newEntry = `${inputValue} ${result}`;
    setHistory([...history, newEntry]);
    setInputValue(''); // 清空輸入框
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <form onSubmit={handleNicknameSubmit}>
          <input
            type="text"
            placeholder="輸入暱稱"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
          <button type="submit">開始遊戲</button>
        </form>
      ) : (
        <div>
          <h2>歡迎，{nickname}！開始你的猜數字遊戲吧！</h2>
          <form onSubmit={handleGuessSubmit}>
            <input
              type="text"
              placeholder="輸入 4 個不重複的數字"
              value={inputValue}
              onChange={handleInputChange}
              maxLength="4"
              required
            />
            <button type="submit">送出</button>
          </form>

          <div className="history">
            <h3>猜測紀錄</h3>
            <ul>
              {history.map((entry, index) => (
                <li key={index}>{index + 1}. {entry}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
