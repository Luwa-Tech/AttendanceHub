import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "../utils/axiosConfig";
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"


const RegisterUserModal = ({ open, handleOpen, getEmployees, setOpen }) => {
  const [isAddNewUserLoading, setIsAddNewUserLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  
  const handleOpenWithRefresh = () => {
    handleOpen()

    // Refresh employees list
    getEmployees()
  }

  const form = useForm({
    mode: "onBlur"
  })

  const { register, handleSubmit, formState, reset } = form
  const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState


  const addNewEmployee = async (data) => {
    try {
      setIsAddNewUserLoading(prev => !prev)

      const res = await axios.post("http://localhost:5001/register", {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
        jobTitle: data.jobTitle,
        role: data.role
      })
      setSuccessMsg(res.data.message);
    } catch (error) {
      console.log(error)
    } finally {
      setIsAddNewUserLoading(prev => !prev)
    }
  }

  useEffect(() => {
    if (isValid && isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset, isValid])

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size="lg"
      className="fixed inset-0 flex items-center flex-col justify-center bg-black bg-opacity-50 shadow-none"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <DialogHeader>Register New Employee</DialogHeader>
        <DialogBody>
          <form onSubmit={handleSubmit(addNewEmployee)} noValidate>
            <div className="mb-4">
              <Typography variant="small" color="gray">First Name</Typography>
              <input
                type="text"
                {...register('firstname', { required: true, message: "Firstname is required" })}
                className="w-full px-3 py-2 border rounded"
              />
              <p className="text-red-700 text-[.8rem]">{errors.firstname?.message}</p>
            </div>
            <div className="mb-4">
              <Typography variant="small" color="gray">Last Name</Typography>
              <input
                type="text"
                {...register('lastname', { required: true, message: "Lastname is required" })}
                className="w-full px-3 py-2 border rounded"
              />
              <p className="text-red-700 text-[.8rem]">{errors.lastname?.message}</p>
            </div>
            <div className="mb-4">
              <Typography variant="small" color="gray">Email</Typography>
              <input
                type="email"
                {...register('email', { required: true, message: "Email is required" })}
                className="w-full px-3 py-2 border rounded"
              />
              <p className="text-red-700 text-[.8rem]">{errors.email?.message}</p>
            </div>
            <div className="mb-4">
              <Typography variant="small" color="gray">Temporary password</Typography>
              <input
                type="password"
                {...register('password', { required: true, message: "Temporary password is required" })}
                className="w-full px-3 py-2 border rounded"
              />
              <p className="text-red-700 text-[.8rem]">{errors.password?.message}</p>
            </div>
            <div className="mb-4">
              <Typography variant="small" color="gray">Job Title</Typography>
              <input
                type="text"
                {...register('jobTitle', { required: true, message: "Job title is required" })}
                className="w-full px-3 py-2 border rounded"
              />
              <p className="text-red-700 text-[.8rem]">{errors.jobTitle?.message}</p>
            </div>
            <div className="mb-4">
              <Typography variant="small" color="gray">Role</Typography>
              <input
                type="text"
                {...register('role', { required: true, message: "Role is required" })}
                className="w-full px-3 py-2 border rounded"
              />
              <p className="text-red-700 text-[.8rem]">{errors.role?.message}</p>
            </div>
            {
              successMsg && <Typography variant="small" className="text-green-500">{successMsg}</Typography>
            }
            <DialogFooter>
              <div className="flex gap-4 justify-between items-center">
                <Button variant="text" color="red" onClick={handleOpenWithRefresh} className="mr-1">
                  <span>Close</span>
                </Button>
                <Button variant="gradient" className="bg-button-400 text-white px-[.5rem] py-[.4rem]" type="submit" disabled={isAddNewUserLoading}>
                  <span>{isAddNewUserLoading ? 'Registering...' : 'Register'}</span>
                </Button>
              </div>
            </DialogFooter>
          </form>
        </DialogBody>
      </div>
    </Dialog>

  )
}

export default RegisterUserModal;