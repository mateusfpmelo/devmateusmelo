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
        <Image src={"/header.png"} width={480} height={480} alt={"Foto Mateus Melo"} layout="responsive" />
      </header>

      {/* Education Section */}
      <section className={styles.section}>
            <div className={styles.card}>
              <h3 className="">Pós Graduação</h3>
              <p className="">Desenvolvimento Mobile Multiplataforma</p>
              <p className="">DESCOMPLICA</p>
              <p className="">Conclusão: 2023</p>
            </div>
            <div className={styles.card}>
              <h3 className="">Trilha Front-End</h3>
              <p className="">ALURA</p>
              <p className="">Conclusão: 2023</p>
            </div>
            <div className={styles.card}>
              <h3 className="">Full Stack developer #2</h3>
              <p className="">DIGITAL INNOVATION ONE</p>
              <p className="">Conclusão: 2022</p>
            </div>
            <div className={styles.card}>
              <h3 className="">Bacharelado</h3>
              <p className="">Arquitetura e Urbanismo</p>
              <p className="">UNA</p>
              <p className="">Conclusão: 2022</p>
            </div>
      </section>

      {/* Projects Section */}
      <section className="">
        <h2 className="">
          Desenvolvedor Front-end a mais de dois anos! :)
        </h2>
        <p className="">E aqui estão alguns projetos:</p>

        {/* Project divs */}
        <div className="">
          <div className="">
            <div>
              <h3 className="">
                Desenvolvimento de Plataforma Web para Gestão de Negociações com Clientes
              </h3>
              <p className="">
                Desenvolvi uma aplicação web que permite a consulta de dados de clientes a partir de um número de telefone ou CPF/CNPJ, além de possibilitar a integração com API. O gestor de contas pode solicitar opções de negociação, que são apresentadas na interface para facilitar a concretização de acordos.
              </p>
            </div>
            <div className="">
              <Image
                src="/placeholder.svg"
                alt="Project screenshot"
                width={600}
                height={400}
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="">
        <div className="">
          <div className="">
            <div>
              <p>(31) 9 9999-9999</p>
              <p>Centro, Belo Horizonte/MG</p>
              <p>meuemail@email.com</p>
            </div>
            <div className="">
              <a href="#" className="">
                Github
              </a>
              <a href="#" className="">
                Instagram
              </a>
              <a href="#" className="">
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
