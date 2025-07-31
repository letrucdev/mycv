import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const AVATAR_URL = "https://randomuser.me/api/portraits/men/32.jpg"; // Avatar mặc định, có thể thay sau

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="cv-root">
      <div style={{ position: "absolute", top: 24, right: 32, zIndex: 10 }}>
        <button
          aria-label="Toggle dark mode"
          onClick={() => setDarkMode((d) => !d)}
          style={{
            background: darkMode ? "#F0B90B" : "#fff",
            color: darkMode ? "#181A20" : "#F0B90B",
            border: "none",
            borderRadius: "50%",
            width: 40,
            height: 40,
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.3s, color 0.3s"
          }}
        >
          {darkMode ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
          )}
        </button>
      </div>
      <div className="cv-2col-layout">
        <aside className="cv-sidebar">
          <div className="cv-avatar-box">
            <img src={AVATAR_URL} alt="avatar" className="cv-avatar" />
          </div>
          <Header
            name="LÊ CHÍNH TRỰC"
            title="Frontend Developer"
            phone="09xx xxx xxx"
            email="letruc.work@gmail.com"
            github="https://github.com/letrucdev"
          />
          <div className="cv-goal-box">
            <h3 className="cv-goal-title">Mục tiêu nghề nghiệp</h3>
            <p className="cv-goal-content">
              Trở thành lập trình viên frontend xuất sắc, không ngừng học hỏi, phát triển kỹ năng và đóng góp cho các dự án lớn.
            </p>
          </div>
        </aside>
        <main className="cv-main">
          <Section title="Giới thiệu">
            <p>
              Lập trình viên Frontend với hơn 2 năm kinh nghiệm làm freelancer, thành thạo ReactJS, VueJS, HTML, CSS, JavaScript/TypeScript. Đã hoàn thành nhiều dự án thực tế cho khách hàng doanh nghiệp, chủ yếu là các hệ thống quản lý người dùng (CRM). Chủ động, tự học nhanh, giao tiếp tốt và luôn hướng tới trải nghiệm người dùng tối ưu.
            </p>
          </Section>
          <Section title="Kỹ năng chuyên môn">
            <ul>
              <li><b>Ngôn ngữ:</b> JavaScript (ES6+), TypeScript, HTML5, CSS3, SASS/SCSS</li>
              <li><b>Framework/Library:</b> ReactJS, NextJS, VueJS, Redux, TailwindCSS, Material UI, Ant Design</li>
              <li><b>Công cụ:</b> Git, Figma, Photoshop, VSCode, Postman</li>
              <li><b>Khác:</b> Responsive Design, RESTful API, Web Performance Optimization, SEO cơ bản</li>
            </ul>
          </Section>
          <Section title="Kinh nghiệm làm việc">
            <h3>Freelance Frontend Developer <span className="cv-time">01/2022 – Nay</span></h3>
            <ul>
              <li>Phát triển nhiều dự án web quản lý người dùng (CRM) cho doanh nghiệp vừa và nhỏ.</li>
              <li>Thiết kế giao diện quản trị, xây dựng các module như quản lý tài khoản, phân quyền, báo cáo, thống kê.</li>
              <li>Tích hợp API, xử lý dữ liệu động, tối ưu trải nghiệm người dùng và hiệu suất hệ thống.</li>
              <li>Phối hợp với backend, designer để đảm bảo sản phẩm hoàn thiện, đúng yêu cầu.</li>
              <li>Chủ động tư vấn giải pháp kỹ thuật, hỗ trợ khách hàng trong quá trình vận hành và bảo trì hệ thống.</li>
            </ul>
          </Section>
          <Section title="Dự án tiêu biểu">
            <ul>
              <li><b>Hệ thống quản lý khách hàng (CRM):</b> Phát triển dashboard quản lý thông tin khách hàng, lịch sử giao dịch, phân loại nhóm khách hàng, tìm kiếm và lọc dữ liệu nâng cao.</li>
              <li><b>Module phân quyền người dùng:</b> Xây dựng chức năng tạo, chỉnh sửa, phân quyền tài khoản theo vai trò (admin, nhân viên, quản lý), đảm bảo bảo mật và dễ sử dụng.</li>
              <li><b>Báo cáo & thống kê:</b> Hiển thị số liệu, biểu đồ trực quan về hoạt động người dùng, doanh số, hiệu quả chiến dịch marketing.</li>
            </ul>
            <p className="cv-note">*Do yêu cầu bảo mật, thông tin chi tiết về dự án và khách hàng không thể công khai.*</p>
          </Section>
          <Section title="Học vấn">
            <p><b>Cử nhân Công nghệ Thông tin</b> – Đại học XYZ (2018 – 2022)</p>
          </Section>
          <Section title="Chứng chỉ & Khóa học">
            <ul>
              <li>ReactJS Advanced (Udemy, 2023)</li>
              <li>Google UX Design Fundamentals (Coursera, 2023)</li>
            </ul>
          </Section>
          <Section title="Liên hệ">
            <p>Nếu cần thêm thông tin hoặc người tham chiếu, vui lòng liên hệ qua email hoặc điện thoại ở trên.</p>
          </Section>
        </main>
      </div>
      <Footer name="Lê Chính Trực" />
    </div>
  );
}

export default App;
