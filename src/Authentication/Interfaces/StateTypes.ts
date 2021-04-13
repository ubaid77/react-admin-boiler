interface AuthInitialState {
  user: User | null;
  isLoggedIn: boolean;
  auth_loading: boolean;
  user_loading: boolean;
}
export interface User {
  username: string;
  email: string;
  user_type: string;
}

export default AuthInitialState;
