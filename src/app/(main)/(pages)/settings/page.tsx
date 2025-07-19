import ProfileForm from '@/components/forms/profileForm'
import React, { useEffect } from 'react'
import ProfilePicture from './_components/profilePicture'
import { db } from '@/lib/db'
import {  currentUser } from '@clerk/nextjs/server'

type Props = {}

const Page = async (props: Props) => {
  const clerkUser = await currentUser();
  
  if (!clerkUser) return null;
  
  let user = await db.user.findUnique({
    where: { clerkId: clerkUser.id }
  });

  // Fallback: try finding by email if not found by clerkId
  const clerkUserEmail = clerkUser.emailAddresses[0].emailAddress;

  if (!user && clerkUser.emailAddresses && clerkUser.emailAddresses.length > 0) {
    user = await db.user.findUnique({
      where: { email: clerkUserEmail }
    });
  }

  async function takeUserName (name: string){
    'use server'
    try {
      console.log("this name is form the profileform: ",name)
      const data = await db.user.update({
        where: {
          email: clerkUserEmail
        },
        data: {
          name
        }
      })
      return data;
    } catch (error) {
      console.log(error);      
    }
    return name;
  }
  
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfilePicture/>
        <ProfileForm user = {user} onUpdate={takeUserName}/>
      </div>
    </div>
  )
}

export default Page