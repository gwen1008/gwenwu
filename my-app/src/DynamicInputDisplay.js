import React, { useState } from 'react';

const DynamicInputDisplay = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">輸入</h1>
      
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-semibold">姓名：<br /></label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="請輸入您的姓名"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-semibold"><br />留言：<br /></label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="請輸入您的留言"
          rows="3"
        ></textarea>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h2 className="text-xl font-semibold mb-2">輸出結果：</h2>
        <p><strong>姓名：</strong> {name || '（尚未輸入）'}</p>
        <p><strong>留言：</strong> {message || '（尚未輸入）'}</p>
      </div>
    </div>
  );
};

export default DynamicInputDisplay;
