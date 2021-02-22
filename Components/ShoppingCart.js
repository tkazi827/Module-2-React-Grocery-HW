class ShoppingCart extends React.Component {
    render () {
      return (
        <li>
            {this.props.item.item }  {this.props.item.brand}
        
        </li>
      )
    }
  }