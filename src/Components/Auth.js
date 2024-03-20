// import { useEffect, useState } from "react";


// function Auth() {
//   const [accesstoken, setAccesstoken] = useState('')
//   const handlelogin = () => {
//     // console.log("handle login clicked");
//     const CLIENT_ID = "467106718661-uh5cqq3uk43ab3qsc0ui244aq0bcdmjb.apps.googleusercontent.com"
//     const REDIRECT_URL = "http://localhost:3000"
//     const SCOPE = 'https://www.googleapis.com/auth/gmail.readonly';

//     const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
//     window.location.href = AUTH_URL
//   };
//   const getAccessToken = () => {
//     const url=window.location.href
//     const token=url.match(/access_token=([^&]+)/);
//     if(token && token.length>1) {
//       localStorage.setItem("Token", token[1]);
//     }
//   }
//   useEffect(() => {
//     getAccessToken()
//   }, [])

//   const getEmailData=()=>{
//     let token=localStorage.getItem("Token")
//     console.log("hello",token);
//     let url="https.//gmail.googleapis.com/gmail/v1/users/me/message"
//     const options={
//       method: "GET",
//       headers:{
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': `apllication/json`

//       }
//     }
//     fetch(url, options)
//     .then(response=>response.json())
//     .then(json=>console.log(fetchMail(json.message[0].id)))
//     .catch(error=>console.log('Error in fetching mails',error))

//   }
//   const fetchMail=(id)=>{
//     console.log("show id===",id)
//     let token=localStorage.getItem("Token")
//     const options={
//       method: "GET",
//       headers:{
//         'Authorization' : `Bearer ${token}`,
//         'Content-Type' : `application/json`
//       }
//     }
 

//     let url=`https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`;
//     fetch(url,options)
//     .then(response=>response.json())
//     .then(json=>console.log(json))
//     .catch(error=>console.log('Eroor in fetching mails',error))
//   }
//   return (
//     <>
//       <div>
//         {accesstoken ? (
//           <div>
//             <h1>Access token obtained</h1>
//             <p>Access Token: {accesstoken}</p>

//           </div>) : (
//           <>
//             <button onClick={handlelogin}>Login with google</button>
//             <button onClick={()=>getEmailData()}>get Email</button>
//             <button onClick={()=>fetchMail()}>Fetch Emails</button>
//           </>

//         )
//         }
//       </div>
//     </>



//   )




// }


// export default Auth;

import React, { useEffect, useState } from 'react'

const Auth = () => {
const [accesstoken, setAccessToken]=useState('');
const handleLogin=()=>{
    const CLIENT_ID="467106718661-uh5cqq3uk43ab3qsc0ui244aq0bcdmjb.apps.googleusercontent.com"
    const REDIRECT_URL='http://localhost:3000'
    const SCOPE="https://www.googleapis.com/auth/gmail.readonly";
    const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;

window.location.href=AUTH_URL;
};

const getAccessToken = () => {
  const url = window.location.href;
  const token = url.match(/access_token=([^&]+)/);
    localStorage.setItem("Token",token && token[1]);
    
};

useEffect(() => {
  getAccessToken();
}, []);

const getEmaildata = () => {
  let token = localStorage.getItem("Token"); 
  console.log("hello", token);
  let url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages'; 
  const options = {
      method: "GET",
      headers: {
          'Authorization':` Bearer ${token}`,
          'Content-Type': `application/json`
      }
  };
  fetch(url, options)
      .then(response => response.json())
      .then(json => console.log(fetchMail(json.messages[0].id)))
      .catch(error => console.log('error in fetching mails', error));
};

const fetchMail = (id) => {
  console.log("message id is ===",id)
  let token = localStorage.getItem("Token"); 
  const options = {
      method: "GET",
      headers: {
          'Authorization':` Bearer ${token}`,
          'Content-Type': `application/json`
      }
  };
  let url =` https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`; 
  fetch(url, options)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log('error in fetching mails', error));
};

  return (
    <div>
    {accesstoken ? (
    <div>
      <h1>Access token obtained</h1>
      <p>access Token:{accesstoken}</p>
    </div>):(
        <>
        
        <button onClick={()=>handleLogin()}>LOGIN WITH GOOGLE</button> 
        <button onClick={()=>getEmaildata()}>GET EMAIL</button>
        
        <button onClick={()=>fetchMail("18e5b0a92617315a")}>fetch mail</button> 
        
        </>
    )

    }
    </div>
  )
}


export default Auth;
