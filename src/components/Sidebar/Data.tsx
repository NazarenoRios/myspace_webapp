import { FiUser, FiLogOut } from "react-icons/fi";
import {
  AiOutlineMessage,
  AiOutlineLock,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { CiMusicNote1 } from "react-icons/ci";
import { RiHome2Line } from "react-icons/ri";

export const datas = [
  {
    id: 1,
    icon: <RiHome2Line />,
    text: "Home",
  },
  {
    id: 2,
    icon: <FiUser />,
    text: "Profile",
  },
  {
    id: 3,
    icon: <AiOutlineMessage />,
    text: "Messages",
  },
  {
    id: 4,
    icon: <AiOutlineCalendar />,
    text: "Calendar",
  },
  {
    id: 5,
    icon: <BsBook />,
    text: "Notes",
  },
  {
    id: 6,
    icon: <BiCameraMovie />,
    text: "Movies / Series",
  },
  {
    id: 7,
    icon: <CiMusicNote1 />,
    text: "Music converter",
  },
  {
    id: 8,
    icon: <AiOutlineLock />,
    text: "Secret",
  },
  {
    id: 9,
    icon: <FiLogOut />,
    text: "Logout",
  },
];
