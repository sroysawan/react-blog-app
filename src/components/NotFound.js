import notfound from "../images/notfound.svg";
export default function NotFound() {
  return (
    <div className="container">
      <h3 className="title">ไม่พบหน้าเว็บ (404 Page Not Found)</h3>
      <img src={notfound} alt="not found" />
    </div>
  );
}
