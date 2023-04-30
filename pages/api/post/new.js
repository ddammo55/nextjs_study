import { connectDB } from '@/util/database.js';

export default  async function handler(요청, 응답) {
        if (요청.method == 'POST'){
            if (요청.body.title == '') {
              return 응답.status(500).json('제목써라').redirect(500, '/write');
            }

            try {
                //DB connection
                let client = await connectDB;
                //DB선택
                const db = client.db("forum");
                //데이터를 하나 입력하고 싶을때
                let result = await db.collection("post").insertOne(요청.body);
                응답.redirect(302, '/list')
                
            }catch(error){
                return 응답.status(500).json(error)
            }
        }
    }
