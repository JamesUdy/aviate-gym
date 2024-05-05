import { LucideProps } from "lucide-react"
import react from "react"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }

export type NavbarDataType = {
    id: number,
    label: string,
}

export type FeatureDataType = {
    id: number,
    icon: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>,
    title: string,
    description: string,
}

export type HeroCarouseImageDataType = {
    id: number,
    image: string,
}

export type FormDataType = {
    fullName: string,
    email: string,
    subject: string,
    message: string,
}