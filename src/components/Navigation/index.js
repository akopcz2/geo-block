import React from 'react';
import { Link } from "@reach/router";

const Navigation = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
          <Link to ="/">Home</Link>
        </li>
      </ul>
    </nav>
  )

}
export default Navigation;