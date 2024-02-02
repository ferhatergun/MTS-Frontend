import { NextResponse } from "next/server";

export function middleware(request) {
        if (request.nextUrl.pathname.startsWith('/admin')) { // admin sayfasına gelenleri admin mi değilmi kontrol ettirdik
            if (!request.cookies.has("adminId")) {
                console.log("admin yok");
                return NextResponse.redirect(new URL("/loginadmin",request.url));
            }
        }
        if(request.nextUrl.pathname.startsWith('/loginadmin')){ // admin tekrar admin girişi görmesin diye
            if(request.cookies.has("adminId")){
                console.log("admin var");
                return NextResponse.redirect(new URL("/admin",request.url));
            }
        }
        if(request.nextUrl.pathname.startsWith('/login') || // giriş yapmış kişiler tekrar giriş sayfasına girmesin diye
        request.nextUrl.pathname.startsWith('/register')){
            if(request.cookies.has("userId")){
                console.log("user var");
                return NextResponse.redirect(new URL("/",request.url));
            }
        }
    // Eğer herhangi bir yönlendirme gerçekleşmezse, varsayılan bir NextResponse döndürebilirsiniz.
    const Response = NextResponse.next();
    //Response.cookies.set("aa", "veli");
    // istediğimiz veriyi cookie ye yazabiliriz bu şekilde

    return Response;
}

export const config = { // hangi sayfalarda kontrol yapılacak onu belirledik
    matcher: ['/admin/:path*','/login','/register','/loginadmin']
};
