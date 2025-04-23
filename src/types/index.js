// Type definitions for the application

// Resource object structure
export const Resource = {
  id: String,
  title: String,
  author: String,
  rating: Number,
  thumbnail: String,
  category: String,
  tags: Array,
  url: String,
  dateAdded: String,
  views: Number,
  saves: Number,
};

// Category object structure
export const Category = {
  id: String,
  name: String,
  icon: String,
  count: Number,
};

// Testimonial object structure
export const Testimonial = {
  id: String,
  name: String,
  role: String,
  avatar: String,
  quote: String,
  rating: Number,
};

// User object structure
export const User = {
  id: String,
  name: String,
  avatar: String,
  role: String,
};
