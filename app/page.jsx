'use client'
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

import InputWithButton from "../components/ui/searchBar/searchBar";
import { ModeToggle } from "../components/ui/toggle-mode";
import { UserCard } from "../components/ui/userCard/userCard";

export default function Page() {
  const [user, setUser] = useState("shadcn")
  const { data, isLoading, error } = useFetch(`https://api.github.com/users/${user}`)

  if (data) {
    console.log(data)
  }

  return (
    <html lang="en">
      <body className="justify-center items-center w-screen h-screen flex flex-col ">
        <div className="w-6/12 max-w-lg">

          <nav className="flex justify-between items-center">
            <h1>Github Looker 🐙</h1>
            <ModeToggle />

          </nav>
          <InputWithButton
            handlerClick={setUser}
          />
        </div>

        <UserCard {...data} />
        {console.log(error)}
      </body>
    </html>
  )
}

