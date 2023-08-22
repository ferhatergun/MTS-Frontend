import { NextResponse } from "next/server";

export function middleware(request) {
    if (request.cookies) {
        if (request.nextUrl.pathname.startsWith('/profile')) { // profil sayfasına gelince user varmı yokmu kontrol ettik 
            if (!request.cookies.has("user")) {
                console.log("user yok");
                return NextResponse.redirect(new URL("/login",request.url)); 
            }
        }
        if (request.nextUrl.pathname.startsWith('/admin')) { // admin sayfasına gelenleri admin mi değilmi kontrol ettirdik
            if (!request.cookies.has("admin")) {
                console.log("admin yok");
                return NextResponse.redirect(new URL("/loginadmin",request.url));
            }
        }
    }
    // Eğer herhangi bir yönlendirme gerçekleşmezse, varsayılan bir NextResponse döndürebilirsiniz.
    return NextResponse.next();
}

export const config = { // hangi sayfalarda kontrol yapılacak onu belirledik
    matcher: ['/admin','/profile']
};
