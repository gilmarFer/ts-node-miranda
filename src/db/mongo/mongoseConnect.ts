/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

// const uri = 'mongodb://127.0.0.1:27017/local';
const pass = process.env.MONG_PASS;
const dbName = process.env.DB_NAME;
const uri = `mongodb+srv://mo:${pass}@mo.73ws7.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const conn = mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err: any) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log('Successfully Connected!');
    }
  },
);

export default conn;
