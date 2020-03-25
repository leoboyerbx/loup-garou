import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from '../services/User';
import { createGame } from '../services/MasterGame';
import Button from "../components/Button";


const Start = () => {
  const { user } = useSession();
  return (
    <div style={styles.container}>
      <Link to="/create" onClick={() => createGame(user)}><Button style={styles.spacedButton}>Nouvelle partie</Button>
      </Link>
      <br />
      <Link to="/join">
        <Button style={styles.spacedButton}>Rejoindre une partie</Button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center'
  },
  spacedButton: {
    margin: 10
  }
}

export default Start;
