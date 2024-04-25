import axios from 'axios'
import "./Footer.css";
import { useState } from 'react';
import Modall from '../Modal/Modal';
const Footer = () => {
  const [loading , setLoading] = useState(false)
  const SendMessage = ( event) =>{
    setLoading(true)
    event.preventDefault();
    const token = "6887615421:AAH1YIJJvatolq6qpSaTBdzV9pZAG-OK0jc"
    const chat_id = -1002073716537  ;
    const url = ` https://api.telegram.org/bot${token}/sendMessage`
    const name =document.getElementById("name").value
    const surname =document.getElementById("surname").value
    const sendMessageContent = `Ismi: ${name} \n Familiyasi: ${surname}`
    axios({
      url : url ,
      method: 'POST',
      data: {
        "chat_id" : chat_id,
        "text":sendMessageContent
      }
    }).then((res) => {
     alert("Muvaffaqiyatli")
      document.getElementById("myForm").reset()
    }).catch((err) => {
      console.log("yuborishda xatolik", err)
    }).finally(()=>setLoading(false))
  }
  return (
    <div className="footer">
      <div className="container">
        <form action="" className="footer-form " onSubmit={SendMessage} id="myForm">
          <h1 className="foo">Login</h1>
          <p className="footer-subtitle">to get started</p>
          <div className="footer-inputs ">
            <input type="text" placeholder="Name"  id="name"/>
            <input type="text" placeholder="Surname"  id="surname"/>
          </div>
          <button className="footer-btn" type="submit" loading={loading}>{loading? "Yuborilmoqda..." : "Yuborish" } </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
