
        const wsLink = "whatsapp://send";

        const data = [
            // --- FREE FIRE LATAM ---
            { cat: "Free Fire LATAM", sub: "Diamantes", item: "110 Diamantes", price: "0,86636" },
            { cat: "Free Fire LATAM", sub: "Diamantes", item: "341 Diamantes", price: "2,59787" },
            { cat: "Free Fire LATAM", sub: "Diamantes", item: "572 Diamantes", price: "4,39109" },
            { cat: "Free Fire LATAM", sub: "Diamantes", item: "1166 Diamantes", price: "8,1554" },
            { cat: "Free Fire LATAM", sub: "Diamantes", item: "2398 Diamantes", price: "16,18738" },
            { cat: "Free Fire LATAM", sub: "Diamantes", item: "6160 Diamantes", price: "41,20413" },
            { cat: "Free Fire LATAM", sub: "Membresías", item: "Weekly Lite", price: "0,60137" },
            { cat: "Free Fire LATAM", sub: "Membresías", item: "Weekly Membership", price: "2,60392" },
            { cat: "Free Fire LATAM", sub: "Membresías", item: "Monthly Membership", price: "12,45332" },
            { cat: "Free Fire LATAM", sub: "Membresías", item: "Booyah Pass", price: "4,6585" },

            // --- MOBILE LEGENDS GLOBAL ---
            { cat: "Mobile Legends Global", sub: "Diamantes", item: "51+5 Diamantes", price: "0,9317" },
            { cat: "Mobile Legends Global", sub: "Diamantes", item: "102+10 Diamantes", price: "1,8513" },
            { cat: "Mobile Legends Global", sub: "Diamantes", item: "504+66 Diamantes", price: "9,2686" },
            { cat: "Mobile Legends Global", sub: "Diamantes", item: "5035+1007 Diamantes", price: "92,686" },
            { cat: "Mobile Legends Global", sub: "Pases", item: "Weekly Pass", price: "1,7908" },
            { cat: "Mobile Legends Global", sub: "Pases", item: "Twilight Pass", price: "9,6437" },

            // --- PUBG MOBILE ---
            { cat: "PUBG Mobile", sub: "UC", item: "60 UC", price: "1,089" },
            { cat: "PUBG Mobile", sub: "UC", item: "325 UC", price: "5,4934" },
            { cat: "PUBG Mobile", sub: "Prime", item: "Prime Plus 1 Mes", price: "10,3939" },

            // --- BLOOD STRIKE ---
            { cat: "Blood Strike", sub: "Oro", item: "1100 Oro", price: "9,1113" },
            { cat: "Blood Strike", sub: "Ofertas", item: "9.99 Deal", price: "9,5711" },

            // --- GENSHIN IMPACT ---
            { cat: "Genshin Impact", sub: "Cristales", item: "6480+1600 Cristales", price: "117,9992" },
            { cat: "Genshin Impact", sub: "Luna", item: "Bendición de la Luna", price: "5,9048" },

            // --- ROBLOX ---
            { cat: "Roblox US", sub: "Gift Cards", item: "1000 Robux", price: "11,1683" },
            { cat: "Roblox US", sub: "Gift Cards", item: "11000 Robux", price: "115,8696" },

            // --- PLAYSTATION ---
            { cat: "PlayStation US", sub: "Gift Cards", item: "50 USD Card", price: "54,3048" },
            { cat: "PlayStation US", sub: "Gift Cards", item: "100 USD Card", price: "107,1576" },

            // --- APPLE ---
            { cat: "Apple / iTunes US", sub: "Gift Cards", item: "100 USD Card", price: "116,0148" },

            // --- VALORANT / LOL ---
            { cat: "Valorant LATAM", sub: "VP", item: "5350 VP", price: "61,71" },
            { cat: "League of Legends", sub: "RP", item: "6500 RP", price: "61,71" },

            // --- EXITLAG / DISCORD ---
            { cat: "ExitLag", sub: "Suscripción", item: "12 Meses Tier 1", price: "131,9626" },
            { cat: "Discord Nitro", sub: "Suscripción", item: "Nitro 12 Meses", price: "106,3711" },

            // --- STREAMING ---
            { cat: "Streaming", sub: "Premium", item: "Netflix Cuenta Completa", price: "11,495" },
            { cat: "Streaming", sub: "Premium", item: "Disney Plus Premium", price: "9,438" },
            { cat: "Streaming", sub: "Premium", item: "IPTV Cuenta Completa", price: "2,178" },

            // --- MOBILE LEGENDS GLOBAL (faltantes) ---
            { cat: "Mobile Legends Global", sub: "Diamantes", item: "203 + 20 Diamantes", price: "3,7026" },
            { cat: "Mobile Legends Global", sub: "Diamantes", item: "303 + 33 Diamantes", price: "5,566" },
            { cat: "Mobile Legends Global", sub: "Diamantes", item: "625 + 81 Diamantes", price: "11,2772" },
            { cat: "Mobile Legends Global", sub: "Diamantes", item: "1007 + 156 Diamantes", price: "18,5372" },
            { cat: "Mobile Legends Global", sub: "Diamantes", item: "2015 + 383 Diamantes", price: "37,0744" },
            { cat: "Mobile Legends Global", sub: "Diamantes", item: "3099 + 589 Diamantes", price: "56,9426" },
            { cat: "Mobile Legends Global", sub: "Bono Primera Recarga", item: "50 + 5 Diamantes", price: "0,9317" },
            { cat: "Mobile Legends Global", sub: "Bono Primera Recarga", item: "150 + 15 Diamantes", price: "2,7951" },
            { cat: "Mobile Legends Global", sub: "Bono Primera Recarga", item: "250 + 25 Diamantes", price: "4,4649" },
            { cat: "Mobile Legends Global", sub: "Bono Primera Recarga", item: "500 + 65 Diamantes", price: "9,1839" },
            { cat: "Mobile Legends Global", sub: "Pases", item: "Weekly Elite Pack", price: "0,968" },

            // --- PUBG MOBILE (faltantes) ---
            { cat: "PUBG Mobile", sub: "UC", item: "10 UC", price: "0,4356" },
            { cat: "PUBG Mobile", sub: "Prime / Pases", item: "Prime 1 Mes", price: "1,0406" },
            { cat: "PUBG Mobile", sub: "Prime / Pases", item: "Prime 3 Meses", price: "3,1218" },
            { cat: "PUBG Mobile", sub: "Prime / Pases", item: "Prime 6 Meses", price: "6,2315" },
            { cat: "PUBG Mobile", sub: "Prime / Pases", item: "Elite Pass LV1-50", price: "6,4009" },
            { cat: "PUBG Mobile", sub: "Packs", item: "First Purchase Pack", price: "1,0406" },
            { cat: "PUBG Mobile", sub: "Packs", item: "Weekly Deal Pack 1", price: "1,0648" },
            { cat: "PUBG Mobile", sub: "Packs", item: "Weekly Deal Pack 2", price: "3,2065" },
            { cat: "PUBG Mobile", sub: "Packs", item: "Mythic Emblem Pack", price: "5,1909" },

            // --- BLOOD STRIKE (faltantes) ---
            { cat: "Blood Strike", sub: "Oro", item: "51 Oro", price: "0,4961" },
            { cat: "Blood Strike", sub: "Oro", item: "105 Oro", price: "0,9075" },
            { cat: "Blood Strike", sub: "Oro", item: "320 Oro", price: "2,7225" },
            { cat: "Blood Strike", sub: "Oro", item: "540 Oro", price: "4,5496" },
            { cat: "Blood Strike", sub: "Oro", item: "2260 Oro", price: "18,2226" },
            { cat: "Blood Strike", sub: "Oro", item: "5800 Oro", price: "45,5565" },
            { cat: "Blood Strike", sub: "Pases", item: "Season Pass", price: "0,9438" },
            { cat: "Blood Strike", sub: "Pases", item: "Level Up Pass", price: "1,8997" },
            { cat: "Blood Strike", sub: "Pases", item: "Strike Pass Elite", price: "3,8115" },
            { cat: "Blood Strike", sub: "Pases", item: "Strike Pass Premium", price: "8,5789" },
            { cat: "Blood Strike", sub: "Ofertas / Deals", item: "0.49 Deal", price: "0,484" },
            { cat: "Blood Strike", sub: "Ofertas / Deals", item: "0.99 Deal", price: "0,9559" },
            { cat: "Blood Strike", sub: "Ofertas / Deals", item: "1.99 Deal", price: "1,9118" },
            { cat: "Blood Strike", sub: "Ofertas / Deals", item: "2.99 Deal", price: "2,8798" },
            { cat: "Blood Strike", sub: "Ofertas / Deals", item: "4.99 Deal", price: "4,7916" },

            // --- GENSHIN IMPACT (faltantes) ---
            { cat: "Genshin Impact", sub: "Cristales Génesis", item: "60 Cristales Génesis", price: "1,1737" },
            { cat: "Genshin Impact", sub: "Cristales Génesis", item: "300 + 30 Cristales Génesis", price: "5,9048" },
            { cat: "Genshin Impact", sub: "Cristales Génesis", item: "980 + 110 Cristales Génesis", price: "17,7023" },
            { cat: "Genshin Impact", sub: "Cristales Génesis", item: "1980 + 260 Cristales Génesis", price: "35,3925" },
            { cat: "Genshin Impact", sub: "Cristales Génesis", item: "3280 + 600 Cristales Génesis", price: "58,9996" },
            { cat: "Genshin Impact", sub: "Nexus Cronal", item: "60 Nexus Cronal", price: "1,1737" },
            { cat: "Genshin Impact", sub: "Nexus Cronal", item: "300 + 30 Nexus Cronal", price: "5,9048" },
            { cat: "Genshin Impact", sub: "Nexus Cronal", item: "980 + 110 Nexus Cronal", price: "17,7023" },
            { cat: "Genshin Impact", sub: "Nexus Cronal", item: "1980 + 260 Nexus Cronal", price: "35,3925" },
            { cat: "Genshin Impact", sub: "Nexus Cronal", item: "3280 + 600 Nexus Cronal", price: "58,9996" },

            // --- MARVEL RIVALS ---
            { cat: "Marvel Rivals", sub: "Lattice", item: "100 Lattice", price: "1,0648" },
            { cat: "Marvel Rivals", sub: "Lattice", item: "500 Lattice", price: "5,2877" },
            { cat: "Marvel Rivals", sub: "Lattice", item: "1000 Lattice", price: "10,5512" },
            { cat: "Marvel Rivals", sub: "Lattice", item: "2180 Lattice", price: "21,1145" },
            { cat: "Marvel Rivals", sub: "Lattice", item: "5680 Lattice", price: "52,7923" },
            { cat: "Marvel Rivals", sub: "Lattice", item: "11680 Lattice", price: "105,5846" },

            // --- ARENA BREAKOUT MOBILE ---
            { cat: "Arena Breakout Mobile", sub: "Bonds", item: "66 Bonds", price: "0,968" },
            { cat: "Arena Breakout Mobile", sub: "Bonds", item: "335 Bonds", price: "4,7069" },
            { cat: "Arena Breakout Mobile", sub: "Bonds", item: "675 Bonds", price: "9,4017" },
            { cat: "Arena Breakout Mobile", sub: "Bonds", item: "1690 Bonds", price: "23,5224" },
            { cat: "Arena Breakout Mobile", sub: "Bonds", item: "3400 Bonds", price: "47,0448" },
            { cat: "Arena Breakout Mobile", sub: "Bonds", item: "6820 Bonds", price: "94,0291" },
            { cat: "Arena Breakout Mobile", sub: "Pases", item: "Beginner Select", price: "0,8833" },
            { cat: "Arena Breakout Mobile", sub: "Pases", item: "Battle Pass Advanced Mensual", price: "1,089" },
            { cat: "Arena Breakout Mobile", sub: "Pases", item: "Battle Pass Premium Mensual", price: "4,3681" },
            { cat: "Arena Breakout Mobile", sub: "Pases", item: "Battle Pass Premium Trimestral", price: "13,1285" },
            { cat: "Arena Breakout Mobile", sub: "Cases / Privilegios", item: "Bulletproof Case 30d", price: "2,4684" },
            { cat: "Arena Breakout Mobile", sub: "Cases / Privilegios", item: "Bulletproof Case Privileges", price: "2,8435" },
            { cat: "Arena Breakout Mobile", sub: "Cases / Privilegios", item: "Composite Case 30d", price: "7,4052" },
            { cat: "Arena Breakout Mobile", sub: "Cases / Privilegios", item: "Composite Case Privileges", price: "8,4458" },
            { cat: "Arena Breakout Mobile", sub: "Bonds", item: "100 Bonds", price: "1,2221" },
            { cat: "Arena Breakout Mobile", sub: "Bonds", item: "500 Bonds", price: "6,0984" },
            { cat: "Arena Breakout Mobile", sub: "Bonds", item: "1000 Bonds", price: "11,8459" },
            { cat: "Arena Breakout Mobile", sub: "Bonds", item: "2500 Bonds", price: "29,4151" },
            { cat: "Arena Breakout Mobile", sub: "Bonds", item: "5000 Bonds", price: "58,6729" },
            { cat: "Arena Breakout Mobile", sub: "Bonds", item: "10000 Bonds", price: "117,2006" },
            { cat: "Arena Breakout Mobile", sub: "Battle Pass", item: "Advanced Battle Pass Card", price: "6,171" },
            { cat: "Arena Breakout Mobile", sub: "Battle Pass", item: "Premium Battle Pass Card", price: "18,5493" },
            { cat: "Arena Breakout Mobile", sub: "Skin Bundles", item: "Classic Craftsmanship Skin Bundle I", price: "6,171" },
            { cat: "Arena Breakout Mobile", sub: "Skin Bundles", item: "Classic Craftsmanship Skin Bundle II", price: "6,171" },
            { cat: "Arena Breakout Mobile", sub: "Skin Bundles", item: "Copper Works Skin Bundle I", price: "6,171" },
            { cat: "Arena Breakout Mobile", sub: "Skin Bundles", item: "Copper Works Skin Bundle II", price: "6,171" },

            // --- CALL OF DUTY USA ---
            { cat: "Call of Duty USA", sub: "CP", item: "80 + 8 CP", price: "1,2221" },
            { cat: "Call of Duty USA", sub: "CP", item: "400 + 60 CP", price: "4,8884" },
            { cat: "Call of Duty USA", sub: "CP", item: "800 + 160 CP", price: "9,7768" },
            { cat: "Call of Duty USA", sub: "CP", item: "2000 + 600 CP", price: "24,442" },
            { cat: "Call of Duty USA", sub: "CP", item: "4000 + 1400 CP", price: "48,8719" },
            { cat: "Call of Duty USA", sub: "CP", item: "8000 + 3600 CP", price: "122,1858" },

            // --- DELTA FORCE ---
            { cat: "Delta Force", sub: "Delta Coins", item: "60 Delta Coins", price: "0,9559" },
            { cat: "Delta Force", sub: "Delta Coins", item: "320 Delta Coins", price: "4,7553" },
            { cat: "Delta Force", sub: "Delta Coins", item: "750 Delta Coins", price: "9,5106" },
            { cat: "Delta Force", sub: "Delta Coins", item: "1480 Delta Coins", price: "19,0212" },
            { cat: "Delta Force", sub: "Delta Coins", item: "1980 Delta Coins", price: "23,7765" },
            { cat: "Delta Force", sub: "Delta Coins", item: "3950 Delta Coins", price: "47,5409" },
            { cat: "Delta Force", sub: "Delta Coins", item: "8100 Delta Coins", price: "95,0818" },
            { cat: "Delta Force", sub: "Pases", item: "Season Pass Operations", price: "5,2877" },
            { cat: "Delta Force", sub: "Pases", item: "Season Pass Warfare", price: "5,2877" },
            { cat: "Delta Force", sub: "Pases", item: "Season Pass Deluxe", price: "7,3205" },

            // --- HONOR OF KINGS ---
            { cat: "Honor of Kings", sub: "Tokens", item: "80 Tokens", price: "1,0406" },
            { cat: "Honor of Kings", sub: "Tokens", item: "240 Tokens", price: "3,0976" },
            { cat: "Honor of Kings", sub: "Tokens", item: "400 Tokens", price: "5,1667" },
            { cat: "Honor of Kings", sub: "Tokens", item: "560 Tokens", price: "7,2479" },
            { cat: "Honor of Kings", sub: "Tokens", item: "830 Tokens", price: "10,3455" },
            { cat: "Honor of Kings", sub: "Tokens", item: "1245 Tokens", price: "15,5122" },
            { cat: "Honor of Kings", sub: "Tokens", item: "2508 Tokens", price: "31,0365" },
            { cat: "Honor of Kings", sub: "Tokens", item: "4180 Tokens", price: "51,7396" },
            { cat: "Honor of Kings", sub: "Tokens", item: "8360 Tokens", price: "103,4792" },
            { cat: "Honor of Kings", sub: "Tarjetas / Packs", item: "Weekly Card", price: "1,1858" },
            { cat: "Honor of Kings", sub: "Tarjetas / Packs", item: "Weekly Card Plus", price: "3,4848" },
            { cat: "Honor of Kings", sub: "Tarjetas / Packs", item: "Double Token Lucky Bag", price: "0,3267" },
            { cat: "Honor of Kings", sub: "Tarjetas / Packs", item: "Honor Point Value Pack", price: "0,3267" },
            { cat: "Honor of Kings", sub: "Tarjetas / Packs", item: "Standard Purchase Rebate Pack", price: "0,6171" },
            { cat: "Honor of Kings", sub: "Tarjetas / Packs", item: "Premium Purchase Rebate Pack", price: "1,3068" },

            // --- LORDS MOBILE ---
            { cat: "Lords Mobile", sub: "Diamantes", item: "395 Diamantes", price: "4,8884" },
            { cat: "Lords Mobile", sub: "Diamantes", item: "785 Diamantes", price: "9,7889" },
            { cat: "Lords Mobile", sub: "Diamantes", item: "1179 Diamantes", price: "14,6773" },
            { cat: "Lords Mobile", sub: "Diamantes", item: "1964 Diamantes", price: "24,4057" },
            { cat: "Lords Mobile", sub: "Diamantes", item: "3928 Diamantes", price: "48,8961" },
            { cat: "Lords Mobile", sub: "Diamantes", item: "7857 Diamantes", price: "97,7801" },
            { cat: "Lords Mobile", sub: "Pases", item: "Weekly Diamond Pass", price: "2,4442" },
            { cat: "Lords Mobile", sub: "Pases", item: "Monthly Diamond Pass", price: "24,4057" },

            // --- PUBG NEW STATE ---
            { cat: "PUBG New State", sub: "NC", item: "300 NC", price: "1,21" },
            { cat: "PUBG New State", sub: "NC", item: "1580 NC", price: "6,05" },
            { cat: "PUBG New State", sub: "NC", item: "3850 NC", price: "14,52" },
            { cat: "PUBG New State", sub: "NC", item: "10230 NC", price: "37,4979" },
            { cat: "PUBG New State", sub: "NC", item: "16800 NC", price: "60,4758" },
            { cat: "PUBG New State", sub: "NC", item: "35000 NC", price: "120,9516" },

            // --- WHERE WINDS MEET ---
            { cat: "Where Winds Meet", sub: "Echo Beads", item: "60 Echo Beads", price: "1,0648" },
            { cat: "Where Winds Meet", sub: "Echo Beads", item: "300 Echo Beads", price: "5,2877" },
            { cat: "Where Winds Meet", sub: "Echo Beads", item: "600 Echo Beads", price: "10,5996" },
            { cat: "Where Winds Meet", sub: "Echo Beads", item: "900 Echo Beads", price: "15,9478" },
            { cat: "Where Winds Meet", sub: "Echo Beads", item: "1800 Echo Beads", price: "31,9682" },
            { cat: "Where Winds Meet", sub: "Echo Beads", item: "3000 Echo Beads", price: "52,9496" },
            { cat: "Where Winds Meet", sub: "Echo Beads", item: "6000 Echo Beads", price: "106,8188" },
            { cat: "Where Winds Meet", sub: "Pases", item: "Monthly Pass", price: "5,2877" },
            { cat: "Where Winds Meet", sub: "Pases", item: "Elite Battle Pass", price: "10,5996" },
            { cat: "Where Winds Meet", sub: "Pases", item: "Premium Battle Pass", price: "21,175" },

            // --- ROBLOX US ---
            { cat: "Roblox US", sub: "Gift Cards & Códigos", item: "275 Robux", price: "3,146" },
            { cat: "Roblox US", sub: "Gift Cards & Códigos", item: "280 Robux", price: "3,4606" },
            { cat: "Roblox US", sub: "Gift Cards & Códigos", item: "300 Robux", price: "3,6784" },
            { cat: "Roblox US", sub: "Gift Cards & Códigos", item: "360 Robux", price: "4,0898" },
            { cat: "Roblox US", sub: "Gift Cards & Códigos", item: "365 Robux", price: "4,5254" },
            { cat: "Roblox US", sub: "Gift Cards & Códigos", item: "485 Robux", price: "5,3724" },
            { cat: "Roblox US", sub: "Gift Cards & Códigos", item: "555 Robux", price: "6,5945" },
            { cat: "Roblox US", sub: "Gift Cards & Códigos", item: "700 Robux", price: "8,5789" },
            { cat: "Roblox US", sub: "Gift Cards & Códigos", item: "2500 Robux", price: "28,5318" },
            { cat: "Roblox US", sub: "Gift Cards & Códigos", item: "5250 Robux", price: "57,0515" },

            // --- PLAYSTATION US ---
            { cat: "PlayStation US", sub: "Gift Cards & Códigos", item: "5 USD", price: "5,4087" },
            { cat: "PlayStation US", sub: "Gift Cards & Códigos", item: "10 USD", price: "10,8174" },
            { cat: "PlayStation US", sub: "Gift Cards & Códigos", item: "25 USD", price: "27,1524" },
            { cat: "PlayStation US", sub: "Gift Cards & Códigos", item: "75 USD", price: "82,8487" },
            { cat: "PlayStation US", sub: "Gift Cards & Códigos", item: "150 USD", price: "165,9636" },
            { cat: "PlayStation US", sub: "Gift Cards & Códigos", item: "200 USD", price: "224,3824" },

            // --- APPLE / ITUNES US ---
            { cat: "Apple / iTunes US", sub: "Gift Cards & Códigos", item: "5 USD", price: "5,7233" },
            { cat: "Apple / iTunes US", sub: "Gift Cards & Códigos", item: "10 USD", price: "11,6281" },
            { cat: "Apple / iTunes US", sub: "Gift Cards & Códigos", item: "15 USD", price: "17,4845" },
            { cat: "Apple / iTunes US", sub: "Gift Cards & Códigos", item: "25 USD", price: "28,6286" },
            { cat: "Apple / iTunes US", sub: "Gift Cards & Códigos", item: "50 USD", price: "57,7654" },
            { cat: "Apple / iTunes US", sub: "Gift Cards & Códigos", item: "150 USD", price: "174,3126" },
            { cat: "Apple / iTunes US", sub: "Gift Cards & Códigos", item: "200 USD", price: "229,5612" },
            { cat: "Apple / iTunes US", sub: "Gift Cards & Códigos", item: "500 USD", price: "581,0783" },

            // --- NETFLIX USA ---
            { cat: "Netflix USA", sub: "Gift Cards & Códigos", item: "15 USD", price: "17,2667" },
            { cat: "Netflix USA", sub: "Gift Cards & Códigos", item: "20 USD", price: "23,2078" },
            { cat: "Netflix USA", sub: "Gift Cards & Códigos", item: "25 USD", price: "29,1489" },
            { cat: "Netflix USA", sub: "Gift Cards & Códigos", item: "50 USD", price: "57,3177" },
            { cat: "Netflix USA", sub: "Gift Cards & Códigos", item: "100 USD", price: "117,8177" },

            // --- VALORANT / LEAGUE ---
            { cat: "Valorant LATAM", sub: "Gift Cards & Códigos", item: "475 VP", price: "6,171" },
            { cat: "Valorant LATAM", sub: "Gift Cards & Códigos", item: "1000 VP", price: "12,342" },
            { cat: "Valorant LATAM", sub: "Gift Cards & Códigos", item: "1520 VP", price: "18,513" },
            { cat: "Valorant LATAM", sub: "Gift Cards & Códigos", item: "2575 VP", price: "30,855" },
            { cat: "Valorant LATAM", sub: "Gift Cards & Códigos", item: "8700 VP", price: "98,736" },
            { cat: "League of Legends", sub: "Gift Cards & Códigos", item: "575 RP", price: "6,1105" },
            { cat: "League of Legends", sub: "Gift Cards & Códigos", item: "1240 RP", price: "12,221" },
            { cat: "League of Legends", sub: "Gift Cards & Códigos", item: "1895 RP", price: "18,3315" },
            { cat: "League of Legends", sub: "Gift Cards & Códigos", item: "6500 RP", price: "61,71" },

            // --- PUBG MOBILE GLOBAL / PC GLOBAL / NEW STATE GLOBAL ---
            { cat: "PUBG Mobile Global", sub: "Gift Cards & Códigos", item: "60 UC", price: "1,089" },
            { cat: "PUBG Mobile Global", sub: "Gift Cards & Códigos", item: "325 UC", price: "5,4934" },
            { cat: "PUBG Mobile Global", sub: "Gift Cards & Códigos", item: "660 UC", price: "10,9868" },
            { cat: "PUBG Mobile Global", sub: "Gift Cards & Códigos", item: "1800 UC", price: "27,3944" },
            { cat: "PUBG Mobile Global", sub: "Gift Cards & Códigos", item: "3850 UC", price: "55,0429" },
            { cat: "PUBG Mobile Global", sub: "Gift Cards & Códigos", item: "8100 UC", price: "109,6018" },
            { cat: "PUBG PC Global", sub: "Gift Cards & Códigos", item: "100 G-Coin", price: "1,089" },
            { cat: "PUBG PC Global", sub: "Gift Cards & Códigos", item: "500 + 10 G-Coin", price: "5,3603" },
            { cat: "PUBG PC Global", sub: "Gift Cards & Códigos", item: "1000 + 50 G-Coin", price: "10,6964" },
            { cat: "PUBG PC Global", sub: "Gift Cards & Códigos", item: "2500 + 200 G-Coin", price: "26,7531" },
            { cat: "PUBG PC Global", sub: "Gift Cards & Códigos", item: "5000 + 500 G-Coin", price: "53,5062" },
            { cat: "PUBG PC Global", sub: "Gift Cards & Códigos", item: "10000 + 1200 G-Coin", price: "107,0003" },
            { cat: "New State Mobile Global", sub: "Gift Cards & Códigos", item: "300 NC", price: "0,9317" },
            { cat: "New State Mobile Global", sub: "Gift Cards & Códigos", item: "1580 NC", price: "5,3482" },
            { cat: "New State Mobile Global", sub: "Gift Cards & Códigos", item: "3850 NC", price: "12,8139" },
            { cat: "New State Mobile Global", sub: "Gift Cards & Códigos", item: "10230 NC", price: "33,1056" },
            { cat: "New State Mobile Global", sub: "Gift Cards & Códigos", item: "16800 NC", price: "53,3852" },
            { cat: "New State Mobile Global", sub: "Gift Cards & Códigos", item: "35000 NC", price: "106,7583" },

            // --- DISCORD / EXITLAG / AMAZON / TWITCH / EA / NINTENDO / WILD RIFT / PARCHIS / CANDY CRUSH ---
            { cat: "Discord Nitro", sub: "Gift Cards & Códigos", item: "Basic 1 Mes", price: "5,3119" },
            { cat: "Discord Nitro", sub: "Gift Cards & Códigos", item: "Nitro 1 Mes", price: "10,6238" },
            { cat: "ExitLag", sub: "Gift Cards & Códigos", item: "TIER 1 1 Mes", price: "10,7811" },
            { cat: "ExitLag", sub: "Gift Cards & Códigos", item: "TIER 1 3 Meses", price: "29,766" },
            { cat: "ExitLag", sub: "Gift Cards & Códigos", item: "TIER 1 12 Meses", price: "131,9626" },
            { cat: "ExitLag", sub: "Gift Cards & Códigos", item: "TIER 2 1 Mes", price: "6,5098" },
            { cat: "ExitLag", sub: "Gift Cards & Códigos", item: "TIER 2 12 Meses", price: "99,0748" },
            { cat: "ExitLag", sub: "Gift Cards & Códigos", item: "TIER 3 3 Meses", price: "14,6168" },
            { cat: "ExitLag", sub: "Gift Cards & Códigos", item: "TIER 3 12 Meses", price: "66,0418" },
            { cat: "ExitLag", sub: "Gift Cards & Códigos", item: "Mobile TIER 3 Global 1 Mes", price: "2,9645" },
            { cat: "Amazon USA", sub: "Gift Cards & Códigos", item: "5 USD", price: "6,2194" },
            { cat: "Amazon USA", sub: "Gift Cards & Códigos", item: "10 USD", price: "12,342" },
            { cat: "Amazon USA", sub: "Gift Cards & Códigos", item: "25 USD", price: "30,855" },
            { cat: "Amazon USA", sub: "Gift Cards & Códigos", item: "50 USD", price: "61,6979" },
            { cat: "Amazon USA", sub: "Gift Cards & Códigos", item: "100 USD", price: "120,9516" },
            { cat: "Amazon USA", sub: "Gift Cards & Códigos", item: "200 USD", price: "246,8158" },
            { cat: "Amazon USA", sub: "Gift Cards & Códigos", item: "500 USD", price: "620,2218" },
            { cat: "Twitch Gift Card USD", sub: "Gift Cards & Códigos", item: "10 USD", price: "11,6039" },
            { cat: "Twitch Gift Card USD", sub: "Gift Cards & Códigos", item: "25 USD", price: "29,0037" },
            { cat: "Twitch Gift Card USD", sub: "Gift Cards & Códigos", item: "50 USD", price: "58,0074" },
            { cat: "Twitch Gift Card USD", sub: "Gift Cards & Códigos", item: "100 USD", price: "116,0148" },
            { cat: "Twitch Gift Card USD", sub: "Gift Cards & Códigos", item: "200 USD", price: "232,0296" },
            { cat: "EA Sports FC Points", sub: "Gift Cards & Códigos", item: "FC 26 EA Points 1050 Points", price: "11,1199" },
            { cat: "EA Sports FC Points", sub: "Gift Cards & Códigos", item: "FC 26 EA Points 12000 Points", price: "111,2595" },
            { cat: "EA Sports FC Points", sub: "Gift Cards & Códigos", item: "FC 26 XBOX Points 12000 Points", price: "100,9624" },
            { cat: "EA Sports FC Points", sub: "Gift Cards & Códigos", item: "FC 26 XBOX Points 18500 Points", price: "151,4436" },
            { cat: "EA Sports FC Points", sub: "Gift Cards & Códigos", item: "FC 25 XBOX Points 1050 Points", price: "10,1035" },
            { cat: "EA Sports FC Points", sub: "Gift Cards & Códigos", item: "FC 25 XBOX Points 5900 Points", price: "50,5659" },
            { cat: "EA Sports FC Points", sub: "Gift Cards & Códigos", item: "FC 25 XBOX Points 12000 Points", price: "101,1439" },
            { cat: "EA Gift Cards US", sub: "Gift Cards & Códigos", item: "15 USD", price: "15,9599" },
            { cat: "EA Gift Cards US", sub: "Gift Cards & Códigos", item: "25 USD", price: "27,4186" },
            { cat: "Nintendo Switch US", sub: "Gift Cards & Códigos", item: "3 Months Online", price: "8,6757" },
            { cat: "Nintendo Switch US", sub: "Gift Cards & Códigos", item: "12 Months Online", price: "21,6953" },
            { cat: "Wild Rift LATAM", sub: "Gift Cards & Códigos", item: "425 WC", price: "6,171" },
            { cat: "Wild Rift LATAM", sub: "Gift Cards & Códigos", item: "1000 WC", price: "12,342" },
            { cat: "Wild Rift LATAM", sub: "Gift Cards & Códigos", item: "4800 WC", price: "61,71" },
            { cat: "Parchis Club", sub: "Gift Cards & Códigos", item: "550 GEM", price: "7,3931" },
            { cat: "Parchis Club", sub: "Gift Cards & Códigos", item: "830 GEM", price: "10,3576" },
            { cat: "Parchis Club", sub: "Gift Cards & Códigos", item: "1800 GEM", price: "19,239" },
            { cat: "Parchis Club", sub: "Gift Cards & Códigos", item: "4100 GEM", price: "38,4901" },
            { cat: "Parchis Club", sub: "Gift Cards & Códigos", item: "15400 GEM", price: "118,4711" },
            { cat: "Candy Crush", sub: "Gift Cards & Códigos", item: "15 USD", price: "18,513" },
            { cat: "Candy Crush", sub: "Gift Cards & Códigos", item: "25 USD", price: "30,855" },
            { cat: "Candy Crush", sub: "Gift Cards & Códigos", item: "50 USD", price: "61,71" },
            { cat: "Candy Crush", sub: "Gift Cards & Códigos", item: "100 USD", price: "123,42" },

            // --- MICROSOFT / STREAMING / STEAM ---
            { cat: "Microsoft Windows", sub: "Servicios Digitales", item: "Windows 10 OEM Home", price: "29,6692" },
            { cat: "Microsoft Windows", sub: "Servicios Digitales", item: "Windows 11 OEM Home", price: "34,6544" },
            { cat: "Microsoft Windows", sub: "Servicios Digitales", item: "Windows 10 OEM Pro", price: "49,61" },
            { cat: "Streaming", sub: "Servicios Digitales", item: "Spotify Individual", price: "2,662" },
            { cat: "Streaming", sub: "Servicios Digitales", item: "Netflix cuenta completa (Bajo pedido)", price: "11,495" },
            { cat: "Streaming", sub: "Servicios Digitales", item: "Spotify Familiar", price: "6,292" },
            { cat: "Streaming", sub: "Servicios Digitales", item: "Amazon Prime Video", price: "3,025" },
            { cat: "Streaming", sub: "Servicios Digitales", item: "Max standar cuenta completa", price: "1,815" },
            { cat: "Streaming", sub: "Servicios Digitales", item: "Canva pro edu x 1 AÑO", price: "2,42" },
            { cat: "Streaming", sub: "Servicios Digitales", item: "Disney Plus Premium (Bajo pedido)", price: "9,438" },
            { cat: "Steam Gift Cards USD", sub: "Servicios Digitales", item: "5 USD", price: "6,1952" },
            { cat: "Steam Gift Cards USD", sub: "Servicios Digitales", item: "10 USD", price: "13,0196" },
            { cat: "Steam Gift Cards USD", sub: "Servicios Digitales", item: "20 USD", price: "25,4463" },
            { cat: "Steam Gift Cards USD", sub: "Servicios Digitales", item: "30 USD", price: "36,6509" },
            { cat: "Steam Gift Cards USD", sub: "Servicios Digitales", item: "50 USD", price: "62,0246" },
            { cat: "Steam Gift Cards USD", sub: "Servicios Digitales", item: "100 USD", price: "124,6542" },
            { cat: "Steam Gift Cards USD", sub: "Servicios Digitales", item: "150 USD", price: "192,4505" },
            { cat: "Steam Gift Cards USD", sub: "Servicios Digitales", item: "200 USD", price: "258,467" }
        ];

        const cart = [];
        const cartWindow = document.getElementById('cartWindow');
        const cartWindowSummary = document.getElementById('cartWindowSummary');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const clearCartBtnWindow = document.getElementById('clearCartBtnWindow');
        const cartWidgetBtn = document.getElementById('cartWidgetBtn');
        const cartWidgetSummary = document.getElementById('cartWidgetSummary');
        const sidebarBody = document.getElementById('sidebarBody');
        const whatsappLinks = document.querySelectorAll('.whatsapp-link');
        const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
        const sidebar = document.getElementById('sidebar');
        const grid = document.getElementById('productGrid');
        const filters = document.getElementById('filterContainer');
        const search = document.getElementById('searchInput');

        function addToCart(item) {
            const existing = cart.find(entry => entry.item === item.item && entry.cat === item.cat && entry.sub === item.sub);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ ...item, qty: 1 });
            }
            updateCart();
        }

        function changeCartQty(index, delta) {
            const entry = cart[index];
            if (!entry) return;
            entry.qty += delta;
            if (entry.qty <= 0) {
                cart.splice(index, 1);
            }
            updateCart();
        }

        function removeCartItem(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function renderCartItems() {
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="text-slate-400 text-sm">Tu carrito está vacío.</p>';
                return;
            }

            cartItems.innerHTML = cart.map((item, index) => {
                const itemTotal = (Number(item.price.replace(',', '.')) * item.qty).toFixed(2);
                return `
                    <div class="glass rounded-3xl border border-slate-700 p-3">
                        <div class="flex items-start justify-between gap-3">
                            <div>
                                <p class="text-slate-400 text-xs uppercase tracking-[0.15em]">${item.cat}</p>
                                <h3 class="text-white font-semibold">${item.item}</h3>
                                <p class="text-slate-400 text-xs">${item.sub}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-white font-bold">$${item.price}</p>
                                <p class="text-slate-400 text-xs">x${item.qty} = $${itemTotal}</p>
                            </div>
                        </div>
                        <div class="mt-3 flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <button data-action="decrease" data-idx="${index}" class="px-2 py-1 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 transition">-</button>
                                <span class="text-white font-semibold">${item.qty}</span>
                                <button data-action="increase" data-idx="${index}" class="px-2 py-1 rounded-full bg-cyan-500 text-black hover:bg-cyan-400 transition">+</button>
                            </div>
                            <button data-action="remove" data-idx="${index}" class="text-sm text-red-400 hover:text-red-300">Eliminar</button>
                        </div>
                    </div>
                `;
            }).join('');
        }

     function buildCartMessage() {
    if (cart.length === 0) return encodeURIComponent('Hola, quiero hacer una consulta.');

    let itemsList = '';
    let total = 0;

    cart.forEach(i => {
        const itemTotal = i.price * i.qty;
        total += itemTotal;
        itemsList += `• ${i.qty}x ${i.item} (${i.cat} - ${i.sub}) | Precio: $${itemTotal.toFixed(2)}\n`;
    });

    const fullMsg = `Hola, deseo realizar el siguiente pedido:\n\n${itemsList}\n*Total a pagar: $${total.toFixed(2)}*`;
    return encodeURIComponent(fullMsg);
}

function updateWhatsAppLinks() {
    const msg = buildCartMessage();
    const checkoutBtn = document.getElementById('checkoutBtn') || document.querySelector('.cart-checkout-btn');
    
    if (checkoutBtn) {
        checkoutBtn.href = `${wsLink}?text=${msg}`;
        checkoutBtn.setAttribute('target', '_blank');
    }
}

function updateCart() {
    const total = cart.reduce((sum, item) => sum + Number(item.price.toString().replace(',', '.')) * item.qty, 0);
    const count = cart.reduce((sum, item) => sum + item.qty, 0);

    if (count === 0) {
        cartWindowSummary.textContent = 'Tu carrito está vacío.';
        cartWidgetSummary.textContent = '0 ítems | Total: $0.00';
        cartTotal.textContent = '$0.00';
        updateWhatsAppLinks();
        renderCartItems();
        return;
    }

    const productLabel = count === 1 ? 'producto' : 'productos';
    const widgetLabel = count === 1 ? '1 ítem' : `${count} ítems`;
    cartWindowSummary.textContent = `Llevas ${count} ${productLabel} • Total: $${total.toFixed(2)}`;
    cartWidgetSummary.textContent = `${widgetLabel} | Total: $${total.toFixed(2)}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
    updateWhatsAppLinks();
    renderCartItems();
}

function openCart() {
    cartWindow.classList.remove('hidden');
}

function closeCart() {
    cartWindow.classList.add('hidden');
}

cartWindow.addEventListener('click', e => {
    if (e.target === cartWindow) {
        closeCart();
    }
});

clearCartBtnWindow.addEventListener('click', () => {
    cart.length = 0;
    updateCart();
});

cartWidgetBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-collapsed');
    const icon = toggleSidebarBtn.querySelector('i');
    icon.classList.toggle('fa-chevron-left');
    icon.classList.toggle('fa-chevron-right');
});

cartItems.addEventListener('click', e => {
    const button = e.target.closest('button[data-action]');
    if (!button) return;
    const index = Number(button.dataset.idx);
    if (button.dataset.action === 'increase') {
        changeCartQty(index, 1);
    } else if (button.dataset.action === 'decrease') {
        changeCartQty(index, -1);
    } else if (button.dataset.action === 'remove') {
        removeCartItem(index);
    }
});

grid.addEventListener('click', e => {
    const btn = e.target.closest('.add-to-cart-btn');
    if (!btn) return;
    const index = Number(btn.dataset.idx);
    if (!Number.isNaN(index)) {
        addToCart(data[index]);
    }
});

const uniqueCats = [...new Set(data.map(i => i.cat))];
uniqueCats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'category-pill px-4 py-3 rounded-2xl text-[11px] uppercase tracking-wider text-slate-200 text-left';
    btn.textContent = cat;
    btn.dataset.cat = cat;
    filters.appendChild(btn);
});

function render(filterText = '', filterCat = 'all') {
    grid.innerHTML = '';
    const filtered = data.filter(i => {
        const matchesSearch = i.item.toLowerCase().includes(filterText.toLowerCase()) || 
                             i.cat.toLowerCase().includes(filterText.toLowerCase());
        const matchesCat = filterCat === 'all' || i.cat === filterCat;
        return matchesSearch && matchesCat;
    });

    if (filtered.length === 0) {
        document.getElementById('emptyState').classList.remove('hidden');
    } else {
        document.getElementById('emptyState').classList.add('hidden');
        filtered.forEach((i, idx) => {
            const directMsg = encodeURIComponent(`Hola, deseo realizar el siguiente pedido:\n\n• 1x ${i.item} (${i.cat} - ${i.sub}) | Precio: $${i.price}\n\n*Total a pagar: $${i.price}*`);
            const directWsLink = `${wsLink}?text=${directMsg}`;

            grid.innerHTML += `
                <div class="product-card rounded-xl p-4 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-[10px] font-bold py-0.5 px-2 rounded bg-slate-800 text-cyan-400 uppercase tracking-tighter">${i.cat}</span>
                            <span class="text-[10px] text-slate-500 italic uppercase">${i.sub}</span>
                        </div>
                        <h3 class="text-lg font-bold text-white leading-tight mb-4">${i.item}</h3>
                    </div>
                    <div class="flex flex-col gap-3 border-t border-slate-800/50 pt-3">
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="block text-[10px] text-slate-500 uppercase">Precio USD</span>
                                <span class="price-tag text-2xl font-black">$${i.price}</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <button data-idx="${data.indexOf(i)}" class="add-to-cart-btn flex-1 px-3 py-2 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition text-sm">Agregar</button>
                            <a href="${directWsLink}" target="_blank" class="whatsapp-link h-10 w-10 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-black transition-all flex items-center justify-center group shadow-lg">
                                <i class="fab fa-whatsapp text-lg group-hover:scale-110"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}

search.addEventListener('input', e => {
    const activeBtn = document.querySelector('.category-pill.active');
    const cat = (activeBtn && activeBtn.dataset) ? activeBtn.dataset.cat : 'all';
    render(e.target.value, cat);
});

filters.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        render(search.value, e.target.dataset.cat || 'all');
    }
});

render();
updateCart();
