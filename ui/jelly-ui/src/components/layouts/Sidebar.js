import styles from '../../css/sb-admin-2.css'
import Link from 'next/link'

const Sidebar = () => {


  return (
    <div className='top-0 left-0 bg-gradient-primary h-full'>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}      
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon rotate-n-15"></div>
        <div className="sidebar-brand-text mx-3">JELLYSPACE</div>
      </a>

      {/* Divider */}
      <hr className="sidebar-divider my-0" />

      {/* Nav Item - Home */}
      <li className="nav-item active">           
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Home</span>
        </a>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider" />

      {/* Nav Item - Connect */}
      {/* Uncomment this section if needed */}
      {/* <li className="nav-item">
        <a className="nav-link" href="charts.html" style={{ fontWeight: 'bolder' }}>
          <i className="fas fa-fw fa-cog"></i>
          <span>Connect</span>
        </a>
      </li> */}

      {/* Nav Item - System Integrators */}
      <li className="nav-item">        
        <Link className="nav-link" href="/inventory">        
          <i className="bi bi-box"></i>
          <span>Inventory</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" href="/demand">        
          <i className="bi bi-graph-up-arrow"></i>
          <span>Demand</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" href="/reports">        
          <i className="bi bi-journals"></i>
          <span>Reports</span>
        </Link>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
    </div>
    )

}

export default Sidebar