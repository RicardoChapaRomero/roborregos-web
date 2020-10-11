import React, { Component } from 'react';
import MemberModal from './MemberModal/MemberModal.js';
import Carousel from 'react-material-ui-carousel'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Modal } from 'react-bootstrap';
import placeholder from 'images/placeholder-rectangle.png';
import { LARGE_WIDTH, MEDIUM_WIDTH, MOBILE_WIDTH } from 'constants.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faCog, faCode, faBullhorn, faRocket } from '@fortawesome/free-solid-svg-icons';
import './MembersGrid.css';

class MembersGrid extends Component {
  constructor(props) {
    super(props);

    this.tryRequire            = this.tryRequire.bind(this);
    this.memberIcon            = this.memberIcon.bind(this);
    this.handleShowModal       = this.handleShowModal.bind(this);
    this.handleHideModal       = this.handleHideModal.bind(this);
    this.numberOfColumns       = this.numberOfColumns.bind(this);
    this.updateNumberOfColumns = this.updateNumberOfColumns.bind(this);
    this.generateGridList      = this.generateGridList.bind(this);
    this.keyFunction           = this.keyFunction.bind(this);
    this.Item                  = this.Item.bind(this);

    this.active_members_keys = this.props.active_members.map(member => (member.id));
    this.inactive_members_keys = this.props.inactive_members.map(member => (member.id));
    
    this.state = {
      show_modal: true,
      member: this.props.active_members[0],
      active: true,
      number_of_columns: this.numberOfColumns(),
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyFunction, false);
    window.addEventListener('resize', this.updateNumberOfColumns);
  }

  numberOfColumns(){
    if (window.innerWidth >= LARGE_WIDTH)
      return 5;
    else if (window.innerWidth >= MEDIUM_WIDTH)
      return 4;
    else if (window.innerWidth >= MOBILE_WIDTH)
      return 3;
    else {
        return 2;
    }
  }

  tryRequire(img_path) {
    try {
      return require('images/members/' + img_path);
    } catch (err) {
      return placeholder;
    }
  }

  keyFunction(event){
    var difference = (event.keyCode === 37)?-1:(event.keyCode === 39)?1:0;
    if(this.state.active && ((this.active_members_keys.indexOf(this.state.member.id) >= this.props.active_members.length - 1 && difference === 1) || (this.active_members_keys.indexOf(this.state.member.id) === 0 && difference === -1))){
      return;
    }else if((this.inactive_members_keys.indexOf(this.state.member.id) >= this.props.inactive_members.length - 1 && difference === 1) || (this.inactive_members_keys.indexOf(this.state.member.id) === 0 && difference === -1)){
      return;
    }
    
    this.handleHideModal();
    if(this.state.active){
      this.setState({
        member: this.props.active_members[this.active_members_keys.indexOf(this.state.member.id) + difference],
      });
    }else{
      this.setState({
        member: this.props.inactive_members[this.inactive_members_keys.indexOf(this.state.member.id) + difference],
      });
    }
    this.handleShowModal(this.state.member);
    //window.alert(this.state.member.name);
  }

  handleShowModal(member, event) {
    this.setState({
      show_modal: true,
      member: member,
      active: this.active_members_keys.includes(member.id),
    });
  }

  handleHideModal() {
    this.setState({
      show_modal: false,
    });
  }

  updateNumberOfColumns() {
    this.setState({
      number_of_columns: this.numberOfColumns(),
    });
  }

  generateGridList(members, title) {
    return (
      <div>
        <div style={{ display: (title === '') ? 'none' : 'block' }} className='grid-title'>
          <h1 className='grid-title-text'>
            { title }
          </h1>
        </div>
        <GridList
          cellHeight={ 'auto' }
          className='members-grid'
          cols={ this.state.number_of_columns }
          spacing={ 3 }
        >
          { members.map(member => (
            <GridListTile
              key={ member.id }
              cols={ 1 }
              className='members-grid-tile'
              onClick={ this.handleShowModal.bind(this, member) }
            >
              <div className='member-image-container'>
                <img
                  className='member-image'
                  src={ this.tryRequire(member.id + '.jpg') }
                  alt={ member.name }
                />
                <div className='member-image-content'>
                  <p>
                    { member.name + ' ' + member.lastname }
                  </p>
                  <div className='member-image-icon'>
                    <FontAwesomeIcon icon={ this.memberIcon(member.role) } size='1x' />
                  </div>
                </div>
              </div>
            </GridListTile>
          )) }
        </GridList>
      </div>
    );
  }

  memberIcon(role) {
    if (role === 'Software Development') {
      return faCode;
    } else if (role === 'Electronics') {
      return faMicrochip;
    } else if (role === 'Mechanical Design') {
      return faCog;
    } else if (role === 'Logistics & Sponsorship') {
      return faBullhorn;
    } else {
      return faRocket;
    }
  }

  Item(member)
  {
      return (
          <MemberModal member={ member } /> 
          // <Paper>
          //     <h2>{props.item.name}</h2>
          //     <p>{props.item.description}</p>
  
          //     <Button className="CheckButton">
          //         Check it out!
          //     </Button>
          // </Paper>
      )
  }

  render() {
    return (
      <div className='members-grid-container'>
        { this.generateGridList(this.props.active_members, '') }
        { this.generateGridList(this.props.inactive_members, 'RoBorregos Legacy') }
        <h1 style={{color: "white"}}>HOLA</h1>
        <div style={{padding: "20px"}}></div>
        <Carousel navButtonsAlwaysVisible={true}> 
          {/* show={ this.state.show_modal } onHide={ this.handleHideModal }> */}
            {
              this.props.active_members.map( (member, i) => this.Item(member) )
            }
        </Carousel>
        {/* <Modal
          show={ this.state.show_modal }
          onHide={ this.handleHideModal }
          dialogAs={ () => <MemberModal member={ this.state.member } onHide={ () => this.handleHideModal() } /> }
        /> */}
      </div>
    );
  }
}

export default MembersGrid;
