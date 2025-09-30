const tileData = [
  {
    img: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/df42e818f52a4bb094434d835f444a36/1/GCuCv727RiYFXYTGtzWJiQ/462570137_1009777691163693_2811138529125412320_n.jpg",
    title: "Wedding Event",
    author: "Lovely Events",
  },
  {
    img: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/c53feb95c3c2464b91f7913951d3e9cc/1/GCuCv727RiYFXYTGtzWJiQ/20240322_180038.jpg",
    title: "Corporate Setup",
    author: "Lovely Events",
  },
  {
    img: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/eac69c227ecd487e8879d21d90a627f2/1/GCuCv727RiYFXYTGtzWJiQ/Artboard%207.jpg",
    title: "Birthday Celebration",
    author: "Lovely Events",
  },
  {
    img: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/d2a534bc4eee478c9e196d34a6a992d0/1/GCuCv727RiYFXYTGZD1tbW/N40A3541.jpg",
    title: "Charity Gala",
    author: "Lovely Events",
  },
  {
    img: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/d5ef4492318647549816af80348f598e/1/GCuCv727RiYFXYTGtzWJiQ/462576117_1137436914484531_3192872610108771463_n.jpg",
    title: "Charity Gala",
    author: "Lovely Events",
  },
  {
    img: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/fad4b0c75bc642549d8fc4aaa6635bb4/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/IMG_0450%20%25281%2529.jpg",
    title: "Charity Gala",
    author: "Lovely Events",
  },
  {
    img: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/e3688e9d18a9475780bea36d882b0446/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/20190216_195111.jpg",
    title: "Charity Gala",
    author: "Lovely Events",
  },
  {
    img: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/d36b40c1b4d845db95169a1a4c94f48b/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/474948596_1047542260748655_3090923181724076309_n.jpg",
    title: "Charity Gala",
    author: "Lovely Events",
  },
  {
    img: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/edc114876b164f9ebd49056656c76471/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/20220514_131432.jpg",
    title: "Charity Gala",
    author: "Lovely Events",
  },
  {
    img: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/a90ff3dddb9944c4b4e60e039cb10626/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/download.jpeg",
    title: "Charity Gala",
    author: "Lovely Events",
  },
  {
    img: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/eaf1589d7fdf449cb4e9b6b59568e512/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/Artboard%206.jpg",
    title: "Charity Gala",
    author: "Lovely Events",
  },
  {
    img: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/e251dad6b0b0489aa92cfba8d7a3c33e/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/484503496_1087862120050002_6929911495725073060_n.jpg",
    title: "Charity Gala",
    author: "Lovely Events",
  },
]

export default function FeaturedCampaigns() {
  return (
    <section className="py-16 px-4 bg-background pb-[200px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight mb-6 leading-tight tracking-tight text-black mb-6 text-center">Recent Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tileData.map((tile, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={tile.img || "/placeholder.svg"}
                  alt={tile.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">{tile.title}</h3>
                <p className="text-white/80 text-sm">by {tile.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
