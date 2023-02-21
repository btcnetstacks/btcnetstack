
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SHOP ♦ ETHSTACKS</title>
    <link rel="stylesheet" href="css/styles.css ">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,900;1,700&display=swap" rel="stylesheet">
</head>

<body>
    <div class='box'>
    <div class='wave -one'></div>
    <div class='wave -two'></div>
    <div class='wave -three'></div>
</div>

<header>
    <nav>
        <ul>
            <li><a href="./index.php#offer">SHOP</a></li>
            <li><a href="./faq.php">FAQ</a></li>
            <li><a href="./track.php">TRACK</a></li>
            <li><a href="https://t.me/ethstacksnetproof" target="_blank">PROOF</a></li>
        </ul>
    </nav>
</header>    <main>
            <div class="home">
            <div class="text">
                <h1><img draggable="false" class="ethtitle" src="ethtitle.png" alt=""></h1>
                <span>Active for over 2 years now mainly on the dark web, switching over to the HTTP protocol to expand the community.<a class="readmore" href="./faq.php">Read More</a></span>
                <a class="buy" href="#offer">buy now</a>
            </div>
            <div class="eth">
                <canvas id="cobe" style="width: 500px; height: 500px;" width="1000" height="1000"></canvas>
            </div>
            <script type="module">
                import createGlobe from "https://cdn.skypack.dev/cobe";

                let phi = 0;
                let canvas = document.getElementById("cobe");

                const globe = createGlobe(canvas, {
                    devicePixelRatio: 2,
                    width: 1000,
                    height: 1000,
                    phi: 0,
                    theta: 0,
                    dark: 1,
                    diffuse: 2,
                    scale: 1,
                    mapSamples: 20000,
                    mapBrightness: 6,
                    baseColor: [1, 1, 1],
                    markerColor: [0, 0, 0],
                    glowColor: [1, 1, 1],
                    offset: [0, 0],
                    markers: [],
                    onRender: (state) => {
                        state.phi = phi;
                        phi += 0.005;
                    }
                });
            </script>
        </div>
        <img class="ethlogo" src="./img/ethstacks.gif">
        <div id="offer" class="categories">
            <h2>Our offer</h2>
            <div class="categories-holder">
                <div class='category-item' onclick='location.href="./product.php?id=1"'><span class='category-title'>CLONED CARD FOR CASHOUT</span></div><div class='category-item' onclick='location.href="./product.php?id=2"'><span class='category-title'>DUMPS + PIN FOR CLONING CARDS</span></div><div class='category-item' onclick='location.href="./product.php?id=3"'><span class='category-title'>VIRTUAL PREPAID VISA CARDS</span></div><div class='category-item' onclick='location.href="./product.php?id=4"'><span class='category-title'>CRACKED PAYPAL ACCOUNTS WITH 2FA + COOKIES</span></div><div class='category-item' onclick='location.href="./product.php?id=5"'><span class='category-title'>CRACKED COINBASE/BITVAVO ACCOUNTS</span></div><div class='category-item' onclick='location.href="./product.php?id=6"'><span class='category-title'>ETHWARE EMV SOFTWARE</span></div>            </div>
        </div>
    </main>
    <div class="alert">
    <span><a href="https://t.me/ntarmor">CLICK HERE TO SEE SCAMMERLIST</a></span>
    <img id="telegram-widget" src="./img/telegram.png" onclick="window.open('https://t.me/Ethw3b', '_blank')" alt="Telegram Widget">
</div></body>
<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>

</html>