// Например, в файле /api/update-status.js

import connectMongoDB from '@/utils/mongodb';
import updateUserStatus from 'mongoose';

export default async function handler({req, res} : any) {
    console.log(req);
//   const userId = req.body.userId;
// console.log('userId');
await connectMongoDB()
  try {
    // await updateUserStatus(userId, 'use client'); 
    // res.status(200).json({ message: 'User status updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user status' });
  }
}
