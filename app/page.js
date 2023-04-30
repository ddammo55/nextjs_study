import { connectDB } from '@/util/database.js';
import React from 'react';

export default async function Home() {
  //DB connection
  let client = await connectDB;

  //DB선택
  const db = client.db("forum");

  //데이터 가져오기 post에 있는 모든데이터를 어레이로 변환해주세요
  let result = await db.collection("post").find().toArray();
  console.log(result);
  
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

