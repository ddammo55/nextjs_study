import { connectDB } from '@/util/database.js';

export default async function handler(req, res) {
    if(req.method === 'POST') {
        console.log(req.body);
        res.redirect(302, '/list')
        //  //DB connection
        //  let client = await connectDB;
        //  //DB선택
        //  const db = client.db("forum");
        //  //데이터를 하나 입력하고 싶을때
        //  let result = await db.collection('post').updateOne({_id : new ObjectId(props.params.id)}, {$set : {title : result.title, content : result.content}})
         
        
    }
}

