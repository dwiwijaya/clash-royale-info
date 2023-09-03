
const UpcomingChest = (props) => {
  var content = null;
  var chest = props.upchests;
  if (chest !== null) {
    content = (
      <div className="row">
        {chest.map((chest, index) => (
          <div className="col-3 col-md-3  mb-2" key={index}>
            <div className="chest position-relative">
            <img
              title={chest.name}
              src={`/chests/${chest.name
                .toLowerCase()
                .replace(/\s+/g, "-")}.png`}
              alt={chest.name}
              className="chest-img"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="Bottom popover"
            />
            <span className="order">
              {chest.index == 0 ? "Next" : '+' + chest.index}
            </span>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    content = <h3 className="text-white">Add your tag in Settings</h3>;
  }

  return content;
};

export default UpcomingChest;
