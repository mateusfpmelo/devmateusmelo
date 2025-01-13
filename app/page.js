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
            <h2 className="">Front End</h2>
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
              {['Next.js', 'React', 'GitHub', 'Python', 'Figma', 'Photoshop'].map((skill) => (
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
              Desenvolvi uma aplicação web que permite a consulta de dados de clientes a partir de um número de telefone ou CPF/CNPJ, além de possibilitar a integração com API. O gestor de contas pode solicitar opções de negociação, que são apresentadas na interface para facilitar a concretização de acordos.
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
            Desenvolvimento de uma solução escalável para gestão de campanhas e cadastro de clientes
          </h3>
          <p className={styles.cardproject}>
            Participei da criação de uma nova aplicação, projetada para substituir uma ferramenta anterior sem capacidade de escalabilidade. A nova solução, desenvolvida com foco na experiência do usuário, permite realizar a gestão eficiente de cadastros de clientes e campanhas de disparo de e-mails e SMS. Entre as principais funcionalidades da ferramenta estão: cadastro de clientes com informações de e-mail e centro de custo, criação de campanhas, configuração de modelos de mensagens, além de um mecanismo de disparo de testes. Essa aplicação garante maior agilidade e automação nos processos, otimizando a comunicação e o alcance das campanhas.
          </p>
        </div>
        <div className={styles.txtproject3}>
          <h3 className="color1">
            Desenvolvimento de Site e Landing Pages Interativas
          </h3>
          <p className="">
            Recebi os layouts e implementei alguns códigos de site e de  landing pages interativas, utilizando Next.js e React para garantir uma experiência de usuário otimizada. As páginas foram projetadas para apresentar informações de forma clara e acessível, facilitando a navegação e o acesso às informações. Entra em contato comigo que te mando alguns links!
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.section}>
        <div className={styles.contentorg}>
          <h4>Formação</h4>
          <div className={styles.contentsection}>
            <div className={styles.card}>
                <h3 className="">Pós Graduação</h3>
                <p className="">Desenvolvimento Mobile Multiplataforma</p>
                <p className="">DESCOMPLICA(2023)</p>
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
                <p className="">Arquitetura e Urbanismo</p>
                <p className="">UNA(2022)</p>
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
