import dbConnect from '@/lib/dbConnect'
import { auth } from '@/lib/auth'
import bcrypt from 'bcryptjs'
import UserModel from '@/lib/models/UserModel'

export const GET = auth(async (req: any) => {
  if (!req.auth) {
    return Response.json(
      { message: 'unauthorized' },
      {
        status: 401,
      }
    )
  }
  await dbConnect()
  const users = await UserModel.find()
  return Response.json(users)
}) as any

export const POST = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      {
        status: 401,
      }
    )
  }
  await dbConnect()
  const hashedPassword = await bcrypt.hash('password', 5)
  const user = new UserModel({
    name: 'sample name',
    email: 'email@sample.com',
    password: hashedPassword,
    isAdmin: 0,
  })

  try {
    await user.save()
    return Response.json(
      { message: 'User created successfully', user },
      {
        status: 201,
      }
    )
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      }
    )
  }
}) as any
