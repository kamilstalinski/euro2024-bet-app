import axios from "axios";
import {
  useContext,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

// Definiowanie interfejsu User
interface User {
  role: string;
  id: number;
  username: string;
  email: string;
}

// Definiowanie kontekstu z typami
interface UserContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  const getProfile = async () => {
    try {
      if (!user) {
        axios.get("/auth/profile").then(({ data }) => {
          setUser(data);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
