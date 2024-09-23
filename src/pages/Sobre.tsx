import React from "react";

const Sobre = () => {
  return (
    <div className="sobre-container">
      <h1>Sobre Mim</h1>
      <img
        className="profile-image"
        src="https://wallpapers.com/images/high/goku-pictures-lr2zkjbx7yvnsaq7.webp"
        alt="Hian Gabriel Moreira Marques"
      />
      <h2>Nome: Hian Gabriel Moreira Marques</h2>
      <h3>Profissão: Assistente Executivo e Desenvolvedor Frontend</h3>
      <p>
        Olá! Sou Hian, um assistente executivo apaixonado por tecnologia e
        desenvolvimento. Tenho experiência em frontend, com habilidades em
        JavaScript, React, CSS e HTML. Estou sempre buscando aprender novas
        ferramentas e técnicas para aprimorar minhas habilidades e tornar os
        processos mais eficientes, especialmente em automação com plataformas
        no-code.
      </p>
      <h3>Habilidades</h3>
      <ul>
        <li>Desenvolvimento Frontend (React, JavaScript, HTML, CSS)</li>
        <li>Gerenciamento de Projetos e Equipes</li>
        <li>Automação de Processos com No-Code (WeWeb, Supabase)</li>
        <li>Versionamento de Código com Git</li>
        <li>Experiência com Ferramentas como Figma e Vercel</li>
        <li>Excelência em Atendimento ao Cliente</li>
      </ul>

      <h3>Formação e Certificações</h3>
      <ul>
        <li>Formado em Análise e Desenvolvimento de Sistemas</li>
        <li>Certificado em JavaScript e React pela Udemy</li>
        <li>Certificação em Supabase e Ferramentas No-Code</li>
      </ul>

      <h3>Interesses</h3>
      <ul>
        <li>Jogos Eletrônicos (League of Legends, CS:GO)</li>
        <li>Filmes e Séries (Marvel, Star Wars)</li>
        <li>Esportes e Atividades ao Ar Livre</li>
        <li>Aprendizado Contínuo e Desenvolvimento Pessoal</li>
      </ul>
      <a className="github-link" href="https://github.com/Backstrenn">
        Visite meu GitHub
      </a>
    </div>
  );
};

export default Sobre;
