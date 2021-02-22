console.log(items);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: items,
            item: '',
            brand: '',
            units: '',
            quantity: '',
            isPurchased: false,
            cartItems: []
        }
        this.addToCart = this.addToCart.bind(this);
    }

    handleChange = (event) => {
        this.setState( { [event.target.id]: event.target.value } )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity
        }
        this.setState(
            {
                items: [newItem, ...this.state.items],
                item: '',
                brand: '',
                units: '',
                quantity: ''
            }
            )
    }

    addToCart(item) {
        this.setState( { cartItems: [item, ...this.state.cartItems ]})
    }

    render() {
        return(
            <div id="main">
                <h1>Grocery Shopping</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Item: </label>
                    <input type='text' value={this.state.item} onChange={this.handleChange} placeholder='name of item' id='item'/><br></br>
                    <label>Brand: </label>
                    <input type='text' value={this.state.brand} onChange={this.handleChange} placeholder='brand name' id='brand' /><br></br>
                    <label>Units: </label>
                    <input type='text' value={this.state.units} onChange={this.handleChange} placeholder='units' id='units'/><br></br>
                    <label>Quantity: </label>
                    <input type='number' value={this.state.quantity} onChange={this.handleChange} placeholder='quantity' id='quantity' /><br></br>
                    <input type="submit" value="Add to Grocery List" />
                </form>
                <div id="newItems">
                    <h2>New Items on Stock</h2>
                    <h3>{this.state.item}</h3>
                    <h3>{this.state.brand}</h3>
                    <h3>{this.state.units}</h3>
                    <h3>{this.state.quantity}</h3>
                </div>
                <div id="groceryList">
                    <h2>Grocery List</h2>
                    <h4>Click Item to Add to Shopping Cart</h4>
                    <ul>
                        {this.state.items.map (item => {
                            console.log(item)
                            return(
                                <ItemList item={item} handleAdd={this.addToCart}/>)}
                        )
                        }
                    </ul>
                </div>
                <div id="shoppingCart">
                    <h3>Checkout Shopping Cart</h3>
                    <ul>
                        {this.state.cartItems.map(cartItem => <ItemList item={cartItem} />)}
                    </ul>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('container'));