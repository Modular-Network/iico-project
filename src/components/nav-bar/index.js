import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { RenderIf } from 'lessdux'

import * as walletSelectors from '../../reducers/wallet'
import Identicon from '../../components/identicon'
import logo from '../../assets/images/logo.png'

import './nav-bar.css'

const NavBar = ({ accounts, balance, routes }) => (
  <div className="NavBar">
    <a href="https://kleros.io">
      <img className="NavBar-logo" src={logo} alt="Logo" />
    </a>
    <div className="NavBar-tabs">
      {routes.map(r => (
        <NavLink
          key={r.to}
          className="NavBar-tabs-tab"
          activeClassName="is-active"
          to={r.to}
          exact={r.to === '/'}
        >
          {r.name}
        </NavLink>
      ))}
    </div>
    <div className="NavBar-buttons">
      <div className="NavBar-buttons-button">
        <RenderIf
          resource={accounts}
          loading="..."
          done={accounts.data && <Identicon seed={accounts.data[0]} size={9} />}
          failedLoading="..."
        />
      </div>
      <RenderIf
        resource={balance}
        loading="..."
        done={`${balance.data} ETH`}
        failedLoading="..."
      />
    </div>
  </div>
)

NavBar.propTypes = {
  // Redux State
  accounts: walletSelectors.accountsShape.isRequired,
  balance: walletSelectors.balanceShape.isRequired,

  // State
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default NavBar
