import Chest from "../components/chests";

const UpcomingChest = (props) => {
  var content = null;
  var chest = props.upchests;
  if (chest !== null) {
    content = (
      <div className="row">
        {chest.map((chest, index) => (
          <div className="col-3 col-md-3  mb-2" key={index}>
            <Chest chestName={chest.name} chestIndex={chest.index} />
          </div>
        ))}
      </div>
    );
  } else {
    content = <h3 className="text-white text-shadow">Add your tag in Setting</h3>;
  }

  return content;
};

export default UpcomingChest;
