export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthUser {
  email: string;
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  user: AuthUser;
}