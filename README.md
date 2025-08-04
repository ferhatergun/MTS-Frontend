Projenin Backend Reposu : https://github.com/nurettinyavuz/MovieReview-BackEnd
## MTS - Movie Tv Series Review

<details open>
<summary>Kullanıcı Paneli Özellikleri</summary> <br/>

- searchbar sayesinde film arama
- film detaylarını görüntüleme
- filmlere yorum yazma ve yıldız verme
- yazılan yorumlara like & dislike atma
- yazdığı yorumu güncelleme
- profil sayfasında yaptığı yorumları listeleme ve silme
- profil sayfasında favori filmlerin listelenmesi

</details>

<details open>
<summary>Admin Paneli Özellikleri</summary> <br/>

- sisteme yüklü filmleri listeler
- film ekleme güncelleme silme yapabilir
- film tablosunu filtreleme
- sisteme kayıtlı tüm kullanıcıları listeler
- kullanıcıları silebilir
- kullanıcıyı kısıtlayabilir
- kullanıcı ismi ve mailden filtreleme yapılabilir
</details>

## Proje Görüntüleri
<details open>
<summary>Kullanıcı Paneli</summary> <br/>

| Ana Sayfa | Film Arama | 
|------|--------|
| ![Ana Sayfa](https://github.com/ferhatergun/MTS-Frontend/blob/main/public/k1.png) | ![Film Arama](https://github.com/ferhatergun/MTS-Frontend/blob/main/public/k2.png)

| Film Detay Sayfası | Film Yorum | 
|------|--------|
| ![Film Detay Sayfası](https://github.com/ferhatergun/MTS-Frontend/blob/main/public/k3.png) | ![Film Yorum](https://github.com/ferhatergun/MTS-Frontend/blob/main/public/k4.png)

| Profil Sayfası |
|------|
| ![Profil Sayfası](https://github.com/ferhatergun/MTS-Frontend/blob/main/public/k5.png) | 




</details>

<details open>
<summary>Admin Paneli</summary> <br/>
  
| Filmler Sayfası | Film Ekle | 
|------|--------|
| ![Film Detay Sayfası](https://github.com/ferhatergun/MTS-Frontend/blob/main/public/a1.png) | ![Film Yorum](https://github.com/ferhatergun/MTS-Frontend/blob/main/public/a2.png)

| Kullanıcılar Sayfası |
|------|
| ![Profil Sayfası](https://github.com/ferhatergun/MTS-Frontend/blob/main/public/a3.png) | 



</details>

## Kullanılan Teknolojiler
- Next.js ( Frontend Framework )
- Firebase ( Resim Depolama Veritabanı )
- Formik & Yup ( Form Validasyon )
- React Redux ( Global State Management )
- MUI & ANTD ( UI Component Paketi )
- Framer Motion ( Animasyon Paketi )
- Embla Carousel ( Film Carousel )
- React Toastify ( Hata-Alert Paketi )
   

### Projeyi Çalıştırma
````
git clone https://github.com/ferhatergun/MTS-Frontend.git

cd MTS-Frontend

npm install

npm run dev
````

### .env dosyası
````
FRONT_URL: http://localhost:3000
BACKEND_URL: http://localhost:5000
apiKey: "YOUR_FIREBASE-APIKEY"
authDomain: "YOUR_FIREBASE_AUTHDOMAIN"
projectId: "YOUR_FIREBASE_PROJECTID"
storageBucket: "YOUR_FIREBASE_STOREBUCKET"
messagingSenderId: "YOUR_FIREBASE_MESSAGINHSENDERID"
appId: "YOUR_FIREBASE_APPID"
measurementId: "YOUR_FIREBASE_MEASUREMENTID"
````
