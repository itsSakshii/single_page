import PropTypes from 'prop-types';

function Item({ items }) {
    return (
        <>
            {items.map((item, index) => (
                <div key={index} className="card">
                    <div className="text-vertical">
                        <span>Explore Our <span className="text-title">{item.name.split(" ")[1]}</span></span>
                    </div>
                    <div className="image">
                        <img src={item.photoName} alt={item.name} className="bread-image" />
                    </div>
                    <div className="bread-card">
                        <div className="bread-details">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <button className="primary-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

Item.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        photoName: PropTypes.string.isRequired,
    })).isRequired,
};

export default Item;