document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link" href="/index.html">الصفحة الرئيسية</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">الدروس المتاحة </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item disabled" href="#">الفقه</a></li>
                <li><a class="dropdown-item disabled" href="#">العقيدة</a></li>
                <li><a class="dropdown-item" href="/pages/naho.html">النحو</a></li>
                <li><a class="dropdown-item" href="/pages/DorrosM.html">أخرى</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/Books.html">المكتبة</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/whoami.html">من نحن</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  
    document.getElementById("navbar-container").innerHTML = navbarHTML;
  });
  