//Followed Forrest [FEND] for help with this: https://www.youtube.com/watch?v=lDVaZY0aG2w&index=6&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP

import React, {Component} from "react";

export default class ListItem extends Component {
    render (){
        return (
            <li className="listItem">
              {this.props.name}
              Venue Name
          </li>

        )
    }
}
