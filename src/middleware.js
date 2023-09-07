import { NextResponse } from "next/server";

export function middleware(request) {
        if (request.nextUrl.pathname.startsWith('/profile')) { // profil sayfasına gelince user varmı yokmu kontrol ettik 
            if (!request.cookies.has("userId")) {
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
        if(request.nextUrl.pathname.startsWith('/login') ||
        request.nextUrl.pathname.startsWith('/register')){
            if(request.cookies.has("userId")){
                console.log("user var");
                return NextResponse.redirect(new URL("/",request.url));
            }
        }
    // Eğer herhangi bir yönlendirme gerçekleşmezse, varsayılan bir NextResponse döndürebilirsiniz.
    const Response = NextResponse.next();
    Response.cookies.set("aa", "veli");
    // istediğimiz veriyi cookie ye yazabiliriz bu şekilde

    return Response;
}

export const config = { // hangi sayfalarda kontrol yapılacak onu belirledik
    matcher: ['/admin','/profile/:path*','/login','/register']
};
