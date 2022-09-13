/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} dealList - liste de tous les deals
 * @param {string} searchedDealID - l'id de la catégorie recherchée
 * @return {Array} - Tableau des deals corespondants à la catégorie renseignée
 */
export function filterDealOfOneCategory(dealList, categoryId) {
  const deal = dealList.filter((testedDeal) => {
    // TODO remettre un === mais attention que ce soit deux types identiques
    return (testedDeal.game.category.id == categoryId && testedDeal.status === true);
  });
  return deal;
}
/**
 * @param {Array} reviewList liste des reviews du deal
 * @param {number} userId id de l'utilisateur connecté (ou '' si pas connecté = state vide)
 */
export function arrayOfResults( reviewList, userId) {
  //Array de résultats:
  let results = {
    totalVote: 0,
    rightToVote: true,
    flameIconIsVisible: true,
    iceIconIsVisible: true,

  }
  // CALCUL DES VOTES 
  /** 
   * total des votes à afficher
   */
  let totalVoteNumber = 0;
  reviewList.map((review) => (
    totalVoteNumber = totalVoteNumber  + review.vote
  ))
  // Ajout du calcul dans le tableau de résultats :
  results.totalVote = totalVoteNumber; 

  // EST-CE QUE L'UTILISATEUR A DEJA VOTÉ ?
  const userVoteReview = reviewList.find(review => review.user.id == userId);
  let canVote;
  if (userVoteReview === undefined){
    canVote = true;
  }else{
    canVote = false;
  }
  console.log('userVoteReview', userVoteReview);
 

  // Ajout du calcul dans le tableau de résultats :
  results.rightToVote = canVote; 

  // On sors de la fonction si l'utilisateur n'a pas encore voté, car il a le droit de voter
  if (canVote === true) {
    return results;
  };

  // ON ARRIVE ICI SI L'UTILISATEUR A DEJA VOTÉ, ON DETERMINE DONC QUEL A ETE SON VOTE
  // userVoteReview est le vote où l'utilisateur a participé

  if(userVoteReview.vote === 1){
    results.iceIconIsVisible = false;
  };
  if(userVoteReview.vote === -1){
    results.flameIconIsVisible = false;
  };
  
  return results;
}
