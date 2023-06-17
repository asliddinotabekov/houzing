import { message } from "antd";
// import { useNavigate } from "react-router-dom";
const {REACT_APP_BASE_URL} =process.env
export const useRequest = () => {
  // const navigate =useNavigate()
  const [messageApi] = message.useMessage();
  // const info = () => {
  //     messageApi.info('Hello, Ant Design!');
  // };
  const warning = (err) => {
    messageApi.info(err || ' Something went wrong ');
  };
  
  const request = async ({me, url, method = "GET", body, token, headers,added }) => {
    if (token) headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

    const options = {
      method,
      headers: { ...headers,
         "Content-Type": "application/json" ,
        },
      body: JSON.stringify(body),
    };
    console.log(REACT_APP_BASE_URL)

    try{
      let result = await fetch(
        `
          ${me? "http://127.0.0.1:8081/api" : REACT_APP_BASE_URL}${url}
        `
        ,
      options
      ).then((res)=>res.json())
      return result
    }catch(err){
      warning(err)
      return err
    }
  };
  
  return request;
};

export default useRequest;




    // 


    
    // return fetch(
    //  ,
    //   options
    // ).then((res) => res.json())
    // .then((res)=>added)


