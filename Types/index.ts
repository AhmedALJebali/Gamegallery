import { ElementType } from "react";

export interface GameCardType {
  photo: string;
  title: string;
  followers: number;
}
export interface service {
  name: string;
  Icon: ElementType;
}
export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}
export interface Testimonial {
  title: string;
  name: string;
  content: string;
  color: string;
}
export interface GameCardProps {
  title: string;
  description1: string;
  description2?: string;
  image: string;
  toleft?: boolean;
  buttonText?: string;
}
