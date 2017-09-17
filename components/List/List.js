import React, {Component} from 'react';

class List extends Component{
    constructor(props){
        super(props);

        this.state = {
            list: ['List1', 'List2'],
            ipValue: ''
        }

        this.addList = this.addList.bind(this);
        this.updateIpValue = this.updateIpValue.bind(this);
    }



    addList(){
        var temp = document.getElementById('ListInput').value;
        if(temp.length>0){
            this.setState({
                list: [...this.state.list, temp],
                ipValue: ''
            })
            console.log(this.state.list)
        }
        else{
            alert('Enter a String');
        }

    }


    removeList(index){
        this.setState({
            list: this.state.list.filter( (e, i) => {
                return i !== index;
            })
        });
        console.log(this.state.list)

    }

    updateIpValue(e){
        this.setState({
            ipValue: e.target.value
        })
    }

    render(){
        var foo = this.state.list.map((item, index)=>{
            return(
                <li key={index}>
                    {item}
                    <a className="removeLink" onClick={this.removeList.bind(this, index)}>Remove</a>
                </li>
            )
        })

        return(
            <div>

                <div className="list">
                        <input id="ListInput" placeholder="Add List Items" type="text" value={this.state.ipValue} onChange={this.updateIpValue} required/>
                        <input type="button" value='Add List' onClick={this.addList}/>
                        <ul>
                            {foo}
                        </ul>
                </div>
            </div>
        )
    }
}

export default List;
