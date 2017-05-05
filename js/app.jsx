import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import data from './data.jsx';


document.addEventListener('DOMContentLoaded', function(){

    class NavContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                windowWidth: window.innerWidth,
                mobileNavVisible: false,
                items: {data},
                addClass: '',
            };
            console.log(window.innerWidth)
        };

        handleResize(){
            this.setState({
                windowWidth: window.innerWidth,
            });
        }

        componentWillMount(){
            this.handleResize();
        }

        componentDidMount() {
            window.addEventListener('resize', this.handleResize=()=>{this.setState({windowWidth: window.innerWidth})});
            window.addEventListener('resize', this.handleResize=()=>{this.setState({mobileNavVisible: false})});
        }

        componentWillUnmount(){
            window.removeEventListener('resize', this.handleResize=()=>{this.setState({windowWidth: window.innerWidth})});
            window.removeEventListener('resize', this.handleResize=()=>{this.setState({mobileNavVisible: false})});
        }


        handleNavClick(){
            if(!this.state.mobileNavVisible){
                this.setState({
                    mobileNavVisible: true,
                });
            } else {
                this.setState({
                    mobileNavVisible: false,
                });
            }
          console.log('you clicked me ... ' +  this.state.mobileNavVisible);
        };

        navigationLinks(){
            let item = this.state.items.data;
            let newClass = this.state.addClass;
            let arrayMenu = [];
            item.map((value, i)=>{
                arrayMenu.push(<li className="nav-normal" key={i}>{value.text} - {value.url}</li>);
            });
            return arrayMenu;
        }

        renderMobileNav() {
            if(this.state.mobileNavVisible){
                let item = this.state.items.data;
                let newClass = this.state.addClass;
                let arrayMenu = [];
                item.map((value, i)=>{
                    arrayMenu.push(<li key={i}>{value.text} - {value.url}</li>);
                });
                return arrayMenu;
            }
        }

        renderNavigation() {
            if(this.state.windowWidth <= 800) {
                return <div>
                            <i onClick={e=>this.handleNavClick(e)} className="fa fa-bars fa-2x" aria-hidden="true"></i>
                            <ul className="nav-mobile">
                                {this.renderMobileNav()}
                            </ul>
                    </div>
                ;
            } else {
                return <div>
                            <ul>
                                {this.navigationLinks()}
                            </ul>
                    </div>
                ;
            }
        }

        render() {
            return (
                <div>
                    <nav>
                        {this.renderNavigation()}
                    </nav>
                </div>
            );
        }
    }

    ReactDOM.render(
        <NavContainer />,
        document.getElementById('app')
    );
});