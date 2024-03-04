import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
const Home = () => {
  //   const [data, setData] = useState([]);
  //   const [load, setLoad] = useState(false);
  //   console.log(data, "data");
  //   const fectData = async () => {
  //     const options = {
  //       method: "GET",
  //       url: "http://localhost:4000/profile",
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //       setData(response.data);
  //     } catch (error) {
  //       if (error) {
  //         setLoad(false);
  //       }
  //       console.error(error);
  //     }
  //   };
  //   useEffect(() => {
  //     fectData();
  //   }, []);

  const { isLoading, data, error, isError, isFetching } = useQuery(
    "profile-fetch",
    () => {
      return axios.get("http://localhost:4000/profile", {
        // cacheTime: 5000, //default time 5 min
        // stsaleTime: 3000, //recat query rfresh after 30 second
        refetchOnMount: false,
      });
    }
  );
  console.log("isLoading=", isLoading, "isFetching=", isFetching);
  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <>
        <div>{data.data.name}</div>
        <div>{data.data.email}</div>
        <div>{data.data.address}</div>
      </>
    </div>
  );
};

export default Home;
