import React from "react";
import { Link } from 'react-router-dom';

function Footer(){
    return(
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
    );
}

export default Footer;