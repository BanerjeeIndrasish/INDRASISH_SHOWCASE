import React, { forwardRef, useImperativeHandle, useReducer, useState } from "react"
import AlertSnack from "./AlertSnack"

type Form = {
  name: string
  email: string
  message: string
}

type DispatchType = {
  type: 'SET_NAME' | 'SET_EMAIL' | 'SET_MESSAGE'
  payload: string
}

type ApiState<T> =
  | { status: "success"; data: T }
  | { status: "error"; message: string }


export const Contact = forwardRef((_, ref) => {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<"success" | "error" | "warning" | "info">("info");

  const handleCancelAlert = () => {
    setOpen(false);
    setMessage("");
    setTimeout(() => setSeverity("info"), 150);
  }
  const handleChangeReducer = (state: Form, action: DispatchType) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload }
      case 'SET_EMAIL':
        return { ...state, email: action.payload }
      case 'SET_MESSAGE':
        return { ...state, message: action.payload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(handleChangeReducer, { name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, email, message } = state || {}
    if (!(name || email || message)) {
      setOpen(true)
      setMessage('Please fill at least one field before submitting.')
      setSeverity('warning')
    }
    try {
      const payload: Form = {
        ...state
      }
      const response = await fetch('https://my-api/submit',
        {
          method: 'POST',
          body: JSON.stringify(payload),
        }
      ).then(res => res.json()) as ApiState<Form>

      const data = response.status == 'success' ? response.data : null
      console.log("API Response Data:", data)

      if (response.status === 'success') {
        setOpen(true)
        setMessage('Form submitted successfully!')
        setSeverity('success')
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setOpen(true)
        setMessage('An error occurred while submitting the form. Please try again later.')
        setSeverity('error')
      }
    }
  }

  useImperativeHandle(ref, () => ({
    getData() {
      return state
    }
  }), [state])

  return (
    <div>
      <AlertSnack open={open} message={message} severity={severity} closeAlert={handleCancelAlert} />
      <form className="flex flex-col gap-4 max-w-md mx-auto p-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={state?.name || ''}
          onChange={(e) =>
            dispatch({ type: 'SET_NAME', payload: e.target.value })
          }
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={state?.email || ''}
          onChange={(e) =>
            dispatch({ type: 'SET_EMAIL', payload: e.target.value })
          }
          className="border border-gray-300 p-2 rounded"
        />
        <textarea
          placeholder="Message"
          value={state?.message || ''}
          onChange={(e) =>
            dispatch({ type: 'SET_MESSAGE', payload: e.target.value })
          }
          className="border border-gray-300 p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  )
})
