import "../Components/Navbar/navbar";
import "../Components/Navbar/footer";

import Image from "next/image";
import teahouse_logo from "../public/witch_logo.png";

export default function Home() {
  return (
    <div className="main">
      <Image
        src={teahouse_logo}
        alt="The background image"
      />
    </div>
  );
}
