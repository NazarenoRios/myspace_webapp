import { FiUser, FiLogOut } from "react-icons/fi";
import { AiOutlineMessage, AiOutlineLock, AiOutlineCalendar } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi"
import { CiMusicNote1 } from "react-icons/ci"

export const datas = [
  {
    id: 1,
    icon: <FiUser />,
    text: "Profile",
  },
  {
    id: 2,
    icon: <AiOutlineMessage />,
    text: "Messages",
  },
  {
    id: 3,
    icon: <AiOutlineCalendar />,
    text: "Calendar",
  },
  {
    id: 4,
    icon: <BsBook />,
    text: "Notes",
  },
  {
    id: 5,
    icon: <BiCameraMovie />,
    text: "Movies / Series",
  },
  {
    id: 6,
    icon: <CiMusicNote1 />,
    text: "Music converter",
  },
  {
    id: 7,
    icon: <AiOutlineLock />,
    text: "Secret",
  },
  {
    id: 8,
    icon: <FiLogOut />,
    text: "Logout",
  },
];
