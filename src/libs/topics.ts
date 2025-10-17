import { TopicsTypes } from "../types/types"; 
import iconUser from "@/assets/topics/user.svg";
import iconBriefcase from "@/assets/topics/briefcase.svg";
import iconBookOpen from "@/assets/topics/book-open.svg";
import iconFolder from "@/assets/topics/folder.svg";
import iconLightbulb from "@/assets/topics/lightbulb.svg";
import iconWallet from "@/assets/topics/wallet.svg";
import iconHeartPulse from "@/assets/topics/heart-pulse.svg";
import iconHome from "@/assets/topics/home.svg";
import iconGraduationCap from "@/assets/topics/graduation-cap.svg";
import iconNotebook from "@/assets/topics/notebook.svg";
import iconBook from "@/assets/topics/book.svg";
import iconTarget from "@/assets/topics/target.svg";
import iconStickyNote from "@/assets/topics/sticky-note.svg";


export const topics: TopicsTypes[] = [
  {
    id: 0,
    name: "Personal",
    icon: iconUser
  },
  {
    id: 1,
    name: "Trabajo",
    icon: iconBriefcase
  },
  {
    id: 2,
    name: "Estudio",
    icon: iconBookOpen
  },
  {
    id: 3,
    name: "Proyectos",
    icon: iconFolder
  },
  {
    id: 4,
    name: "Ideas",
    icon: iconLightbulb
  },
  {
    id: 5,
    name: "Finanzas",
    icon: iconWallet
  },
  {
    id: 6,
    name: "Salud",
    icon: iconHeartPulse
  },
  {
    id: 7,
    name: "Hogar",
    icon: iconHome
  },
  {
    id: 8,
    name: "Clases",
    icon: iconGraduationCap
  },
  {
    id: 9,
    name: "Apuntes",
    icon: iconNotebook
  },
  {
    id: 10,
    name: "Lecturas",
    icon: iconBook
  },
  {
    id: 11,
    name: "Metas personales",
    icon: iconTarget
  },
  {
    id: 12,
    name: "Notas rápidas",
    icon: iconStickyNote
  }
]
