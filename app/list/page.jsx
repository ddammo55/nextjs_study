import { connectDB } from '@/util/database.js';
import React from 'react';
import Link from 'next/link';

export default async function List() {
  //DB connection
  let client = await connectDB;
  //DB선택
  const db = client.db("forum");
  //데이터 가져오기 post에 있는 모든데이터를 어레이로 변환해주세요
  let result = await db.collection("post").find().toArray();

    return (
    <div className="list-bg">
        {
        result.map((item, index) => 
            <div className="list-item" key={index}>
                <Link href={'/detail/' + result[index]._id}><h4>{item.title}</h4></Link>
                <Link href={'/edit/' + result[index]._id}>수정</Link>
                <p>1월 1일</p>
            </div>
        )
        }
    </div>
    );
}

