
document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
    
<head>


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>معهد شيخ الإسلام ابن تيمية</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assests/style.css">
</head>

<body>
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
  