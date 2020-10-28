import React, {Component} from 'react';
import './App.css'


export default class App extends Component {
   constructor(props) {
    super (props);
    this.state = {
        pros: [''],
        cons: [''],
    };
    this.addPro = this.addPro.bind(this);
    this.addCons = this.addCons.bind(this);        
  }

  addPro(event) {
    const pros = this.state.pros;
    pros[event.currentTarget.id] = event.currentTarget.value;
    if(pros[event.currentTarget.id] === '') {
      console.log('if')
      pros.splice(event.currentTarget.id, 1);
    }
    else if(event.currentTarget.id == pros.length - 1) {
      console.log('else', event.currentTarget.id)
      pros.push('');
    }
    this.setState({pros: pros});
    }

  addCons(event) {
    const cons = this.state.cons;
    cons[event.currentTarget.id] = event.currentTarget.value;
    if(cons[event.currentTarget.id] === '') {
      cons.splice(event.currentTarget.id, 1);
    }
    else if(event.currentTarget.id == cons.length - 1) {
      cons.push('');
    }
    this.setState({cons: cons});
  }

  render () {
   

    const pros = this.state.pros.map((pros, id) => {
      return (
        <li key={id} 
       >
          <input id={id}  value={this.state.pros[id]} onChange={this.addPro}/>
        </li>
      )
    })

    const cons = this.state.cons.map((cons, id) => {
      return (
        <li key={id} 
      >
          <input id={id} 
          value={this.state.cons[id]} onChange={this.addCons}/>
          </li>
      )
    })

    return (
      <div className="main">
       <div className="heading-parent"><h1 className="heading">Should I eat at McDonalds?</h1> </div> 
        <div className="list-parent"> 

          <div className="item">
            <section className="item-headings">Pros</section>
            <ol>
              {pros}
            </ol>
          </div>

          <div  className="item">
            <section className="item-headings">Cons</section>
            <ol>
              {cons}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}