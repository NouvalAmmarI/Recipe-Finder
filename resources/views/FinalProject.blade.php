<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/FinalProject.css">

    <!-- Box Icons -->
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    <title>Tasty Bites</title> 
</head>

<body style="background-image: url(img/background2.png);">
    <nav class="sidebar close">

        <header>
            <div class="image-text">
                <span class="image">
                    <img src="img/tasty (1).png" alt="">
                </span>

                <div class="text logo-text">
                    <span class="name">Tasty Bites</span>
                    <span class="profession">Recipe Finder</span>
                </div>
                
            </div>

            <!-- buka tutup sidebar nonaktif -->
            <i class='bx bx-chevron-right toggle'></i>
        </header>

        <div class="menu-bar">
            <div class="menu">
                <li class="search-box">
                    <i class='bx bx-search icon'></i>
                    <input type="text" placeholder="Search...">
                </li>

                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="/">
                            <i class='bx bx-home-alt icon' ></i>
                            <span class="text nav-text">Home</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="/team">
                            <i class='bx bx-group icon'></i>
                            <span class="text nav-text">Our Team</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="/contact">
                            <i class='bx bxs-contact icon'></i>
                            <span class="text nav-text">Contact Us</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div class="bottom-content">
                <li class="">
                    <a href="#">
                        <i class='bx bx-log-out icon' ></i>
                        <span class="text nav-text">Exit</span>
                    </a>
                </li>

                <li class="mode">
                    <div class="sun-moon">
                        <i class='bx bx-moon icon moon'></i>
                        <i class='bx bx-sun icon sun'></i>
                    </div>
                    <span class="mode-text text">Dark mode</span>

                    <div class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>
                
            </div>
        </div>

    </nav>

    <section class="home">
        {{-- Search bar --}}
        <div class="text">
            <div class="title">
                <!-- <img src="assets/tasty (1).png" alt="" class="title-img"> -->
                <p>Tasty Bites</p>
            </div>
            
            <form id="searchForm">
                <div class="search">
                    <i class="bx bx-search search-icon`"></i>
                    <input type="text" id="ingredientInput" placeholder="Enter an ingredient..." class="search-input">
                </div>
                <button type="submit" class="submit_btn">Search</button>
            </form>
        </div>

        <!-- Button Bahan -->
        <ul class="menu-links" id="foodButtons">
            <!-- button javascript -->
        </ul>
        
        
        <div id="recipeContainer" class="container">
            <div id="recipeList" class="recipe-list"></div>
        </div>
        
    </section>

    <script src="js/FinalProject.js"> </script>
</body>
</html>