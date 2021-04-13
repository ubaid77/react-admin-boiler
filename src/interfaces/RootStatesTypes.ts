import AuthInitialState from "Authentication/Interfaces/StateTypes";

interface RootState {
  auth: AuthInitialState;
  error: Error;
}

export interface Error {
  error: string | null;
  status: number | null;
}

export default RootState;
