let header = document.getElementsByTagName('header')[0];
header.innerHTML=`
<nav class="navbar navbar-expand-lg">
<div class="container">
  <a class="navbar-brand" href="index.html">
    <img src="img/logo.jpg" alt="logo" width="64px">
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about.html">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Courses
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">All Courses</a></li>
          <li><a class="dropdown-item" href="#">Web Development Basic (Running)</a></li>
          <li><a class="dropdown-item" href="#">Web Development Beginner (Upcomming)</a></li>
          <li><a class="dropdown-item" href="#">Web Development Advanced (Upcomming)</a></li>
        </ul>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="signup.html">Sign Up</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="signin.html">Sign In </a>
      </li>
    </ul>
  </div>
</div>
</nav>
`
