import Evolution from "./Evolution";
import Logo from "./Logo";
import Type_effect from "./Type-effect";

const Card_info = () => {
    return (

    <>
        <h1>Card-info</h1>
        <p>
                Kartu informasi, atau 'card info', adalah elemen desain yang digunakan untuk menampilkan berbagai jenis informasi dalam tampilan yang terstruktur dan menarik. Kartu ini dapat berisi beragam data, mulai dari detail produk dan kontak hingga berita, 
                profil pengguna, atau informasi acara. Mereka sering digunakan dalam desain UI dan aplikasi web, 
                memudahkan presentasi informasi dengan format yang fleksibel dan mudah dibaca, serta cocok untuk 
                berbagai jenis perangkat dan ukuran layar."
        </p>

        <Evolution Judul="Props untuk Evolution - versi 2"  />
        <Logo Judul="Props untuk Logo - versi 2"/>
        <Type_effect  Judul="Props untuk Type Effect - versi 2"/>

        
        <p><em>Created by Andreas Jeno Figo Topuh</em></p>
    </>
  
    )

    
}

export default Card_info;