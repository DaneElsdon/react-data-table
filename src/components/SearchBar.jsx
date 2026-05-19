import companyLogo from '../assets/labserve_logo.webp'

function SearchBar ({ search, setSearch }) {
  return (

    <div>
      
      {/* Main Header */}
      <div className="row">
        <div className="col-12">
          <div className="bg-primary-blue border-r-1">

            <div className="text-center">
              <img
                src={companyLogo}
                alt="Labserve Logo"
                className="img-fluid mt-3"
                style={{ maxWidth: '220px' }}
              />

              <h3 className="text-primary-blue py-4 text-white mb-0">
                Labserve Internal Team Members
              </h3>

            </div>

          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">

          <div className="py-4">

            <input
              type="text"
              placeholder="Search Users"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control border-r-1"
            />

            <div className="mt-2 text-center">
              <small className="text-muted">
                Search <strong>all users</strong> by either{" "}
                <strong>id, name, email or role</strong>.
              </small>
            </div>

          </div>

        </div>
      </div>

    </div>
    
  )
}

export default SearchBar