import { useState } from 'react'

import usersData from "./data/users"

import SearchBar from "./components/SearchBar"
import UserTable from "./components/UserTable"

import './App.css'

function App() {

  // Set search field to start as an empty string
  const [search, setSearch] = useState("")

  // Filter all users being called from the Users.js
  const filteredUsers = usersData.filter((user) => 
    user.id.toString().includes(search.toString()) || 
    user.name.toLowerCase().includes(search.toLowerCase()) || 
    user.email.toLowerCase().includes(search.toLowerCase()) || 
    user.role.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      
      <div className="container my-4">

        {/* Users Search Bar */}
        <div className='row text-center'>

          <div className="col-12 text-center">
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
          </div>

        </div>

        {/* Users Data Table */}
        <div className='row'>

          <div className="col-12">

            {filteredUsers.length === 0 ? (

              // Case when no users have been found from search results
              <div className="alert alert-light border text-center py-3 border-r-1">
                <p className="font-weight-bold mb-2">No users found</p>

                <p className="font-weight-normal text-muted mb-0">
                  Try adjusting your search term.
                </p>
              </div>

            ) : (

              // Users Data Table
              // <UserTable users={filteredUsers} />
              <UserTable users={filteredUsers} search={search} />

            )}

          </div>
          
        </div>

        {/* Footer Section */}
        <div className="row mt-3">
          <div className="col-12">
            <div className="bg-primary-blue border-r-1">

              <div className="text-center">
                <p className="text-primary-blue py-4 text-white mb-0">React Data Table : Dane Elsdon</p>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
