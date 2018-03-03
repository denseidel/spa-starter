import React from 'react'; 

const navbar = (props) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      {props.logo &&
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={props.logo} alt={props.alt} width={props.width} height={props.height} />
          </a>
        </div>
      }
      <div className="navbar-menu">
        <div className="navbar-start">
        {
          props.elements.map((element) => (
            <a className="navbar-item" href={element.url} key={element.name}>
              {element.name}
            </a>
          ))
        }
        </div>
        <div className="navbar-end">
        {
          props.auth.isAuthenticated === true && props.rightElements &&
          props.rightElements.map((element) => (
            <a className="navbar-item" href={element.url} key={element.name}>
              {element.name}
            </a>
          ))
        }
        </div>
      </div>
    </nav>
  )

}

export default navbar;