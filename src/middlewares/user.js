import axios from 'axios';

import { 
  FETCH_FORM_SIGNIN, 
  FETCH_LOGIN, 
  FETCH_USER_WITH_MAIL,
  VOTE,
  SaveTokenInState, 
  clearLogin, 
  saveEmailInState, 
  toggleIsLogged, 
  toggleVisibility,
  fetchUserWithMail,  
  saveUser,
  DISPLAY_POPUP,
  setPopupMessage,
 } from '../actions/user';
import { useNavigate } from "react-router-dom";
import { Redirect } from 'react-router-dom';



// IMAGE POUR COMPRENDRE => le middlewares est un SAVANT qui sait tout (connecté a l'api), Le reducer est un ECRIVIAN qui est le seul a detenir un manuscrit (le stat), le messager (le dispatch) chargé de raconter les nouvelles (_ACTION_) de la ville à l'écrivain qui les note dans son manuscrit).
// l'espion avec ses jumelle peut copier les infos que l'ecrivain à mis dans le manuscrit sans pouvoir les changer (UseSelector) pour envoyer les data dans les composants.
// LE SAVANT ENVOIE UNE INFORMATION A L ECRIVAIN QUI LORSQU'IL A UNE INFO L'INSCRIT DANS SON MANUSCRIT OU SUPPRIME UNE AUTRE ENTRÉE 

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const userMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const  { token } = state.user;
  switch (action.type) {
    //ici on appelle une action qui va envoyer les champs du stat au back
    
    case FETCH_FORM_SIGNIN: {
      const state = store.getState();
      const { createPseudo, createMail, createPassword, avatarColor } = state.user.createAccount;
      console.log('passage dans middleware user');
      
      //const { user: {email, password}} = store.FETCH_FORM_SINGIN();
      // const api = axios.create({
      // baseURL: 'http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals',
      // });
      //On utilise un token fourni par le back pour s'autentifier sur l'api
      // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTk0NTE4MDIsImV4cCI6MTY1OTUxNjYwMiwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.GdZiaM9Hgt-vDvOfW3pnw1Um5dX58-QZn2Ft7F_7kGgkbOVQMUNPQMWpCT13vbzbx2eu_cbTdXU_2pUGWdSxxu76X79XZZx29wVTX3BOEJOtyIASuNxYscyL4wGxcr4ppA0q3oFEzrmj_6k7JA9ImBzI5TEE4dcOk5ooaYRlCZj2ND-S8IPsWwdGE3R-sik3xuJ4gkQjvBsahAXG_pyxpXavZ2_Q3IBbykU-0saFtMs2cPoTPe_gmODm0EFjBjpAdd_zzLE1dQFt9s4R5Kcx-G6s63gPM-gETx5iV4ET_PMEGHCM461eUzlXewrwY2ntsG6IHOnTkUQycAD-o9ZeUg';
      // api.defaults.headers.common.Authorization = `bearer ${token}`;
      //axios.post('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/users',
      axios.post('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/users',
      
        {name: createPseudo,
        email: createMail,
        password: createPassword,
        avatar: avatarColor,
        },
        // {headers: {
        //   Authorization: `bearer ${token}`,
        // }}
      ).then(
        (response) => {
          // Ici on doit charger l'action d'envoyer les donnes de l'utilisateur en post
          // pour ca, il faut idientifier les datas a envoyer
          // store.dispatch(saveDeal(response.data));
          console.log('Response API', response);
          console.log('jusqu ici tout va bien');
          store.dispatch(setPopupMessage('Compte bien créé, vous pouvez désormais vous connecter'));
          setTimeout(() => {
            store.dispatch(setPopupMessage(''))
          }, 3800);
          
          location.replace('/');
          
          // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
          // store.dispatch(HandleSendDatas(response.data));
        },
      )
        .catch((error) => {
          console.log(error);
        });
      return next(action);
    }
    case VOTE: {
      
      const { currentUserId } = state.user;
      console.log('passage dans middleware user pour le vote');    
      console.log('vote',action.value,'userId',currentUserId,'deal',action.dealId)  
      
      axios.post('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/reviews',
      
        {vote: action.value,
        user: currentUserId,
        deal: action.dealId,
        },
        {headers: {
          Authorization: `bearer ${token}`,
        }}
      ).then(
        (response) => {
          // Ici on doit charger l'action d'envoyer les donnes de l'utilisateur en post
          // pour ca, il faut idientifier les datas a envoyer
          // store.dispatch(saveDeal(response.data));
          console.log('Response API suite au vote', response);
          
          
          window.location.reload();
          
          
          
          // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
          // store.dispatch(HandleSendDatas(response.data));
        },
        )
          .catch((error) => {
            console.log(error);
          });
        return next(action);
    }
    
    case FETCH_LOGIN: {
      const state = store.getState();
      const { email, password } = state.user.loginSettings;
      console.log('passage dans middleware user');
      
      //const { user: {email, password}} = store.FETCH_FORM_SINGIN();
      // const api = axios.create({
      // baseURL: 'http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals',
      // });
      //On utilise un token fourni par le back pour s'autentifier sur l'api
      
      // api.defaults.headers.common.Authorization = `bearer ${token}`;
      //axios.post('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/login_check',
      axios.post('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/login_check',
        {
          username: email,
          password: password,
        },
      ).then(
        (response) => {
          // Ici on doit charger l'action d'envoyer les donnes de l'utilisateur en post
          // pour ca, il faut idientifier les datas a envoyer
          // store.dispatch(saveDeal(response.data));
          console.log('Response API, token => ', response);
          // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture          
          localStorage.setItem('TOKEN', response.data.token);
          localStorage.setItem('UserEmail', email);
          localStorage.setItem('isUserLogged', true);
          store.dispatch(SaveTokenInState(response.data.token));
          store.dispatch(saveUser(email, 'currentUserEmail'));
          store.dispatch(toggleIsLogged());
          store.dispatch(toggleVisibility('isLoginVisible'));
         
          //je charge et sauvegarde les données de l'utilisateur:
          store.dispatch(fetchUserWithMail());
        },
      )
        .catch((error) => {
          console.log(error);
          if(error.request.status === 401) {           
            store.dispatch(clearLogin('Mot de passe ou email incorrect'));            
          }
        });
      return next(action);
    }
    case FETCH_USER_WITH_MAIL: {
      const state = store.getState();
      const { currentUserEmail, token } = state.user;
     //const testMail = email.replace(' ', '');
      console.log('passage dans middleware user');     
      
      
      //axios.post('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/users/custom',
      axios.post(
        'http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/users/custom',
        {email: currentUserEmail
        ,},
        {headers: {
          Authorization: `bearer ${token}`,
        }}
      ).then(
        (response) => {
          // Ici on doit charger l'action d'envoyer les donnes de l'utilisateur en post
          // pour ca, il faut idientifier les datas a envoyer
          // store.dispatch(saveDeal(response.data));

          console.log('Response API, récupération utilisateur avec email => ', response.data);
          localStorage.setItem('UserID', response.data.id);
          localStorage.setItem('UserName', response.data.name);
          localStorage.setItem('UserAvatar', response.data.avatar_image);
          store.dispatch(saveUser(response.data.id, 'currentUserId'));
          store.dispatch(saveUser(response.data.name, 'currentUserPseudo'));
          store.dispatch(saveUser(response.data.avatar_image, 'userAvatar'));

          store.dispatch(setPopupMessage(`Bienvenue ${response.data.name} sur MEEPLE Bons plans !`));
          setTimeout(() => {
            store.dispatch(setPopupMessage(''))
          }, 3800);
          
        },
      )
        .catch((error) => {
          console.log(error);
          if(error.request.status === 401) {           
            store.dispatch(clearLogin('Mot de passe ou email incorrect'));            
          }
        });
      return next(action);
    }
    default:
      return next(action);
  }
};

export default userMiddleware;
