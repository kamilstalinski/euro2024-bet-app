import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { TRegister } from "../types/TRegister";

export default function Signup() {
  const [data, setData] = useState<TRegister>({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password } = data;
    try {
      const { data } = await axios.post("/signup", {
        username,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({} as TRegister);
        toast.success("Register succesful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type='text'
          placeholder='enter name...'
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <label>Email</label>
        <input
          type='email'
          placeholder='enter email...'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='enter password...'
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
