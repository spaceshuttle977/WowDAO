import Image from 'next/image'
import chart from 'chart.js/auto'
import Chartlinedemo from '@/components/Chartlinedemo'
import Chartpiedemo from '@/components/Chartpiedemo'

export default function Home() {

  return (  
    <div>
       <div class="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Home</h1>
        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm">
          <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>

      {/* Content Row */}
      <div className="row">

        {/* Earnings (Monthly) Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Earnings (Monthly)</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Earnings (Annual) Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Earnings (Annual)</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Performance Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Daily Performance</div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">69%</div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '69%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Reduction Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Cost reduction</div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">35%</div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '35%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Row */}
      <div className="row">

        {/* Area Chart */}
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
              <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                  <div className="dropdown-header">Dropdown Header:</div>
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            {/* Card Body */}
            <div className="card-body">
              <div className="chart-area">
                {/* Add your chart component here */}
                <Chartlinedemo />
              </div>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
              <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                  <div className="dropdown-header">Dropdown Header:</div>
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            {/* Card Body */}
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                {/* Add your pie chart component here */}
                <Chartpiedemo />
              </div>
              <div className="mt-4 text-center small">
                <span className="mr-2">
                  <i className="fas fa-circle text-primary"></i> Manufacturing
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle text-success"></i> Production
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle text-info"></i> Networking
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Row */}
      <div className="row">

        {/* Content Column */}
        <div className="col-lg-6 mb-4">

          {/* Operations Card Example */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Operations</h6>
            </div>
            <div className="card-body">
              <h4 className="small font-weight-bold">Profile updated<span className="float-right">20%</span></h4>
              <div className="progress mb-4">
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h4 className="small font-weight-bold">Asset tracking<span className="float-right">40%</span></h4>
              <div className="progress mb-4">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h4 className="small font-weight-bold">Potential users engaged<span className="float-right">60%</span></h4>
              <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h4 className="small font-weight-bold">Project accomplishment of building Robotic arms for NASA’s OSAM-1 program<span className="float-right">80%</span></h4>
              <div className="progress mb-4">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h4 className="small font-weight-bold">Assembly of Laser communication equipment<span className="float-right">Complete!</span></h4>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          {/* Illustrations */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Marketplace</h6>
            </div>
            <div className="card-body">
              <img className="img-fluid px-2 px-sm-4 mt-3 mb-4" style={{ width: '13rem' }} src="img/network.png" alt="..." />
              <p className="m-2 font-weight-bold text-primary">Connect with verified Potential Suppliers and Manufacturers &rarr;</p>
              <p className="m-2 font-weight-bold text-primary">CMMC (Cybersecurity Maturity Model Certification) &rarr;</p>
              <p className="m-2 font-weight-bold text-primary">ITAR (International Traffic in Arms Regulations) &rarr;</p>
              <p className="m-2 font-weight-bold text-primary">ENISA (European Union Agency for Cybersecurity) &rarr;</p>
              <p className="m-2 font-weight-bold text-primary">FedRAMP (Federal Risk and Authorization Management Program) &rarr;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
