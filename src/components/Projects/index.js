import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '~/styles/components/Button';

import { Container, Project } from './styles';

const Projects = ({ teamActive }) => {
  if (!teamActive) return null;

  return (
    <Container>
      <header>
        <h1>{teamActive.name}</h1>
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
};

Projects.propTypes = {
  activeTeam: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  teamActive: state.teams.active,
});

export default connect(mapStateToProps)(Projects);
