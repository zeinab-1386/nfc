import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
           <Header></Header>

            {/* Hero Section */}
            <div className="py-20 text-center" dir="rtl">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">کارت هوشمند دیجیتال بسازید</h1>
                <p className="text-xl text-gray-600 mb-8">اطلاعات تماس خود را به صورت حرفه‌ای به اشتراک بگذارید</p>
                <Link to="/register" className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-blue-700">
                    شروع کنید
                </Link>
            </div>

            {/* Features Section */}
            <div className="max-w-6xl mx-auto px-4 py-16" dir="rtl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-3xl mb-4">🌐</div>
                        <h3 className="text-xl font-semibold mb-2">کارت دیجیتال</h3>
                        <p className="text-gray-600">تمام اطلاعات تماس خود را در یک کارت دیجیتال جمع کنید</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-3xl mb-4">📱</div>
                        <h3 className="text-xl font-semibold mb-2">اشتراک‌گذاری آسان</h3>
                        <p className="text-gray-600">با یک تپ یا اسکن کد QR، اطلاعات خود را به اشتراک بگذارید</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-3xl mb-4">⚡</div>
                        <h3 className="text-xl font-semibold mb-2">بروزرسانی آنی</h3>
                        <p className="text-gray-600">اطلاعات خود را در هر زمان بروزرسانی کنید</p>
                    </div>
                </div>
            </div>

            {/* How it Works Section */}
            <div className="bg-white py-16" dir="rtl">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">چگونه کار می‌کند؟</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">1️⃣</div>
                            <h3 className="font-semibold mb-2">ثبت نام کنید</h3>
                            <p className="text-gray-600">حساب کاربری خود را ایجاد کنید</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">2️⃣</div>
                            <h3 className="font-semibold mb-2">پروفایل بسازید</h3>
                            <p className="text-gray-600">اطلاعات تماس خود را وارد کنید</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">3️⃣</div>
                            <h3 className="font-semibold mb-2">کارت را سفارش دهید</h3>
                            <p className="text-gray-600">کارت NFC خود را سفارش دهید</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">4️⃣</div>
                            <h3 className="font-semibold mb-2">استفاده کنید</h3>
                            <p className="text-gray-600">اطلاعات خود را به اشتراک بگذارید</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8" dir="rtl">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">درباره ما</h4>
                            <p className="text-gray-400">ارائه دهنده کارت‌های هوشمند NFC برای اشتراک‌گذاری حرفه‌ای اطلاعات تماس</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">تماس با ما</h4>
                            <p className="text-gray-400">ایمیل: info@nfccard.ir</p>
                            <p className="text-gray-400">تلفن: ۰۲۱-########</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">لینک‌های مفید</h4>
                            <ul className="space-y-2">
                                <li><Link to="/about" className="text-gray-400 hover:text-white">درباره ما</Link></li>
                                <li><Link to="/contact" className="text-gray-400 hover:text-white">تماس با ما</Link></li>
                                <li><Link to="/faq" className="text-gray-400 hover:text-white">سوالات متداول</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                        <p className="text-gray-400">© ۱۴۰۴ تمامی حقوق محفوظ است.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;