import prisma from '../../lib/prismadb'
import { NextResponse } from 'next/server'
import myUser from '@/app/actions/getUser'

export async function POST (request: Request){
    const currentUser = await myUser();
}