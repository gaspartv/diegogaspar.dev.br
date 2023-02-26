/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import { Header } from "@/src/components";
import { StyledCv, StyledHome } from "@/src/styles";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { StyledAbout, StyledPortfolio, StyledSocial } from "@/src/styles/home";
import TerminalIcon from "@mui/icons-material/Terminal";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import Image from "next/image";

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
            <h2>
              Oi, meu nome é <span>DIEGO</span>
            </h2>
            <h3>
              Desenvolvedor <span>Full Stack</span>
            </h3>
            <p>Tenho 34 anos e sou apaixonado por tecnologia.</p>
            <p>
              Buscando minha primeira oportunidade no mercado como desenvolvedor
              Jr.
            </p>
            <p>
              Estou cursando ADS pela UNIP e Full-Stack pela Kenzie Academy
              Brasil.
            </p>
          </aside>
          <StyledCv>
            <div>
              <Link href={"/cv.pdf"} target="_blank" rel="noopener noreferrer">
                <DescriptionIcon />
                Curriculum vitae
              </Link>
            </div>
          </StyledCv>
          <StyledSocial>
            <div>
              <Link
                href="https://www.linkedin.com/in/devdiegogaspar/"
                target="_blank"
              >
                <LinkedInIcon color="primary" fontSize="large" />
              </Link>
              <Link href="https://github.com/gaspartv" target="_blank">
                <GitHubIcon color="primary" fontSize="large" />
              </Link>
            </div>
          </StyledSocial>
        </div>
      </StyledHome>
      <StyledAbout>
        <div className="container">
          <section>
            <div>
              <span>
                <ImportantDevicesIcon color="primary" />
                <h3>Como Front-end posso oferecer.</h3>
              </span>
              <h4>Experiências em:</h4>
              <div>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Javascript</li>
                  <li>Typescript</li>
                  <li>ReactJS</li>
                  <li>NextJS</li>
                </ul>
              </div>
            </div>
            <div>
              <span>
                <TerminalIcon color="primary" />
                <h3>Como Back-end posso oferecer.</h3>
              </span>
              <h4>Experiências em:</h4>
              <div>
                <ul>
                  <li>Python</li>
                  <li>Django</li>
                  <li>Javascript</li>
                  <li>Typescript</li>
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>NextJS</li>
                  <li>Fastify</li>
                  <li>Jest</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Sqlite3</li>
                  <li>TypeORM</li>
                  <li>Prisma</li>
                  <li>ORM</li>
                  <li>Amazon AWS</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div>
              <span>
                <TurnedInIcon color="primary" />
                <h3>Além de saber:</h3>
              </span>
              <div>
                <ul>
                  <li>Boas práticas de desenvolvimento</li>
                  <li>Lógica de programação</li>
                  <li>Programação Funcional</li>
                  <li>Programação assíncrona</li>
                  <li>Metodologias Ágeis (Scrum e Kanban)</li>
                  <li>Controle de versão com git</li>
                  <li>Web Semântica</li>
                  <li>Noções de UX</li>
                  <li>Consumo de APIs</li>
                  <li>Construção de APIs RESTful</li>
                  <li>Banco de dados SQL</li>
                  <li>Migrations</li>
                </ul>
              </div>
            </div>
            <div>
              <span>
                <HomeRepairServiceIcon color="primary" />
                <h3>Ferramentas:</h3>
              </span>
              <div>
                <ul>
                  <li>VS Code</li>
                  <li>Insomnia</li>
                  <li>DBeaver</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </StyledAbout>
      <StyledPortfolio>
        <div className="container">
          <h2>Portfólio</h2>
          <section>
            <div>
              <h3>Tibia-Info</h3>
              <Image
                src="/img/portfolio/tibia-info.png"
                alt="Tibia Info Image"
                width={350}
                height={200}
              />
              <Link href="https://www.tibia-info.com/" target="_blank">
                Acessar
              </Link>
              <p>
                Projeto Full-Stack desenvolvido para resolver um problema 
              </p>
            </div>
          </section>
        </div>
      </StyledPortfolio>
    </>
  );
}
