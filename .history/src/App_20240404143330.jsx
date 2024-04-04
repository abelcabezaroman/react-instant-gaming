import './App.css'
import Review from './components/Review'
import Reviews from './components/Reviews'

const data = {
    reviews: [
        {
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating: 5,
                title: "Assassin's Creed Odyssey Deluxe",
                description: "Perfecto, una oferta increíble: Edición Deluxe 13,99 (con IVA). Comprado por Bizum y al instante he recibido el código de activación.",
                date: "hace 22 horas"
            }
        }, {
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating: 5,
                title: "Assassin's Creed Odyssey Deluxe",
                description: "Perfecto, una oferta increíble: Edición Deluxe 13,99 (con IVA). Comprado por Bizum y al instante he recibido el código de activación.",
                date: "Ayer"
            }
        }, {
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating: 5,
                title: "Assassin's Creed Odyssey Deluxe",
                description: "Maravilla de juego!.",
                date: "Ayer"
            }
        }, {
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating: 5,
                title: "Assetto Corsa Ultimate Edition",
                description: "Como siempre!",
                date: "Hace 2 dias"
            }
        }, {
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating: 5,
                title: "River city girls",
                description: "Excelente calidad.",
                date: "hace 3 dias"
            }
        },
    ]

}

function App() {

    return (
        <div className='container'>


            <div className='d-block d-lg-none'>
                <Review data={{
                    avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                    rating: 5,
                    title: "River city girls",
                    description: "Excelente calidad.",
                    date: "hace 3 dias"
                }} />
            </div>
            <Reviews data={data.reviews} />

            <div className='d-none d-lg-block'>
                <Review data={{
                    avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                    rating: 5,
                    title: "River city girls",
                    description: "Excelente calidad.",
                    date: "hace 3 dias"
                }} />
            </div>
        </div>
    )
}

export default App