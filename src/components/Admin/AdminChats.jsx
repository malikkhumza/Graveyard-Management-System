// AdminChats.js
import React, { useEffect, useState } from 'react';
import { useUser } from '../../contexts/auth.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminChats.css';
import moment from 'moment';

function AdminChats() {
    const { user,selectedMessageId,setSelectedMessageId } = useUser();
    const [lastMessages, setLastMessages] = useState([]);
    // const [selectedMessageId, setselectedMessageId] = useState(null);
    const history = useNavigate();

    // const URL = "http://localhost:3000";
    const URL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const fetchLastMessages = async () => {
            try {
                const response = await axios.get(URL + '/api/chat/allMessages', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
                });
                
                // console.log(response.data.messages,"is reponse data");
                setLastMessages(response.data.messages);
            } catch (error) {
                console.error('Failed to fetch messages:', error);
            }
        };

        fetchLastMessages();
    }, []);

  
    const handleMessageClick = (userId, messageId) => {
        
        setSelectedMessageId(messageId); // Set the selected message ID
        history(`/chat/${userId}`);
    };
    // handle delete message functionality:
    const handleDeleteClick = async (messageId) => {
        try {
            console.log(messageId,"id the id of the message to be deleted")
            await axios.delete(URL + `/api/chat/message/${messageId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            });

            
            fetchLastMessages();
        } catch (error) {
            console.error('Failed to delete message:', error);
        }
    };
    return (
        // <section className="admin-page-chats-wrapper">
        //     <div className="admin-chats-container">
        //         <h2 style={{textAlign:"center",fontFamily:"cursive",fontSize:"1.5rem",textDecoration:"underline",marginBottom:".5rem"}}>Admin Chats</h2>
        //         <ul className="message-list">
        //             {lastMessages.map((message, index) => (
        //                 <li key={index} className="message-item" onClick={() => handleMessageClick(message.lastMessage.userId,message._id)}>
        //                     <p style={{color:"white",margin:".6rem 0"}}><span style={{opacity:"0.8",color:"white"}}>UserID: </span> <span  className='user-id'>{message.lastMessage.chatId}</span></p>
        //                     <p style={{color:"white"}}><span style={{opacity:"0.8",color:"wheat"}}>Last msg: </span> {message.lastMessage.content}</p>
        //                     <p style={{color:"white",opacity:"0.4"}}>Time: {moment(message.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
        //                     <button onClick={() => handleDeleteClick(message._id)} style={{backgroundColor:"skyblue",padding:".5rem 1.2rem",borderRadius:"10px"}}>Delete ⤴chat</button>
        //                     {/* <button onClick={() => setselectedMessageId(message._id)}>Reply</button>  */}
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>
        // </section>

        <section className="flex flex-col justify-center items-center h-full bg-gray-900 pt-16 pb-32">
            <h2 className="text-center text-white font-KeplerStd  text-3xl font-bold mb-2 p-3 pt-20">Admin Chats</h2>

            <div className="max-w-4xl w-4/5 h-3/4 mx-auto p-5 bg-antiquewhite rounded-lg shadow-lg overflow-y-scroll border-2">
                <ul className="list-none p-0">
                    {lastMessages.map((message, index) => (
                        <li key={index} className="p-5 mb-5 cursor-pointer w-11/12 bg-gray-900  transition-opacity hover:opacity-70 border-b-2 border-gray-700" onClick={() => handleMessageClick(message.lastMessage.userId, message._id)}>
                            <p className="text-white mb-2"><span className="opacity-80 px-2">UserID : </span> <span className="bg-[#D5A021] text-black font-semibold p-1 px-3 rounded-xl">{message.lastMessage.chatId}</span></p>
                            <p className="text-white mb-2"><span className="opacity-80 text-wheat px-2">Last msg : </span> "{message.lastMessage.content}"</p>
                            <p className="text-white px-2 text-xs opacity-40">{moment(message.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <button onClick={() => handleDeleteClick(message._id)} className="mt-2 bg-skyblue text-black font-semibold p-1 px-3 rounded-lg border-2 bg-slate-600 text-xs">Delete ⤴chat</button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default AdminChats;
