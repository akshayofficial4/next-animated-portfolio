{/*"use client"
export default function myImageLoader({ src , width , quality }) {
    if(src.startsWith('https://images.pexels.com')) return src
    return `https://akshaynextjsportfolio.netlify.app/${src}?w=${width}&q=${quality || 75}`
}*/}

"use client"
export default function myImageLoader({ src , width , quality }) {
    if(src.startsWith('https://images.pexels.com')) return src
    return `https://akshaysunilportfolio.netlify.app/${src}?w=${width}&q=${quality || 75}`
}
