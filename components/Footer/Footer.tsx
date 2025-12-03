import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Nataliia Bybyk</p>
          <p>
            Contact us:
            <a href="mailto:NataliiaBybyk@notehub.app">
              NataliiaBybyk@notehub.app
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
