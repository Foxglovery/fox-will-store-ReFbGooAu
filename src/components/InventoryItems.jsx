import freshIcon from "../assets/fresh.png";
import expiredIcon from "../assets/dead-fish-white.png";
import PropTypes from "prop-types";

const InventoryItem = ({ item, categories, removeItem }) => {
  // Helper function to compute the card's style
  const getCardStyle = () => {
    const dateAdded = new Date(item.dateAdded);
    const now = new Date();
    const elapsedDays = (now - dateAdded) / (1000 * 60 * 60 * 24);
  
    let totalDays;
    if (item.expirationDate) {
      const expiration = new Date(item.expirationDate);
      totalDays = (expiration - dateAdded) / (1000 * 60 * 60 * 24);
    } else {
      const cat = categories.find((c) => c.id === item.category);
      totalDays = cat && cat.shelfLife ? cat.shelfLife : 7; // default to 7 days
    }
  
    // Days remaining until expiration/shelf life
    const daysRemaining = totalDays - elapsedDays;
  
    // Compute red overlay opacity if within 3 days.
    let overlayAlpha = 0;
    if (daysRemaining <= 3) {
      overlayAlpha = ((3 - daysRemaining) / 3) * 0.5;
    }
  
    // Change text color: use white when the overlay is minimal and switch to black
    // when the red overlay nears its middle phase (around an opacity of 0.25).
    const textColor = overlayAlpha < 0.25 ? "#FFFFFF" : "#000000";
  
    return {
      backgroundImage: `
        linear-gradient(rgba(255,0,0,${overlayAlpha}), rgba(255,0,0,${overlayAlpha})),
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))
      `,
      backgroundBlendMode: "normal",
      transition: "background 0.5s ease",
      padding: "8px",
      marginBottom: "8px",
      cursor: "pointer",
      color: textColor, // dynamically set text color based on overlayAlpha
    };
  };

  return (
    <li onClick={() => removeItem(item.id)} style={getCardStyle()}>
      <div className="item-name">
        <strong>{item.name}</strong>
      </div>
      <div className="date-container">
        <div className="item-added">
          <img
            src={freshIcon}
            alt="Fresh Icon"
            style={{
              width: "16px",
              height: "16px",
              marginRight: "4px",
              verticalAlign: "middle",
            }}
          />
          {new Date(item.dateAdded).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "2-digit",
          })}
        </div>
        {item.expirationDate && (
          <div className="item-expiration">
            <img
              src={expiredIcon}
              alt="Expiration Icon"
              style={{
                width: "16px",
                height: "16px",
                marginRight: "4px",
                verticalAlign: "middle",
              }}
            />
            {new Date(item.expirationDate).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "2-digit",
            })}
          </div>
        )}
      </div>
    </li>
  );
};

InventoryItem.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      dateAdded: PropTypes.string.isRequired,
      expirationDate: PropTypes.string, // Optional
      category: PropTypes.string.isRequired,
    }).isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        shelfLife: PropTypes.number,
      })
    ).isRequired,
    removeItem: PropTypes.func.isRequired,
  };

export default InventoryItem;
