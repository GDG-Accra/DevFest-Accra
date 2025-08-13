import Hanson from "../../assets/images/TeamImages/hanson.png";
import Andrews from "../../assets/images/TeamImages/Andrews.jpeg";
import Esther from "../../assets/images/TeamImages/Esther.jpeg";
import Richard from "../../assets/images/TeamImages/Richard.jpeg";
import Michael from "../../assets/images/TeamImages/Michael.jpeg";
import CodeRight from "../../assets/images/TeamImages/DFShapeLogo.svg";
import Samuella from "../../assets/images/TeamImages/samuella.jpg";
import Joshua from "../../assets/images/TeamImages/joshua.jpeg";


export interface TeamMember {
  id: number;
  name: string;
  role: string;
  category: string;
  linkedin: string;
  twitter: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Shadrack Inusah",
    role: "GDG Organizer",
    category: "Organizers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 2,
    name: "Roberta Akoto",
    role: "People Lead",
    category: "Organizers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 3,
    name: "Simms Smith",
    role: "Marketing Lead",
    category: "Organizers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 4,
    name: "Okai Abena Akweley",
    role: "Partnerships Associate",
    category: "Organizers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 5,
    name: "Deborah Dzathor",
    role: "Team Member",
    category: "Organizers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 6,
    name: "Sosu Alfred",
    role: "Team Member",
    category: "Organizers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 7,
    name: "Paul Boamah",
    role: "Team Member",
    category: "Organizers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 8,
    name: "Shadrack Odametey",
    role: "Media/Technical Lead",
    category: "Organizers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 9,
    name: "Hamenu Selasi Kofi",
    role: "Team Member",
    category: "Graphic Designers | UIUX Designers",
    linkedin: "#",
    twitter: "#",
    image: Hanson,
  },
  {
    id: 10,
    name: "Andrews Kwame Sessah",
    role: "Team Member",
    category: "Graphic Designers | UIUX Designers",
    linkedin: "#",
    twitter: "#",
    image: Andrews,
  },
  {
    id: 11,
    name: "Esther Kai Lartey",
    role: "Team Member",
    category: "Graphic Designers | UIUX Designers",
    linkedin: "#",
    twitter: "#",
    image: Esther,
  },
  {
    id: 12,
    name: "Bernice Owusu",
    role: "Team Member",
    category: "Developers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 13,
    name: "Joshua Amarfio",
    role: "Team Member",
    category: "Developers",
    linkedin: "#",
    twitter: "#",
    image: Joshua,
  },
  {
    id: 14,
    name: "Richard Kweku Aikins",
    role: "Team Member",
    category: "Developers",
    linkedin: "#",
    twitter: "#",
    image: Richard,
  },
  {
    id: 15,
    name: "Priscilla King",
    role: "Team Member",
    category: "Developers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 16,
    name: "Lois Frempong",
    role: "Team Member",
    category: "Developers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 17,
    name: "Samuella Manye Aglago",
    role: "Team Member",
    category: "Developers",
    linkedin: "#",
    twitter: "#",
    image: Samuella,
  },
  {
    id: 18,
    name: "Michael Agyemang Prempeh",
    role: "Team Member",
    category: "Developers",
    linkedin: "#",
    twitter: "#",
    image: Michael,
  },
  {
    id: 19,
    name: "Dzikunu Nelson",
    role: "Team Member",
    category: "Developers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
];

export const filters = [
  "All",
  "Organizers",
  "Graphic Designers | UIUX Designers",
  "Developers",
  "Content",
];
