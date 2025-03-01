import Image from "next/image";
import Link from "next/link";

export default function Header({ photo }: { photo?: string }) {
  return (
    <header className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/interioratylogoblack.svg"
          className="sm:w-10 sm:h-10 w-9 h-9"
          width={24}
          height={24}
        />
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          interioraty.com
        </h1>
      </Link>
      {/* TODO: Eventually add a dropdown where folks can click to logout and buy credits */}
      {/* TODO: Maybe add another link to purchase credits next to dashboard */}
      {/* TODO: Also add "see previous generations in our new dashboard" note */}
      {photo ? (
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition"
          >
            <div>Dashboard</div>
            <div className="text-blue-500 bg-blue-200 rounded-full px-2 text-xs flex justify-center items-center font-semibold">
              New
            </div>
          </Link>
          <Image
            alt="Profile picture"
            src={photo}
            className="w-10 rounded-full"
            width={32}
            height={28}
          />
        </div>
      ) : (
        <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-500 bg-blue-600 font-medium transition"
          href="https://interioraty.com/pro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>프로로 업그레이드하기</p>
        </a>
      )}
    </header>
  );
}