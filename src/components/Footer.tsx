import { profile } from '../data'

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {year} {profile.name}. Built with React & Vite.
        </span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
