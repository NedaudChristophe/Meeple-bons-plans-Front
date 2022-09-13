// == Import
import PropTypesLib from 'prop-types';
import './style.scss';


// == Composant
function Comment({ comment, user}) {
  return (
    <div className="deal-comments com-user">
      <div className="avatar-user-com"><img src={user.avatar.image} alt="profil meeple" id="avatar" />
      </div>
      <div className="comment-textarea">
        <p className="deal-secondarytitle">{user.name}</p>
        <p className="deal-form-response">{comment}</p>
      </div>
    </div>
  );
}

// == Export
export default Comment;
