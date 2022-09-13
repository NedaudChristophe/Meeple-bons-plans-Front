import axios from 'axios';
import {
  FETCH_DEAL,
  SEARCH_GAME,
  FETCH_ONE_DEAL,
  ADD_DEAL_SUMIT_FORM,
  saveDeal,
  saveOneDeal,
  addComment,
  SEARCH_GAME_HEADER,
  SAVE_COMMENT,
  saveGameData,
  FETCH_SHOPS,
  saveShops,
  NEW_GAME,
  ToggleAddGame,
  OnChangeGame,
  OnChangeUrl,
  FETCH_NEWS,
  fetchNews,
  saveNews,
  
} from '../actions/deal';
import { disconnect, setPopupMessage } from '../actions/user';

/* IMAGE POUR COMPRENDRE => le middlewares est un SAVANT qui sait tout (connecté a l'api),
Le reducer est un ECRIVIAN qui est le seul a detenir un manuscrit (le stat),
le messager (le dispatch) chargé de raconter les nouvelles (_ACTION_)
de la ville à l'écrivain qui les note dans son manuscrit).
l'espion avec ses jumelle peut copier les infos que l'ecrivain à mis dans le manuscrit
sans pouvoir les changer (UseSelector) pour envoyer les data dans les composants.
LE SAVANT ENVOIE UNE INFORMATION A L ECRIVAIN QUI LORSQU'IL A UNE INFO L'INSCRIT*/

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const dealMiddleware = (store) => (next) => (action) => {
 
  const state = store.getState();
  
  const { token, currentUserId } = state.user;

  switch (action.type) {
    // RECUPERATION DE LA LISTE DE TOUS LES DEALS DEPUIS L'API AU CHARGMEENT INITIAL DU SITE
    case FETCH_DEAL: {
      axios.get('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals')
        .then((response) => {
          console.log('Response API récupération de tous les deals', response.data);
          // On envoie le resultat de la requête au reducer qui sera chargé de l'ecriture
          store.dispatch(saveDeal(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      return next(action);
    }
    case NEW_GAME: {
      const { newGame, urlGame } =state.deal.addDealForm;
      axios.post('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/new/game',
      {
        name: newGame,
        url: urlGame,
      },
      {
          headers: {
            Authorization: `bearer ${token}`,
          },
        })
        .then((response) => {
          console.log('Response API envoi de nouveau jeu', response.data);
          // On envoie le resultat de la requête au reducer qui sera chargé de l'ecriture
          store.dispatch(setPopupMessage('Votre suggestion de jeu est bien enregistrée, merci de votre contribution !'));
          setTimeout(() => {
          store.dispatch(setPopupMessage(''))
    }, 3800);
          store.dispatch(ToggleAddGame());
          store.dispatch(OnChangeGame(''));
          store.dispatch(OnChangeUrl(''));
          
        })
        .catch((error) => {
          console.log(error);
        });
      return next(action);
    }
    // RECHERCHE DE JEUX DEPUIS L'API POUR FORMULAIRE AJOUT DE BON PLAN
    case SEARCH_GAME: {
      const gameToSearch = action.searchedGame;
      axios
        .post(
          "http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/games/byname", {
            name: gameToSearch,
          },)
        .then((response) => {
          console.log('Response API DE LA RECHERCHE DE JEU', response.data);
          store.dispatch(saveGameData(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      return next(action);
    }
    case FETCH_ONE_DEAL: {
      axios
        .get(
          `http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals/${action.dealId}`,
          
        )
        .then((response) => {
          // Ici on recup bien les données de notre API (les recettes)
          // On veut maintenant les rajouter dans le state
          // Pour ça on va dispatcher une action (l'intention de mémoriser les recettes)
          // store.dispatch(saveDeal(response.data));
          console.log("Response API DU DEAL", response.data);
          // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
          store.dispatch(saveOneDeal(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      return next(action);
    }

    //Reception des boutiques
    case FETCH_SHOPS: {
      axios
        .get('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/shops')
        .then((response) => {
          // Ici on recup bien les données de notre API (les recettes)
          // On veut maintenant les rajouter dans le state
          // Pour ça on va dispatcher une action (l'intention de mémoriser les recettes)
          // store.dispatch(saveDeal(response.data));
          console.log("Response API SHOPS", response.data);
          // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
          store.dispatch(saveShops(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      return next(action);
    }
    //Reception des actus
    case FETCH_NEWS: {
      axios
        .get('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/articles')
        .then((response) => {

          console.log('coucou');
          console.log("Response API NEWS", response.data);
          // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
          store.dispatch(saveNews(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      return next(action);
    }
    // FORMULAIRE D'AJOUT DE BON PLAN
    case ADD_DEAL_SUMIT_FORM: {
      const {
        dealTitle,
        dealGame,
        dealDescription,
        dealURL,
        discountedPrice, // à transformer en number
        shippingPrice,
        discountCode,
        concernAGame, // à transformer en id de dealGame si false
        dealVendor, // à transformer en number
        newGame, // à voir pour ajout de jeu ?.
        urlGame, // Manque le user ? ou mais il faudra le piocher ailleurs dans le state
      } = state.deal.addDealForm;

      const { choosedGame } = state.deal;
      console.log('choosedgame', choosedGame);
      //
      let gameID = 0;
      if (choosedGame==='') {
        gameID = 1;
      }else {
        gameID = choosedGame[0].id;
      }
      //on doit récupérer l'id de l'utilisateur connecté 
      axios
        .post(
          'http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals', {
            title: dealTitle,
            description: dealDescription,
            url: dealURL,
            offerPrice: parseInt(discountedPrice, 10),
            // endDeal: expirationDate, // paramètre optionnel
            shop: parseInt(dealVendor, 10),
            type: 1,
            game: gameID,
            user: parseInt(currentUserId, 10), // ajouter ici au lieu du "1" l'ID du user connecté qui envoie le deal
            shippingCost: parseInt(shippingPrice, 10), // paramètre optionnel
            promoCode: discountCode, // paramètre optionnel

          }, {
            headers: {
              Authorization: `bearer ${token}`,
            },
          },
        )
        .then((response) => {
          console.log("Passage dans l'ajout de bon plan dans dealMiddleware", response.data);
          // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
          // store.dispatch(saveFromAddDeal(response.data));
          store.dispatch(setPopupMessage('Bon plan envoyé !'));
          setTimeout(() => {
          store.dispatch(setPopupMessage(''))
          }, 3800);

          location.replace('/');
        })
        .catch((error) => {
          console.log(error);
          location.replace('/');
        });
      return next(action);
    }
    case SAVE_COMMENT: {
      const { currentUserId } = state.user;
      const { userComment } = state.deal;
      const { id } = state.deal.activeDeal;

      const parseIntUserId = parseInt(currentUserId, 10);
      console.log('user: ', parseIntUserId);
      console.log('deal: ', id);
      console.log('comment: ', userComment);
      
      //
      axios.post('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/comments', {
        comment: userComment,
        deal: id,
        user: parseIntUserId,
      }, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }).then((response) => {
        console.log('Response API envoi de commentaire', response.data);
        // On envoie le resultat de la requête au reducer qui sera chargé de l'ecriture
        // TODO vider le champs de commentaire
        store.dispatch(addComment(''));
        window.location.reload();
        })
        .catch((error) => {
          console.log(error);
          if(error.request.status === 401) {           
            store.dispatch(disconnect('Token expiré'));            
          }

        });
      return next(action);
    }
    // chercher un jeu depuis la barre de recherche
    /*case SEARCH_GAME_HEADER: {
      axios
        .get("http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals", {
        }, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
        )
      .then((response) => {
        console.log('!!!!!!Response API récupération de tous les dedeals', response.data);
          //ICIONMANIPULELESDATA;
          store.dispatch(saveDeal(response.data));
          return next(action);
        })
        .catch((error) => {
          console.log(error);
          return next(action);
        });
      return next(action);
    }*/
    default:
      return next(action);
  }
};

export default dealMiddleware;
