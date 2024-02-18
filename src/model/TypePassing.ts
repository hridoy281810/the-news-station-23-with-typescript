// logged user data type 
export type User = {
    uid?: string | null;
    email?: string | null;
    displayName?: string | null;
    photoULR?: string | null;
}

// auth information data type 
export interface AuthContextType {
    user:User | null;
    createUser: (email: string,password:string)=> Promise<void>;
    setLoading: (loading: boolean)=> void;
    loading: boolean;
    signIn: (email: string,password:string)=> Promise<void>;
    logout: ()=> Promise<void>
    signInGoogle: () => Promise<void>;
} 
