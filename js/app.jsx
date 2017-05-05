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
        }

        componentWillUnmount(){
            window.removeEventListener('resize', this.handleResize=()=>{this.setState({windowWidth: window.innerWidth})});
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
            let arrayMenu = [];
            item.map((value, i)=>{
                arrayMenu.push(<li key={i}>{value.text} - {value.url}</li>);
            });
                    return arrayMenu;
        }

        renderMobileNav() {
            if(this.state.mobileNavVisible) {
                return this.navigationLinks();
            }
        }

        renderNavigation() {
            if(this.state.windowWidth <= 800) {
                return <div>
                        <p onClick={e=>this.handleNavClick(e)}><i>mobile view - will be burger here</i></p>
                        {this.renderMobileNav()}
                    </div>
                ;
            } else {
                return <div>
                        {this.navigationLinks()}
                    </div>
                ;
            }
        }

        render() {
            return (
                <div>
                    <div>
                        <li>Web Title</li>
                        {this.renderNavigation()}
                    </div>
                </div>
            );
        }
    }

    ReactDOM.render(
        <NavContainer />,
        document.getElementById('app')
    );
});