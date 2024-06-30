import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    refresh();
  }, [])

  const login = ({email, name, subscriptions, role}, jwt) => {
    localStorage.setItem('jwt', jwt);
    setUser({email, name, subscriptions, role});
  };

  const refresh = async () => {
    fetch(import.meta.env.VITE_BACKEND_URL + '/api/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      logout()
      
      throw new Error('Login Failed');
    }
    ).then(data => {
      if (data.subscriptions && data.subscriptions.length > 0) {
        data.subscriptions = data.subscriptions.map(sub => {
          if (sub.expiryDate) {
            sub.expiryDate = new Date(sub.expiryDate);
          }
          return sub;
        });
      }
      login({email: data.email, name: data.name, subscriptions: data.subscriptions, role: data.role}, localStorage.getItem('jwt'));
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      console.log(error);
    });
  }

  const logout = () => {
    localStorage.removeItem('jwt');
    setUser(null);
  };
  const [selectedMessageId, setSelectedMessageId] = useState("");

  return (
    <UserContext.Provider value={{ user, loading, refresh, login, logout,selectedMessageId,setSelectedMessageId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within an UserProvider');
  }
  return context;
}