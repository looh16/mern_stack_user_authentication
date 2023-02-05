import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const getData = async () => {
    toast.loading();
    try {
      const token = localStorage.getItem("user");
      const response = await axios.get("/api/user/get-user-info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.dismiss();
      if (response.data.success) {
        setUserInfo(response.data.data);
      } else {
        localStorage.removeItem("user");
        navigate("/login");
        toast.error("Something went wrong");
      }
    } catch (error) {
      localStorage.removeItem("user");
      navigate("/login");
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (userInfo == null) {
      getData();
    }
  }, [userInfo]);


  return (
    userInfo !== null && (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-5x1 font-semibold text-primary">{userInfo?.email}</h1>
      </div>
    )
  )
}

export default Home