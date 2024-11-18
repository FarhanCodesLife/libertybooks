export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <header className="p-4 bg-red-700 text-white shadow-md">
          <h1 className="text-xl font-bold text-center">11.11 SALE is LIVE up to 90% off!
          <span className="border p-2 m-2 bg-yellow-400 text-black rounded-md">SHOP NOW</span></h1>
        </header>
<div className="p-2 bg-gray-200 w-full flex justify-between
 items-center">

<div className="bg- flex  justify-center">
  <div className=" px-10 py-2">
    +92 318 212 7256 </div>
  <div className=" px-5 py-2">
    farhan0318@gmail.com
  </div>
</div>
<div className=" bg-slate-300 border border-zinc-400 rounded-xl px-5  py-1">
  Select Languages
</div>
</div>

<div className="bg-red-600 px-10 py-5 font-semibold flex justify-between items-center">
  <div>
     <h1 className="text-4xl">Liberty Books
   </h1>
    </div>
    <div>
      <h1 className="text-xl">
      Hello Farhan <span className=" border px-3 py-1 rounded-md bg-yellow-400">Signin</span>
      </h1>
    </div>
</div>
        <main className="flex-grow p-6">{children}</main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          © 2024 Books API - All rights reserved.
        </footer>
      </body>
    </html>
  );
}
