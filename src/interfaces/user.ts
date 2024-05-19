export interface UserInterface {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
  photo: string;
}

export interface UsersResponseInterface {
  data: {
    success: boolean;
    total_pages: number;
    total_users: number;
    count: number;
    page: number;
    links: {
      next_url: string | null;
      prev_url: string | null;
    };
    users: UserInterface[];
    message: string;
  };
}

export interface UserCreateResponse {
  data: {
    success: boolean;
    user_id: number;
    message: string;
  };
  error: any;
}
