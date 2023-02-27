/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
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
import WorkIcon from "@mui/icons-material/Work";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ChatIcon from "@mui/icons-material/Chat";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ModalGuild from "@/src/components/ModalGuild";
import { UserContext } from "@/src/contexts";

export default function Home() {
  const { modalGuild, setModalGuild } = useContext(UserContext);

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
      {modalGuild && (
        <ModalGuild
          imgModal="/img/portfolio/tibia-info.png"
          altModal="Guild Status"
        />
      )}
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
          <section>
            <span>
              <WorkIcon color="primary" />
              <h2>Portfólio</h2>
            </span>
            <div>
              <h3>
                <KeyboardDoubleArrowRightIcon color="primary" />
                <Link
                  href="https://www.tibia-info.com/"
                  target="_blank"
                  style={{
                    color: "#bababa",
                    textDecoration: "none",
                  }}
                >
                  www.tibia-info.com
                </Link>
                <KeyboardDoubleArrowLeftIcon color="primary" />
              </h3>
              <p>
                Projeto Full-Stack desenvolvido para resolver alguns problemas
                de jogadores de um jogo chamado Tibia.
              </p>
              <ul>
                <h3>
                  <ChatIcon color="primary" fontSize="small" />
                  Qual problema estou resolvendo?
                </h3>
                <li>
                  <p>
                    Dentro do jogo exite uma lista VIP, onde os jogadores
                    conseguem adicionar outros jogadores a está lista e saber se
                    eles estão online, está lista tem um limite de jogadores que
                    podem ser adicionados.
                  </p>
                </li>
                <li>
                  <p>
                    <DoneAllIcon color="primary" />
                    Já que dentro do jogo temos este limite de jogadores que
                    podem ser adicionados, criei uma aplicação que não tem
                    limite de jogadores em sua lista VIP.
                  </p>
                  <p>
                    <DoneAllIcon color="primary" />
                    Aproveitei para não só estender o tamanho da VIP, mas também
                    alertar com efeitos sonoros quando muitos jogadores
                    oponentes entram ao mesmo tempo.
                  </p>
                  <p>
                    <DoneAllIcon color="primary" />
                    Criei um campo para deixar anotações sobre cada um dos
                    jogadores que estão presentes nesta lista.
                  </p>
                  <p>
                    <DoneAllIcon color="primary" />
                    Além desta lista não conter limite de tamanho ela também
                    pode ser compartilha com seus aliados, assim podemos criar
                    uma lista de oponentes onde todos os aliados tem acesso as
                    mesmas informações.
                  </p>
                  <p>
                    <DoneAllIcon color="primary" />
                    Implementei uma seção de LOGS onde fica registrado o horário
                    que determinado jogador se conectou e também o horário que
                    ele se desconectou.
                  </p>
                  <p>
                    <DoneAllIcon color="primary" />
                    Além de separar a lista em três categorias:
                  </p>
                  <p>
                    <DoneAllIcon color="primary" />
                    "Main" são considerados os personagens principais dos
                    jogadores, na maioria das vezes esses personagens não são
                    usados para batalhas.
                  </p>
                  <p>
                    <DoneAllIcon color="primary" />
                    "Bomb" estes são os personagens de batalha, quando eles
                    estão online as chances de ocorrer batalhas são altas.
                  </p>
                  <p>
                    <DoneAllIcon color="primary" />
                    "Maker" estes também são utilizados para as batalhas porem
                    tem os menores poderes de batalha, são muito utilizados para
                    obstruir a passagem de alguns locais, impossibilitado os
                    oponetes de entrarem para batalhar e salvar seu alidado.
                  </p>
                </li>
              </ul>
              <ul>
                <h3>
                  <PhonelinkIcon color="primary" fontSize="small" />
                  Como o front-end foi desenvolvido?
                </h3>
                <li>
                  <h4>Tecnologias</h4>
                  <div>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      NextJS
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      Typescript
                    </p>
                  </div>
                </li>
                <li>
                  <h4>Libs</h4>
                  <div>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      material-ui
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      auto-animate
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      hook form
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      nodemailer
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      axios
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      cheerio
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      copy-to-clipboard
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      jsonwebtoken
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      node-cache
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      google recaptcha
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      toastify
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      socket.io
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      styled components
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      nextjs-cors
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      yup
                    </p>
                  </div>
                </li>
                <li>
                  <h4>Descrição</h4>
                  <div>
                    <p>
                      Como o jogo Tibia não possui uma API, tive que utilizar o
                      cheerio para pegar informações do site tibia.com
                    </p>
                    <p>
                      Com os dados em mãos consigo atualizar a lista VIP em
                      tempo real e manter os usuários sempre com dados recentes.
                    </p>
                    <span>
                      <p>Páginas:</p>
                      <p className="color-1">
                        <span>
                          /home <ArrowRightAltIcon color="primary" />
                        </span>
                        <div>
                          na página principal tem uma lista de todos os
                          servidores que existe no jogo e a quantidade de
                          jogadores online em cada um deles. E um input para
                          efetuar buscas de jogadores para pegar informações
                          como level, vocação e outras informações do
                          personagem.
                          <button onClick={() => setModalGuild(true)}>
                            Exemplo
                          </button>
                        </div>
                      </p>
                      <p className="color-1">
                        <span>
                          /register <ArrowRightAltIcon color="primary" />
                        </span>
                        <div>
                          página para criar cadastro dos usuários.
                          <button onClick={() => setModalGuild(true)}>
                            Exemplo
                          </button>
                        </div>
                      </p>
                      <p className="color-1">
                        <span>
                          /login <ArrowRightAltIcon color="primary" />
                        </span>
                        <div>
                          página para o usuário se autenticar.
                          <button onClick={() => setModalGuild(true)}>
                            Exemplo
                          </button>
                        </div>
                      </p>
                      <p className="color-1">
                        <span>
                          /recovery <ArrowRightAltIcon color="primary" />
                        </span>
                        <div>
                          página para o usuário recuperar a senha caso tenha
                          esquecido ou perdido.
                          <button onClick={() => setModalGuild(true)}>
                            Exemplo
                          </button>
                        </div>
                      </p>
                      <p className="color-1">
                        <span>
                          /bosseshunter <ArrowRightAltIcon color="primary" />
                        </span>
                        <div>
                          página para mostrar possíveis invasão de bosses em
                          cada um dos servidores do jogo.
                          <button onClick={() => setModalGuild(true)}>
                            Exemplo
                          </button>
                        </div>
                      </p>
                      <p className="color-1">
                        <span>
                          /dashboard <ArrowRightAltIcon color="primary" />
                        </span>
                        <div>
                          nesta página o usuário pode vincular o seu personagem
                          com o seu cadastro dessa forma ele tem acesso as
                          informações do seu time e a lista VIP. Para vincular o
                          personagem ao cadastro o usuário precisa digitar uma
                          chave que eu forneço na hora do cadastro no comentário
                          do seu personagem no site do tibia.com, desta forma
                          consigo garantir que o personagem cadastrado e
                          realmente deste usuário. Se o personagem for Lider do
                          time automáticamente ele ganha status de ADMIN e suas
                          permissões no site, desta forma podemos garantir que
                          todos os lideres do time tem permissão de
                          administrador. Como administrador o lider pode
                          adicionar um time oponente desta forma a aplicação faz
                          uma busca no site tibia.com ao encontrar o time
                          oponente cadastrado ele adiciona todos os membros a
                          lista VIP. Dentro deste painel o administrador tem uma
                          rota para adicionar, remover e editar oponentes da
                          lista VIP e também deletar o time oponente todo de uma
                          vez. Além de contar com uma lista de todos os membros
                          do seu próprio time podendo conceder permissões para
                          outros membros.
                          <button onClick={() => setModalGuild(true)}>
                            Exemplo
                          </button>
                        </div>
                      </p>
                      <p className="color-1">
                        <span>
                          /guild <ArrowRightAltIcon color="primary" />
                        </span>
                        <div>
                          nesta página temos as informações sendo passadas para
                          o usuário em tempo real. Um painel com status da
                          quantidade de jogadores que se encontram na lista VIP
                          online. Um painel com os LOGS mostrando o momento
                          exato que determinado jogador conectou e desconectou
                          do jogo. Três paineis mostrando os jogadores online
                          sendo separados por "Main", "Bomb" e "Maker". Alertas
                          sonoros personalizados por quantidade e tempo online.{" "}
                          <button onClick={() => setModalGuild(true)}>
                            Exemplo
                          </button>
                        </div>
                      </p>
                    </span>
                  </div>
                </li>
              </ul>
              <ul>
                <h3>
                  <PhonelinkIcon color="primary" fontSize="small" />
                  Como o back-end foi desenvolvido?
                </h3>
                <li>
                  <h4>Tecnologias</h4>
                  <div>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      ExpressJS
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      Typescript
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      PostgreSQL
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      TypeORM
                    </p>
                  </div>
                </li>
                <li>
                  <h4>Libs</h4>
                  <div>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      jsonwebtoken
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      nodemailer
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      socket.io
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      axios
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      bcryptjs
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      pg
                    </p>
                    <p>
                      <FormatAlignJustifyIcon
                        color="primary"
                        fontSize="small"
                      />
                      yup
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </StyledPortfolio>
    </>
  );
}
