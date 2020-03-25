import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import { useMasterGame, addPlayer } from '../services/MasterGame';
import styled from "styled-components";
import Input from "../components/Input";

const CodeText = styled.p`
  width: 100%;
  display: block;
  font-size: 3em;
  color: #888;
  font-weight:bold;
  text-align: center;
`

const AddPlayerForm = () => {
  const [value, setValue] = useState('');
  const { game } = useMasterGame();
    console.log("master game id", game.id);
    console.log("master game set ", game.players);
    console.log("master game", game);

  const handleSubmit = e => {
    e.preventDefault();
    value && addPlayer(value, game);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Ajouter le nom d'un joueur..."
        onChange={e => setValue(e.target.value)}
      />
      <Button>+</Button>
    </form>
  );
};

const CreatePage = (props) => {
  const { game } = useMasterGame();
  const players = game.players || [];

  return (
    <div>
      <p>Identifiant de la partie :</p>
      <CodeText>{game.code}</CodeText>
      <h1>Vos amis peuvent se connecter avec ce code.</h1>
      <div>
        {players.map((player, index) => (
          <div key={index}>
            {player.name}
          </div>
        ))}
      </div>
      <Link to="/night">
          <Button>Démarrer la partie</Button>
      </Link>
    </div>
  );
};

export default CreatePage;
