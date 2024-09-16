const Navbar = () => {
  
    // let isLogin = localStorage.getItem('isLogin') || false
    // let username = localStorage.getItem('username')
  
    return`
    
      <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" href="/student-portal/index.html"> <img src="/student-portal/img/student-logo-removebg.png" alt="" height="50px"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                 aria-expanded="false" aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/student-portal/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" href="/student-portal/pages/add.html">Add</a>
                    </li>
                  </ul>
                  <form id="searching" class="d-flex" role="search">
                    <input
                      id="search"
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
  
    `
  }
  
  export default Navbar
