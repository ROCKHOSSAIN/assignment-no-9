import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });

  const updateUser = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
