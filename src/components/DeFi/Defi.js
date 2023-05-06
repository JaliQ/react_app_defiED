import React, {Component} from "react";
import Head from './Sections/Head'
import Options from './Sections/Options'


class Defi extends Component{
  render(){ return (
    <div className="intro-body">
      <Head/>
      <Options></Options>
    </div>
  )
}
}

export default Defi;