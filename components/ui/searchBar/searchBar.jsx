import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function InputWithButton(props) {

  const [user, setUser] = useState("")

  return (
      <form
      className="flex w-full items-center space-x-2 p-5 dark:border border-solid border-border rounded-lg shadow-outer my-5" 
      onSubmit={(event) => {
            event.preventDefault()
            setUser(event.target.input.value)
            event.target.input.value = ""
          }}>
        <Input type="text" id="input" placeholder="Search Github username..." />
        <Button
          type="submit"
          onClick={props.handlerClick(user)}
        >
          Search
        </Button>
      </form>
  )
}

export default InputWithButton
