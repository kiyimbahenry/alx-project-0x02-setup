// ... existing interfaces ...

// UserCard component props interface
export interface UserProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
}

// JSONPlaceholder User interface
export interface JsonPlaceholderUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// ... existing interfaces ...

// PostCard component props interface
export interface PostProps {
  id: number;
  userId: number;
  title: string;
  content: string;
}

// JSONPlaceholder Post interface
export interface JsonPlaceholderPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// ... rest of your existing interfaces ...
