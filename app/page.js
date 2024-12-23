import Image from "next/image";

export default function Page() {
  return (
    <div className="">
      {/* Header */}
      <header className="">
        <div className="">
          <h1 className="">
            <span className="">Dev</span>
          </h1>
          <h2 className="">Front End</h2>
        </div>
      </header>

      {/* Profile Section */}
      <section className="">
        <div className="">
          <div className="">
            <p className="">
              Apaixonado por tecnologia e encantado pela lógica por trás das soluções digitais, transitei para a área de desenvolvimento web  em 2021. Sou pós-graduado em Projetos de Aplicativos Móveis Multiplataforma e formado em Arquitetura e Urbanismo pela UNA. Minha paixão pela lógica e minha habilidade em resolver problemas impulsionaram essa mudança de carreira. Minhas especialidades incluem React, Next.js e Python, além de experiência em consumo de APIs. Desenvolvo sites, aplicativos internos, landing pages e layouts com foco em funcionalidade.
            </p>
            <div className="">
              {/* Skills */}
              {['React', 'Next.js', 'GitHub', 'Node.js', 'Python'].map((skill) => (
                <div key={skill} variant="outline" className="">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              width={400}
              height={400}
              className=""
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="">
        <div className="">
          <div className="">
            <div className="">
              <h3 className="">Pós Graduação</h3>
              <p className="">Desenvolvimento Mobile Multiplataforma</p>
              <p className="">DESCOMPLICA</p>
              <p className="">Conclusão: 2023</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <h3 className="">Trilha Front-End</h3>
              <p className="">ALURA</p>
              <p className="">Conclusão: 2023</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <h3 className="">Full Stack developer #2</h3>
              <p className="">DIGITAL INNOVATION ONE</p>
              <p className="">Conclusão: 2022</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <h3 className="">Bacharelado</h3>
              <p className="">Arquitetura e Urbanismo</p>
              <p className="">UNA</p>
              <p className="">Conclusão: 2022</p>
            </div>
          </div>
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
