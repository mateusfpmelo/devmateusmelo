import Image from "next/image";
import styles from '@/app/page.module.css';

export default function Page() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.htxt}>
          <div className={styles.txtinf}>
            <h1 className="">Dev</h1>
            <h2 className="">Web</h2>
            <h4>MATEUS MELO</h4>
          </div>
          <p className="">
            Apaixonado por tecnologia e encantado pela lógica por trás das soluções digitais, transitei para a área de desenvolvimento web  em 2021. Sou pós-graduado em Projetos de Aplicativos Móveis Multiplataforma e formado em Arquitetura e Urbanismo pela UNA. Minha paixão pela lógica e minha habilidade em resolver problemas impulsionaram essa mudança de carreira. Minhas especialidades incluem React, Next.js e Python, além de experiência em consumo de APIs. Desenvolvo sites, aplicativos internos, landing pages e layouts com foco em funcionalidade.
          </p>
          <div className={styles.divskil}>
            <b>
              Skills
            </b>
            <div className={styles.skills}>
              {['Next.js', 'React', 'GitHub', 'Python', 'Docker', 'Figma', 'Photoshop'].map((skill) => (
                <div key={skill} className="">
                  {skill}
                </div>
              ))}

            </div>
          </div>
        </div>
        <Image src={"/img/header1.png"} width={480} height={480} alt={"Foto Mateus Melo"} layout="responsive" />
      </header>

      {/* Projects Section */}
      <section className={styles.projects}>
        <div className={styles.devweb}>
          <h4>Desenvolvedor Web desde 2022! :)</h4>
          <b>Alguns projetos:</b>
        </div>
        {/* Project divs */}
        <div className={styles.projectsrow}>
          <div className={styles.pjttxt1}>
            <h3 className="color1">
              Desenvolvimento de Plataforma Web para Gestão de Negociações com Clientes
            </h3>
            <p className="">
              Desenvolvi uma aplicação web que permite a consulta de dados de clientes a partir da matrícula. Onde o gestor de contas pode solicitar opções de negociação, que são apresentadas na interface para facilitar a concretização de acordos. Resultando em redução de custos aplicativos terceiros agora que só neste app voce faz todo o processo de negociação.
            </p>
          </div>
          <Image
            src="/img/negoc.png"
            alt="Project screenshot"
            width={400}
            height={250}
            className={styles.imgnegociation}
          />
        </div>
        <div className={styles.txtproject2}>
          <h3 className="color3">
            Desenvolvimento de Solução Escalável para Gestão de Campanhas e Cadastro de Clientes
          </h3>
          <p className={styles.cardproject}>
            Contribuí para o desenvolvimento de uma aplicação inovadora, projetada para substituir uma ferramenta obsoleta e limitada em escalabilidade. Essa nova solução, criada com foco na experiência do usuário, possibilita uma gestão otimizada de cadastros de clientes e campanhas de comunicação via e-mail e SMS. Entre as funcionalidades destacam-se: cadastro detalhado de clientes com informações personalizadas, criação de campanhas segmentadas, configuração intuitiva de modelos de mensagens e um recurso prático para testes de disparos. A aplicação oferece maior eficiência e automação nos processos, impulsionando a comunicação estratégica e ampliando o alcance das campanhas.
          </p>
        </div>
        <div className={styles.txtproject3}>
          <h3 className="color1">
            Criação de Sites e Landing Pages Interativas
          </h3>
          <p>
            Transformei layouts em código funcional, desenvolvendo sites e landing pages interativas com o uso de Next.js e React, sempre priorizando uma experiência do usuário fluida e eficiente. As páginas foram cuidadosamente estruturadas para apresentar informações de maneira clara e atrativa, garantindo navegação intuitiva e acessibilidade. Se você deseja conferir alguns exemplos, entre em contato comigo e compartilho os links!
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.section}>
        <div className={styles.contentorg}>
          <div className={styles.titlesection}>Formação</div>
          <div className={styles.contentsection}>
            <div className={styles.card}>
                <h3 className="">Pós Graduação</h3>
                <p className="">Desenvolvimento de Aplicações Móveis Multiplataforma - DESCOMPLICA(2023)</p>
              </div>
              <div className={styles.card}>
                <h3 className="">Trilha Front-End</h3>
                <p className="">ALURA(2023)</p>
              </div>
              <div className={styles.card}>
                <h3 className="">Full Stack developer #2</h3>
                <p className="">DIGITAL INNOVATION ONE(2022)</p>
              </div>
              <div className={styles.card}>
                <h3 className="">Bacharelado</h3>
                <p className="">Arquitetura e Urbanismo - UNA(2022)</p>
              </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footercontent}>
          <div className={styles.footerperson}>
            <p>(31) 9 99455-6653</p>
            <p>Funcionários, Belo Horizonte/MG</p>
            <p>mateusfpmelodev@gmail.com</p>
            <a href="https://wa.me/5531994556653?text=Olá,%20gostaria%20de%20saber%20mais%20informações." className="" target="_blank">
              <Image src={"/img/wpp.png"} width={25} height={25} alt={"Logo Whatsapp"}  />
            </a>
          </div>
          <div className={styles.footersocial}>
            <a href="https://github.com/mateusfpmelo" className="">
              <Image src={"/img/github.png"} width={25} height={25} alt={"Logo github"}  />
            </a>
            <a href="https://instagram.com/mateusfpmelo" className="">
              <Image src={"/img/insta.png"} width={25} height={25} alt={"Logo instagram"}  />
            </a>
            <a href="https://www.linkedin.com/in/mateusfpmelo/" className="">
              <Image src={"/img/linkedin.png"} width={25} height={25} alt={"Logo linkedin"}  />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
