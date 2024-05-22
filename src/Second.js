import { Component } from "react";


export default class Second extends Component {

     componentWillUnmount(){
        alert("CWU")
     }
   
    render() {
        return (
            <div>
              <h1>component will unmount</h1>
            </div>
        )
    }
}