

const UserCard = ({ name, age }) => {
  return (
    <div className="userCard">
      <h2>Name:{name}</h2>
      <h2>Age:{age}</h2>
    </div>
  );
};

export default UserCard;
