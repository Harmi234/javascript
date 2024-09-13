const Navbar = () => {
  
  let isLogin = localStorage.getItem('isLogin') || false
  let username = localStorage.getItem('username')

  return`
  
    <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="/project/index.html"><img src="http://themes.iamabdus.com/bigbag/1.0/img/logo.png" alt=""></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
               aria-expanded="false" aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/project/index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="/project/pages/product.html">Product</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="/project/pages/addproduct.html">Add Product</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="/project/pages/cart.html">Cart</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="/project/pages/login.html">${isLogin ? "Logout" : "Login"}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="/project/pages/signup.html">${isLogin ? username : "signup"}</a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input
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