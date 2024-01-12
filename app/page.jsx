'use client'
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

import InputWithButton from "../components/ui/searchBar/searchBar";
import { ModeToggle } from "../components/ui/toggle-mode";
import { UserCard } from "../components/ui/userCard/userCard";
import { UserCardLoading } from "../components/ui/userCard/userCardLoading";

import Head from 'next/head'


export default function Page() {
  const [user, setUser] = useState("shadcn")
  const { data, isLoading, error } = useFetch(`https://api.github.com/users/${user}`)

  if (data) {
    console.log(data)
  }

  return (
    <html lang="en">
      
      <body className="justify-center items-center w-screen h-screen flex flex-col selection:text-background selection:bg-foreground">
        <div className="w-6/12 max-w-lg">

          <nav className="flex justify-between items-center">
            <h1 className="text-xl">
              Github Looker 
              <img className="w-6 h-6 inline m-2" src="favicon.ico" alt="poulp" />
            </h1>
            <ModeToggle />

          </nav>
          <InputWithButton
            handlerClick={setUser}
          />
        </div>
        

        {console.log(isLoading)}
        {isLoading?
          <UserCardLoading/>
          : error == "Problème avec la requête" ? 
          <p className="text-red-500">User not found</p>
          : <UserCard {...data}/>
        }

      </body>
    </html>
  )
}

