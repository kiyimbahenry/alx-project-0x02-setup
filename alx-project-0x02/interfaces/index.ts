// Basic interface example
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
}

// Card component props interface
export interface CardProps {
  title: string;
  content: string;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}

// ... existing interfaces ...

// PostModal interfaces
export interface PostData {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// ... existing interfaces ...

// Button component props interface
export interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

// ... existing interfaces ...

// PostCard component props interface
export interface PostProps {
  id: number;
  title: string;
  content: string;
  userId: number;
}

// JSONPlaceholder Post interface
export interface JsonPlaceholderPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
