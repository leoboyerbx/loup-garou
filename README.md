# Loup Garou

Ce code reprend le jeu du loup garou pour la dernière séance de cours avec les L2 de l'UGA.

## Déroulement de la séance

- Etant donné que le serveur Discord principal n'a pas de salon pour React, je vous invite sur un [autre serveur](https://discord.gg/qk3TzeV).
- Je suis également disponible toute la journée sur skype -- mon identifiant est pl.guhur.
- Pendant la séance, nous allons travailler sur Material UI et Styled components
- Puis un TP noté va reprendre l'ensemble des notions vues en cours.
- Pensez à cloner ce repo et à répondre aux questions en modifiant directement ce README.

## Sass

Au cas où vous avez un trou de mémoire sur Sass, voici un [rappel de la syntaxe](https://devhints.io/sass).

## Material UI

Je vous invite à regarder la vidéo de [Human Talks Paris](https://www.youtube.com/watch?v=D3tB_DGgICE).

Quelques petites questions :

- Résumer en une phrase l'intérêt de Material UI
  
  - Cela permet d'avoir un ensemble de composants déjà conçus, et cohérents graphiquement, et ergonomiquement. On évite de "réinventer la roue" à chaque projet.

- Comment importer `material-ui` dans un fichier ?
  
  - On utilise cette instruction pour importer un bouton par exemple: 
    
    ```javascript
    import { Button } from '@material-ui/core';
    ```

- Comment une application peut utiliser un thème à travers l'ensemble d'un projet ?
  
  - On Utilise le `MuiThemeProvider`:  on encapsule notre app dans ce component

- A quoi sert `createMuiTheme` ?
  
  - Elle genère un thème utilisable avec le `MuiThemeProvider`

- A quoi correspond `palette` ?
  
  - Elle décrit l'ensemble des couleurs utilisées par l'application

- Comment re-définir des propriétés ?
  
  - Via la clef override

- A quoi vous fait penser `withStyle` ? Comment l'utiliser ?
  
  - Cela fait penser à un HOC pour encapsuler un component dans un Consumer. On l'utilise au moment d'exporter le component (ici `App`)

- Reproduire les deux boutons rouge et bleu présentées dans la vidéo.
```javascript
  import React from 'react';
  import { Button, MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core'
  import { blue } from '@material-ui/core/colors';
  function App(props) {
  return (
    <MuiThemeProvider theme={ theme }>
      <div>
        <Button className={ props.classes.myLeftButton }>Bonjour</Button>
        <Button>Ça va ?</Button>
      </div>
    </MuiThemeProvider>
  )
  }
const styles = {
  myLeftButton: {
    backgroundColor: 'blue'
  }
}

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    fontSize: 15,
    fontFamily: 'Arial'
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: 'red',
        '&:hover': {
          backgroundColor: 'yellow'
        }
      }
    }
  }
})
export default withStyles(styles)(App);
```


## Styled Components

De la même manière, voici une [vidéo](https://www.youtube.com/watch?v=mS0UKNBh-Ig) pour introduire le sujet.

Quelques petites questions :

- Qu'est-ce que le CSS-in-JS ?
    - C'est un procédé qui permet de générer le CSS directement depuis le JS.
- Qu'est-ce que sont les tagged templates (délimitées par des backticks) ?
    - C'est un moyen plus simmple d'écrire des propriétés:
- Donner un exemple d'un bouton personnalisé avec et sans les tagged templates ?

Sans:
```javascript
const Button = styles.button(["color: red"])
```

Avec:

```javascript
const Button = styled.button`
    color: red;
`
```

- Comment utilise-t-on les props dans cette librarie ?
  - Les props reconnues par styledcomponent sonyt passées au DOM de manière transparente. On peut aussi utiliser les props pour faire du style conditionnel, en fonction des props.
- Reprendre l'exemple du Material UI avec styled-components; l'écrire avec la composition et avec l'héritage.

Composition:

```javascript
import React from 'react';
import styled from 'styled-components'

const commonstyles = `
border-radius: 3px;
cursor: pointer;
padding: 8px 16px;
border: none;
`

const ButtonBlue = styled.button`
  ${commonstyles}

  background-color: lightskyblue
`

const ButtonGreen = styled.button`
${commonstyles}

background-color: green
`

function App(props) {
  return (
    <div>
      <ButtonBlue>Bonjour</ButtonBlue>
      <ButtonGreen>Ça va ?</ButtonGreen>
    </div>
  );
}

export default (App);
```

Héritage:

```javascript
import React from 'react';
import styled from 'styled-components'

const commonstyles = `
border-radius: 3px;
cursor: pointer;
padding: 8px 16px;
border: none;
`

const ButtonBlue = styled.button`
border-radius: 3px;
cursor: pointer;
padding: 8px 16px;
border: none;

  background-color: lightskyblue;
`

const ButtonGreen = styled(ButtonBlue)`
background-color: green
`

function App(props) {
  return (
    <div>
      <ButtonBlue>Bonjour</ButtonBlue>
      <ButtonGreen>Ça va ?</ButtonGreen>
    </div>
  );
}


export default (App);
```

- Quelles sont les fonctions du contexte de styled-components ?
  - Les fonctions de contexte de styled permettent de gérer un thème.

## Mise en place du design

Pour mettre en pratique ces notions, je vous propose de designer une application reprenant le principe de jeu du loup garou.

Cette plateforme est entièrement numérique, ce qui permet de s'affranchir d'un maître du jeu, et donc d'avoir un joueur supplémentaire.

A l'initialisation de la partie, un joueur démarre une partie. Un court identifiant est alors communiqué aux autres joueurs, qui doivent rejoindre la partie.
Lorsque tous les joueurs ont rejoint la partie, la partie peut démarrer. Chaque joueur joue à tour de rôle depuis son téléphone.

Une contrainte importante est la synchronisation des joueurs : chaque joueur utilise son propre téléphone. Il reçoit un message lorsque c'est à son tour de jouer, ou attend autrement. Pour résoudre techniquement cette contrainte, tout en évitant d'écrire une application en backend, on utilise Firebase. Firebase permet d'utiliser des observateurs, qui réagissent lors d'un appel extérieur, ce qui donne une impression de temps réel.

Une partie du code vous est fournie, afin de faciliter la mise en place de Firebase et des context providers. Il vous est demandé d'explorer le code, d'y apporter un design responsive, et de compléter l'application pour ajouter les différentes étapes de jeu.

Copier .env dans .env.local et remplir de dernier à l'aide de ses identifiants Firebase.
Activer l'authentification anonyme dans la console de Firebase.

### Découverte du code

- Le code utilise des fonctions plutôt que des classes. Ecrire un bouton sous la forme d'une classe et d'une fonction. Retrouver les équivalences entre les méthodes des composants (telles que setState) et celles des fonctions ?

Bouton Classe:

```javascript
class Button extends React.Component {
  renter {
    const { onClick, children } = this.props;
    return (<button onClick={onClick}> { children }</button>);
  }
}
```

Bouton Function:

```javascript
const Button = (props) => {
  const { onClick, children } = props;
  return (<button onClick={onClick}> { children }</button>);
}
```

Pour utiliser le state, au lieu d'utiliser `setState` on utilise les hooks:

```javascript
const [val, setVal] = React.useState(false)
```

A la place de setState on va utiliser la fonciton setVal définie ici.

Pour les fonctions `ComponentDidMount` et `Component DidUpdate`, on utilise la fonction useEffect:

```javascript
React.useEffect(() => {
    // contenu de componentDidMount
})
```

Si on veut que la fonction soit appelée uniquement sur componentDidMount et pas componentDidUpdate, on passe un tableau vide en deuxième paramètre:

```javascript
React.useEffect(() => {
 // contenu de componentDidMount
}, [])
```

- Comment récupérer les props dans une fonction ?

On spécifie les props en paramètre de la fonction pour y accéder.

- Dans `App.js`, identifier les différents producteurs de données. Retrouver leur définition. Quelles données partagent-ils à l'ensemble de l'application ?
  
  - BrowserRouter: Ce provider partage les fonctions de routage utilisées dans les Routes.
  - UserProvider: Permet à l'application d'accéder aux informations sur l'utilisateur actuellement connecté.
  - MasterGameProvider: Fournit les fonctions pour créer une partie et accéder aux calculs effectués par le Game Master virtuel.
  - GameProvider: fournit les fonctions pour les éléments essentials du jeu.

- Identifier les différentes pages de l'application. Décrire à l'aide d'une phrase le rôle de chacune d'entre elles.
  
  - Alivepage:  La page qui s'affiche quand onest vivant et que ce n'est pas notre tour
  - CastPage: La page pour voter
  - CodePage: La page pour rejoindre une partie
  - CreatePage: La page pour créer une partie
  - DeadPage: La page qui s'affiche quand on est mort
  - EndPage: Fin de partie, affiche les gagnants
  - NightPage: S'affiche pendant la nuit
  - ResultsPage: Les résultats du vote
  - SpellPage: La page pour que la sorcière choisisse ce qu'elle fait
  - StartPage: La page d'accueil

- Pourquoi voit-on sur plusieurs pages "Chargement du master game en cours" ?

Parce que ces pages utilisent le provider MasterGame mais comme la partie n'a pas démarré, il affiche un chargement

- Avec les classes, nous utilisions `withMyContext` pour s'inscrire aux données d'un provider. Identifier dans services/Game.js la fonction qui joue désormais ce rôle.
  
  - C'est la fonction `useGame`

- Dans `CodePage`, rappeler comment un formulaire gère les champs de remplissage des données.
  
  - À chaque modification de la valeur, on stocke la nouvelle valeur dans le state. AU moment du submit, on recupère la valeur stockée dans le state.

### Reprise du design

- En utilisant styled-components, reprendre le design du composant Button.
- Votre nouveau bouton peut alors être utilisé pour améliorer l'affichage de la page `StartPage`.
- Ajouter un header et un footer sur toutes les pages de l'application. 
- Réaliser le design du formulaire de de `CodePage`, utilisé pour rejoindre l'application.
- Faire de même avec `CreatePage`.

### Utilisation de Firebase

- Dans 'User.js', comment fait-on pour garder une trace persistente de l'application, même lorsqu'on rafraichit la page ? Comment reconnait-on l'utilisateur lorsqu'il revient dans l'application ?

On utilise l'objet Auth fourni par FireBase: il permet de garder en mémoire l'utilisateur connecté en lui passant un cookie. La fonction `useSession()` renvoie un context qui fournit l'objet utilisateur connecté à Firebase. La persistence de la session et l'authentification sont gérées par Firebase, ce qui nous évie d'avoir à gérer cela nous-même et nous affranchit de la nécessité d'avoir un backend.

- Dans Firebase, nous ne pouvons pas ajouter des champs à un utilisateur. Par conséquent, nous devons créer une collection d'utilisateurs et synchroniser les utilisateurs avec cette table. Expliquer où est-ce que cette synchronisation a lieu.

Cette synchronisation a lieu dans `useUser`. On récupère l'objet utilisateur connecté, et après on associe l'id unique de l'utilisateur avec un document présent dans le firestore. Si ce document n'existe pas déjà, il est créé.

- A votre avis, à quoi sert useEffect ?

UseEffect permet d'effectuer des actions de manière asynchrone: dans notre cas le contact de FireBase peut prendre du temps donc on utilise useEffect. Cela permet d'effectuer ces actions sans qu'elles bloquent le rendu des components. L'utilisateur ne verra pas une page blanche, mais l'interface apparaît vide, puis se remplit, ce qui permet de rende l'expérience utilisateur plsu fluide.

- A quoi sert la fonction `unsubscribe` utilisée dans les `useEffect` de `User.js` ?

Unsubscribe permet d'arrêter d'attendre des muses à jour de la part de firebase. La ofnction est appelée une fois les actions présentes dans le useEffect sont terminées.

- Décrire les trois valeurs de retour de `UseUser`.

	- `error`: Bool qui indique si il y a une erreur
	- `loading`: Indique si les informations sont encore en cours de chargement ou non
	-  `user`: l'objet user

- Combien de collections dans Firebase pouvez-vous identifier ? A quoi correspondent les `doc` ?

	- Dans Firebase on identifie 2 collections: les utilisateurs dans 'users' et les parties dans 'game'
	- Un document correspond à une entrée dans la collection: on aura un document par utilisateur stocké et un document par partie.

### Contribuer à l'application

- Lors du lancement du jeu, ajouter l'attribution des rôles à chaque joueur : loup-garou, villageois, petite fille ou sorcier. Le nombre de loup-garou est calculé en fonction du nombre de joueurs.
- Chaque joueur reçoit alors une image de son rôle. Partager cette information depuis /wait.
- Lorsque la nuit tombe, la liste des joueurs encore vivants est proposée aux  loups garous, qui doivent se mettre d'accord. Réaliser cette fonction.
- Lorsque le jour arrive, tous les joueurs reçoivent une notification indiquant la cible des loups garous. Cette dernière est redirigée vers DeadPage.
- Les joueurs vivant votent pour éliminer un joueur, suspecté d'être un loup garou. Réaliser cette fonction.

### Rapport

Rédiger un court rapport -- inférieur à une page, expliquant les modifications apportées au projet. Motiver ses choix. Expliquer les difficultés rencontrées.

Mes modifs:
 - Ajout de fontawesome
