
// data for navgation bar
export const navData = [
    { url: 'https://media.istockphoto.com/id/516137066/photo/magic-book-with-shining-lights.jpg?s=612x612&w=0&k=20&c=wmRWM6MWdGn_6cmPxDfMXtWM-xZTB6fb-o6foGEQzbw=', text: 'Fiction', name:"Fiction" },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyDH2xH6TgG1gUNNW08vEJdIJBFjuUwm0ICA&usqp=CAU', text: 'Fantasy', name:"Fantasy" },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4agaN9f5NW1nVQgafGUC8oPieU4h8_vc4Zw&usqp=CAU', text: 'History' ,name:"History" },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58uCOFmA5NZfFxTn-QcoCsf2o2yck2a8C1A&usqp=CAU', text: 'Biography', name:"Biography" },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejyaxO8plwCgtmlU4IPPnOSErHleoNK5WZw&usqp=CAU', text: 'Exam', name:"Exam" },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSam4thQJIMAsXYfI2UwEnTCeNUUkRx9xd8Ng&usqp=CAU', text: 'Mistory' , name:"Mistory" },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqY16bfobbjivsZb2u6WEgzJ3C8PN0txWnA&usqp=CAU', text: 'Getting Rich', name:"Money" },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAKLxgjoF0NbytCaf4B5qhy9PcjgdcbT95w&usqp=CAU', text: 'Health', name:"Health" },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMTeWl95cjuHuvwVyivNsBKP9wRYJVp26Zg&usqp=CAU', text: 'success', name:"Success" },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbMZzwuIoeXHWr6GjVc0M8SuStwfaabE-TA&usqp=CAU', text: 'Romance', name:"Romance" },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxXDwWw4qRSL2MqB6-k9Gm1riDpMrvTP9_A&usqp=CAU', text: 'Horror', name:"Horror" }
];


// data for latest books in trend
export const bannerData = [
    { id: 1, url: 'https://c4.wallpaperflare.com/wallpaper/413/495/729/game-of-thrones-wallpaper-preview.jpg' },
    { id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkhxb_r7YO2rA8wwvStshhj8G3wj10sL_EFA&usqp=CAU' },
    { id: 3, url: 'https://c4.wallpaperflare.com/wallpaper/859/280/18/movies-harry-potter-harry-potter-and-the-order-of-the-phoenix-the-order-men-with-glasses-1280x960-entertainment-movies-hd-art-wallpaper-preview.jpg' },
    { id: 4, url: 'https://wallpapercave.com/dwp1x/Y4kqIiW.jpg' },
    { id: 5, url: 'https://c4.wallpaperflare.com/wallpaper/797/633/218/tyrion-lannister-game-of-thrones-wallpaper-preview.jpg' },
    { id: 6, url: 'https://c4.wallpaperflare.com/wallpaper/620/105/243/the-lord-of-the-rings-the-hobbit-hd-the-hobbit-movie-poster-wallpaper-preview.jpg' },
    { id: 7, url: 'https://wallpapercave.com/dwp1x/BosZbuR.jpg'}
];



// list of authors
export const authorsArray = ["A.K. Gandhi","Agatha Christie","Blake Olivie","Brown Dan","Carter Eva","DR A P J Abdul Kalam","Daniel Kahneman","Du Maurier Daphne","Genric Author","George S. Clason","Gillian Flynn","Graham Benjamin","Haynes Natalie","Hill Napoleon","Isaacson Walter","J. R. R. Tolkien","Lewis C. S.","Martin George R. R.","Obama Michelle","Prose Nita","R. Stephen Covey","Riley Lucinda","Robbins Anthony","Robbins Tony","Robert T. Kiyosaki","Rowling J. K.","Thomas J","Yousafzai Malala"]

//list of sellers
export const sellerArray = ["AmazingBuy","Amanbooksmart","BOOKSWAGONN","BestsellingBooks","Dunagiribookstore","FINDINGBOOKS1","GlobalRetailVentures","krishnastoreCompany","Micybook","NSPRetail","NEOSELLERS","OverseasOnlineShop","Sumitbookstor1","SUGSHAANnet","SrishtiPD","Samaoppai","Seagroups","Repro Books on Demand","TDVentures","VIKASONNET",]

//list of price range 
export const priceArray  =[100,200,300,400,500,600,700,800,900,1000,2000,3000,4000,5000,6000]

/* Sample product Schema

    { 
        id: 'product1',  // the hobbit
        url: 'https://rukminim1.flixcart.com/image/612/612/l1mh7rk0/book/y/8/6/the-hobbit-original-imagd5phsmwyvbek.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/l1mh7rk0/book/y/8/6/the-hobbit-original-imagd5phsmwyvbek.jpeg?q=70',
        title: {
            shortTitle: 'The Hobbit',
            longTitle: 'The Hobbit  (English, Paperback, Tolkien J. R. R.)'
        }, 
        price: {
            mrp: 399,
            cost: 357,
            discount: '10%'
        },
        author: "Riley Lucinda",
        seller : "Amazing Buy",
        quantity: 1,
        description: "The classic bestseller behind this year's biggest movie, this film tie-in edition features the complete story of Bilbo Baggins' adventures in Middle-earth as shown in the film trilogy, with a striking cover image from Peter Jackson's film adaptation and drawings and maps by J.R.R. Tolkien. Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely travelling further than the pantry of his hobbit-hole in Bag End. But his contentment is disturbed when the wizard, Gandalf, and a company of thirteen dwarves arrive on his doorstep one day to whisk him away on an unexpected journey 'there and back again'. They have a plot to raid the treasure hoard of Smaug the Magnificent, a large and very dangerous dragon... The prelude to The Lord of the Rings, The Hobbit has sold many millions of copies since its publication in 1937, establishing itself as one of the most beloved and influential books of the twentieth century.",
        discount: 'Extra 10% Off', 
        tagline: 'Free Delivery',
        type : ['fiction',"The Hobbit","Riley Lucinda","Amazing Buy" ],
    }
    */

    //images for the payment page
    export const paytm_img_url = "https://rukminim1.flixcart.com/www/96/96/promos/01/09/2020/a07396d4-0543-4b19-8406-b9fcbf5fd735.png?q=100"

    export const upi_wallet = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif";

    export const wallet_img_url = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/Wallets.gif";

    export const emptyImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZph5-UjBkOIzz6YyK6iTt-_B3lEqdmHQZ7g&usqp=CAU';
