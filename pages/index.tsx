/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import { Header } from "@/src/components";
import { StyledCv, StyledHome } from "@/styles";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Home() {
  return (
    <>
      <Head>
        <title>Diego 'Gaspar' Monteiro</title>
        <meta
          name="description"
          content="Site pessoal do desevolvedor Diego Gaspar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <StyledHome>
        <div className="container">
          <aside>
            <h2>Diego 'Gaspar' Monteiro</h2>
            <h3>Full Stack</h3>
          </aside>
          <StyledCv>
            <div>
              <Link href={"/curriculum"}>
                <DescriptionIcon />
                Curriculum vitae
              </Link>
            </div>
          </StyledCv>
        </div>
      </StyledHome>
    </>
  );
}
