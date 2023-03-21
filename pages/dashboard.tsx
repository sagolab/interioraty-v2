import Head from "next/head";
import Header from "../components/Header";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Footer from "../components/Footer";
import prisma from "../lib/prismadb";
import { Room } from "@prisma/client";
import { RoomGeneration } from "../components/RoomGenerator";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Dashboard({ rooms }: { rooms: Room[] }) {
  const { data: session, status } = useSession();
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Interioraty 대시보드</title>
      </Head>
      <Header photo={session?.user?.image || undefined} />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mb-0 mb-8">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
        당신의 <span className="text-blue-600">방</span> 리모델링 세대
        </h1>
        {rooms ? (
          <p className="text-gray-300">
            이전 방 리모델링 세대를 아래에서 살펴보세요. 어떤 피드백이 있으신가요?
            이메일 hey@interioraty.com으로 보내주세요.
          </p>
        ) : (
          <p className="text-gray-300">
            당신은 방 리모델링 세대가 없습니다. 하나를 생성해보세요.{" "}
            <Link
              href="/dream"
              className="text-blue-600 underline underline-offset-2"
            >
              여기에서
            </Link>
          </p>
        )}
        {rooms.map((room) => (
          <RoomGeneration
            original={room.inputImage}
            generated={room.outputImage}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(ctx: any) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session || !session.user) {
    return { props: { rooms: [] } };
  }

  let rooms = await prisma.room.findMany({
    where: {
      user: {
        email: session.user.email,
      },
    },
    select: {
      inputImage: true,
      outputImage: true,
    },
  });

  return {
    props: {
      rooms,
    },
  };
}
