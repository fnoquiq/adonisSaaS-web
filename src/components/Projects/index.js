import React from 'react';

import Button from '~/styles/components/Button';

import { Container, Project } from './styles';

const Projects = () => (
  <Container>
    <header>
      <h1>Rocketseat</h1>
      <div>
        <Button onClick={() => {}}>+ Novo</Button>
        <Button onClick={() => {}}>Membros</Button>
      </div>
    </header>

    <Project>
      <p>Projeto Teste 1</p>
    </Project>

    <Project>
      <p>Projeto Teste 2</p>
    </Project>

    <Project>
      <p>Projeto Teste 3</p>
    </Project>

    <Project>
      <p>Projeto Teste 4</p>
    </Project>

    <Project>
      <p>Projeto Teste 5</p>
    </Project>
  </Container>
);

export default Projects;
