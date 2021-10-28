import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <div className="grid grid-cols-12 gap-6 my-14 px-5 lg:px-48 sm:px-20 md:px-32">
          <div className="lg:col-span-3 col-span-12 bg-white dark:bg-dark-500 rounded-2xl p-4 text-center">
            <Sidebar />
          </div>
          <div className="lg:col-span-9 col-span-12 bg-white rounded-2xl dark:bg-dark-500 overflow-hidden">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
