const Chest = ({ chestName, chestIndex }) => {
    return (
        <div className="chest position-relative">
            <img
                title={chestName}
                src={`/chests/${chestName
                    .toLowerCase()
                    .replace(/\s+/g, "-")}.png`}
                alt={chestName}
                className="chest-img"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-content="Bottom popover"
            />
            <span className="order text-shadow">
                {chestIndex == 0 ? "Next" : "+" + chestIndex}
            </span>
        </div>
    )
}
export default Chest