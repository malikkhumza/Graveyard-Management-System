import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // For accessing route parameters
import axios from 'axios';
import moment from 'moment';
import './AdminChatsSingle.css'; // Importing CSS file for styling
import { useUser } from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';
import 'primeicons/primeicons.css';

// const URL = "http://localhost:3000";
const URL = import.meta.env.VITE_BACKEND_URL;
function AdminChatsSingle() {
    const navigate = useNavigate();
    const { user, selectedMessageId, setSelectedMessageId } = useUser();
    const { userId } = useParams(); // Get the userId from the route parameters
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [replies, setReplies] = useState([]);
    const [fetchTrigger, setFetchTrigger] = useState(false);
    // admin image send func hooks

const [selectedFile, setSelectedFile] = useState(null);
const [hasSelectedFileChanged, setHasSelectedFileChanged] = useState(false);

if (!user) {
    navigate('/login');
    return null; // Prevent further rendering
}
useEffect(() => {
    const fetchAndSortMessages = async () => {
        try {
            // Fetch user messages
            const userMessagesResponse = await axios.get(URL + `/api/chat/userMessages/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            });

            // Fetch replies
            const repliesResponse = await axios.get(`${URL}/api/chat/message/allReplyToMessages/${userId}`);

            // Merge user messages and replies
            const combinedMessages = [...userMessagesResponse.data.messages,...repliesResponse.data];

         
            const sortedMessages = combinedMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

            // Set the sorted messages to the state
            setMessages(sortedMessages);
        } catch (error) {
            console.error('Failed to fetch messages or replies:', error);
        }
    };

    fetchAndSortMessages();
}, [userId, fetchTrigger]);

    
    // const sendMessage = async () => {
    //     try {
    //         const formData = new FormData();
    //         formData.append('chatId', `${user.email}`); // Assuming this is the chat ID
    //         formData.append('userId', `${user.email}`); // Assuming this is the user ID
    //         formData.append('content', newMessage);
    //         formData.append('replyTo', selectedMessageId);
    //         // Conditionally append the image if it exists
    //         if (selectedFile) {
    //             formData.append('image', selectedFile);
    //         }
    
    //         const response = await axios.post(URL + '/api/chat/sendMessage', formData, {
    //             headers: {
    //                 'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });
    
    //         setMessages(prevMessages => [...prevMessages, response.data.message]);
    //         setNewMessage('');
    //         setFetchTrigger(prev =>!prev); // Toggle fetchTrigger to re-fetch messages
    //         setHasSelectedFileChanged(false); // Reset the flag after sending the message
    //         setSelectedFile(null);
    //     } catch (error) {
    //         console.error('Failed to send message:', error);
    //     }
    // };
    

    const sendMessage = async () => {
        try {
            const formData = new FormData();
            formData.append('chatId', `${user.email}`); // Assuming this is the chat ID
            formData.append('userId', `${user.email}`); // Assuming this is the user ID
            formData.append('content', newMessage);
            formData.append('replyTo', selectedMessageId);
            // Conditionally append the image if it exists
            if (selectedFile) {
                formData.append('image', selectedFile);
            }
    
            const response = await axios.post(URL + '/api/chat/sendMessage', formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            // Append the new message to the messages array
            const newMessages = [...messages, response.data.message];
            // Sort the updated messages array
            const sortedMessages = newMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
            setMessages(sortedMessages);
            setNewMessage('');
            setFetchTrigger(prev =>!prev); // Toggle fetchTrigger to re-fetch messages
            setHasSelectedFileChanged(false); // Reset the flag after sending the message
            setSelectedFile(null);
        } catch (error) {
            console.error('Failed to send message:', error);
        }
    };
    
    
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) {
        console.log("No file selected");
        return;
    }
    setSelectedFile(file);
    setHasSelectedFileChanged(true);
}



    return (
    //     <section className="single-chat-page">
    //     <div className="admin-chats-single-container">
    //         <h2 style={{margin:"1rem 0"}}>Chat with User: <span style={{fontSize:"1rem", fontFamily:"cursive", textDecoration:"underline"}} className='user-id'>{userId}</span></h2>
    //         <ul className="message-list">
    //             {messages.map((message, index) => (
    //                 <li key={index} className={`message-box ${message.userId === user.email? 'user-message' : 'admin-message'}`}>
    //                      <h1><span style={{ opacity: "0.5" }}>UserID:</span> <span className={message.userId === user.email ? 'chat-page-user-id' : 'chat-page-admin-id'}>{message.chatId}</span></h1>

    //                     <p className="message-content">{message.content}</p>
    //                     <p className="message-time">Time: {moment(message.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</p>
    //                     <div className="chat-image-container">
    //                         {message.imageUrl? (
    //                             <div className='chat-image-container'>
    //                                 <img src={`${URL}/uploads/${message.imageUrl}`} alt="Message attachment" />
    //                             </div>
    //                         ) : null}
    //                     </div>
    //                 </li>
    //             ))}
    //         </ul>
    //         {selectedMessageId && (
    //             <div className="reply-container">
    //                 <input
    //                     type="text"
    //                     value={newMessage}
    //                     onChange={(e) => setNewMessage(e.target.value)}
    //                     placeholder="Type your reply..."
    //                     className="message-input"
    //                 />
    //                 <input type="file" name="image" accept="image/*" onChange={(e) => handleImageUpload(e)} multiple={false} className='file-input'/>
    //                 <button onClick={sendMessage} className="send-button">Send Reply</button>
    //             </div>
    //         )}
    //     </div>
    // </section>

   
   
        <section className="flex justify-center items-center w-full h-screen bg-gray-900  relative pt-28">
            <div className="max-w-4xl w-3/4 h-3/4 mx-auto p-5 bg-white rounded-lg shadow-lg overflow-y-scroll">
                <h2 className="my-4 text-xl">
                    Chat with User: <span className="text-base font-cursive underline">{userId}</span>
                </h2>
                <ul className="list-none p-0">
                    {messages.map((message, index) => (
                        <li key={index} className={`flex flex-col items-start w-4/5 p-5 mb-5 rounded-lg shadow ${message.userId === user.email ? 'bg-teal-800 text-white' : 'bg-gray-700 text-white'}`}>
                            <h1><span className="opacity-50">UserID:</span> <span className={message.userId === user.email ? 'chat-page-user-id' : 'chat-page-admin-id'}>{message.chatId}</span></h1>
                            <p className="m-0 text-lg">{message.content}</p>
                            <p className="m-0 text-sm text-gray-400">Time: {moment(message.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            {message.imageUrl && (
                                <div className="w-full">
                                    <img src={`${URL}/uploads/${message.imageUrl}`} alt="Message attachment" className="w-11/12" />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                {selectedMessageId && (
                    <div className="mt-5 flex items-center sticky bottom-0 bg-blur  bg-white px-2">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your reply..."
                            className="flex-1 p-2 border rounded mr-2 text-lg"
                        />
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="file-input "
                        />
                        <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded ml-2 hover:bg-blue-700">
                            <i className='pi pi-send text-2xl'></i>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};



// \end{code}

export default AdminChatsSingle;
