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
