class ItemList extends React.Component {
    state = {
      isPurchased: false
    }
      
    toggleCart = () =>{
      this.setState({isPurchased : !this.state.isPurchased })
    }
    render () {
      return (
        <li onClick={() => this.props.handleAdd(this.props.item)}>{this.props.item.item }  {this.props.item.brand} {this.props.item.units} {this.props.item.quantity} {this.props.isPurchased ? <span> is in the shopping cart! </span> : ''}</li>
      )
      
    }
  }