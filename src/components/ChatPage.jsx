import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../contexts/auth';
import "./ChatPage.css";
// import "./Admin/AdminChatsSingle.css";
import moment from 'moment';
import 'primeicons/primeicons.css';


// const URL = "http://localhost:3000";
const URL = import.meta.env.VITE_BACKEND_URL;

const ChatPage = () => {
    const [replies, setReplies] = useState([]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [fetchTrigger, setFetchTrigger] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [hasSelectedFileChanged, setHasSelectedFileChanged] = useState(false);


    const { user } = useUser();
    
    // Check if the user is authenticated
    const isAuthenticated = !!user;
    const email = user?.email;

    
    
    // final sendmessage
    
    // final useEffect
    useEffect(() => {
        const fetchMessagesAndReplies = async () => {
            try {
                if (!isAuthenticated ||!email) return; // Exit if not authenticated
                const userResponse = await axios.get(URL + `/api/chat/userMessages/${email}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
                });
                const repliesResponse = await axios.get(`${URL}/api/chat/message/allReplyToMessages/${email}`);
                // Combine user messages and replies
                const combinedMessages = [...userResponse.data.messages,...repliesResponse.data];

                // Sort messages by createdAt
                const sortedMessages = combinedMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
              
                setMessages(sortedMessages);
            } catch (error) {
                console.error('Failed to fetch messages or replies:', error);
            }
        };
    
        fetchMessagesAndReplies();
    }, [isAuthenticated, email, fetchTrigger]);
    
    const sendMessage = async () => {
        try {
            if (!isAuthenticated ||!email) return;
            const formData = new FormData();
            
            const chatId = `${user.email}`; 
            const userId = `${user.email}`; 
            
            // Append the content to formData
            formData.append('content', newMessage);
            
            // Check if a file has been selected and append it to formData
            if (selectedFile) {
                formData.append('image', selectedFile);
            }
            
            // Append chatId and userId to formData
            formData.append('chatId', chatId);
            formData.append('userId', userId);
            
            // console.log(formData.get('content'), "is the message", formData.get('image'));
        
            const response = await axios.post(URL + '/api/chat/sendMessage', formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessages(prevMessages => [...prevMessages, response.data.message]);
          
            setNewMessage('');
            setFetchTrigger(prev =>!prev); // Toggle fetchTrigger to re-fetch messages
            setHasSelectedFileChanged(false); // Reset the flag after sending the message
          setSelectedFile(null);
        } catch (error) {
            console.error('Failed to send message:', error);
        }
    };
    
  
// uploads image
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) {
        console.log("No file selected");
        return;
    }
    setSelectedFile(file); 
    setHasSelectedFileChanged(true);
   
}


    if (!isAuthenticated) {
        return (
            <section className="chat-page-wrapper">
                <div className="login-prompt">
                    <h1 style={{fontSize:"2rem",color:"white",fontFamily:"sans-serif"}}>Please log in to chat with the admin.</h1>
                </div>
            </section>
        );
    }

    return (
    //     <section className="chat-page-wrapper">
    //     <div className="chat-container">
    //         <h2 className="chat-header">Chat with Admin</h2>
    //         {messages.length > 0? (
    //             <div className="message-container">
    //                 {messages.map((message, index) => (
    //                     <div key={index} className={`message-box ${message.userId === user.email? 'user-message' : 'admin-message'}`}>
    //                         <h1><span style={{ opacity: "0.5" }}>UserID:</span> <span className={message.userId === user.email ? 'chat-page-user-id' : 'chat-page-admin-id'}>{message.chatId}</span></h1>

    //                         {message.content? <p className="message" style={{ color: 'white' }}>{message.content}</p> : null}
    //                         <p style={{opacity:"0.7"}}><span style={{opacity:"0.7"}}>Time: </span>{moment(message.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</p>
    //                         {/* Efficient handling of images */}
    //                         {message.imageUrl && (
    //                             <div className="chat-image-container">
    //                                 <img src={`${URL}/uploads/${message.imageUrl}`} alt="Message attachment" />
    //                             </div>
    //                         )}
    //                     </div>
    //                 ))}
    //             </div>
    //         ) : (
    //             <p style={{ textAlign: "center", color: "red" }}>No messages available</p>
    //         )}
    //         <div className="input-container">
    //             <input
    //                 type="text"
    //                 value={newMessage}
    //                 onChange={(e) => setNewMessage(e.target.value)}
    //                 placeholder="Type your message..."
    //                 className="message-input"
    //             />
    //             <input type="file" name="image" accept="image/*" onChange={(e) => handleImageUpload(e)} multiple={false} className='file-input'/>
    //             <button onClick={sendMessage} className="send-button">Send</button>
    //         </div>
    //     </div>
    // </section>

    <section className="flex justify-center items-center h-full bg-gray-900 py-44">

            <div className=" w-3/4 max-w-4xl mx-auto p-5 border border-gray-300 rounded-lg shadow-lg bg-opacity-70 bg-blue-200">
            <h2 className="text-2xl mb-5 text-center font-cursive underline">Chat with Admin</h2>

                {messages.length > 0 ? (
                    <div className="mb-5 max-h-80 overflow-y-auto p-3 border border-gray-300 rounded-lg">
                        {messages.map((message, index) => (
                            <div key={index} className={`p-5 mb-5 rounded-lg shadow ${message.userId === user.email ? 'bg-green-600 text-white' : 'bg-yellow-500 text-black'}`}>
                                <h1>
                                    <span className="opacity-50">UserID:</span> 
                                    <span className={message.userId === user.email ? 'bg-orange-600 px-2 py-1 rounded-md' : 'bg-gray-300 px-2 py-1 rounded-md shadow'}>{message.chatId}</span>
                                </h1>
                                {message.content && <p className="message text-white">{message.content}</p>}
                                <p className="opacity-70"><span className="opacity-70">Time: </span>{moment(message.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</p>
                                {message.imageUrl && (
                                    <div className="w-full flex justify-center my-4">
                                        <img src={`${URL}/uploads/${message.imageUrl}`} alt="Message attachment" className="w-3/5"/>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-red-500">No messages available</p>
                )}
                <div className="flex items-center  justify-center mt-5">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 p-2 border border-gray-300 rounded-l-md outline-none"
                    />
                    <input type="file" name="image" accept="image/*" onChange={(e) => handleImageUpload(e)} multiple={false} className="w-24 rounded-lg m-2"/>
                    <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 pi pi-send px-2 text-lg"></button>
                </div>
            </div>
        </section>
    
    );
};

export default ChatPage;
